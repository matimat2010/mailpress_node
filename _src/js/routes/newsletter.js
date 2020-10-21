const newsletter = {
    // props: ['lists'],
    data() {
        return {
            list: null,
            error: null,
            move: 0,
            ease: '400ms',
            delay: 2000,
            user: null,
            committed: false
        };
    },
    template: `<main>
                    <div v-if="list">
                        <section class="single-product">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-5">
                                        <img class="border d-block" v-if="list.images.length === 1" :src="list.images[0]" width="445" height="500" />
                                        <div v-else id="product-slider" class="carousel slide carousel-fade" data-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item" v-for="img,i of list.images" :class="(i === 0 ? 'active' : '')">
                                                    <img :src="img" class="d-block border" alt="" width="445" height="500">
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#product-slider" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#product-slider" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>   
                                    <div class="col-md-7">

                                        <!-- new -->
                                        <!-- <p class="new-arrival text-center">new</p> -->

                                        <!-- list title -->
                                        <h2>{{list.name}}</h2>

                                        <!--<h6 class="mt-2 pb-3 text-muted">Deployed {{list.frequency.num}} times {{getFrequency(list.frequency.per)}}</h6>-->
                                        <!--  <p>Product Code: IRSC</p>  --> 

                                        <!-- stars -->
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>

                                        <!-- price -->
                                        <p class="price">USD {{ '$'+list.price.cost }}{{getFrequency(list.price.freq)}}</p>

                                        <!-- availability -->
                                        <p><b>Availability:</b> In Stock</p>

                                        <!--- 
                                        <p><b>Condition:</b> New</p>
                                        <p><b>Brand:</b> Company</p>
                                        <p><b>Availability:</b> In Stock</p>
                                        <label>Quantity: </label>
                                        <input type="text" value="1"> 
                                        -->

                                        <!-- subscribe -->
                                        <button v-if="user" type="button" @click="handleStripe()" class="btn btn-primary ml-0" id="checkout-button">Subscribe</button>
                                        <div v-else class="mt-3">
                                            <router-link to="/login" class="btn btn-primary ml-0">Login to subscribe &raquo;</router-link>
                                            <small class="d-block mt-1">
                                                <router-link to="/register">Need an account?</router-link>
                                            </small>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </section>
                        <!--description-->
                        <section class="product-description">
                            <div class="container">
                                <h6>{{list.name}}</h6>
                                <div v-html="list.desc"></div>
                                <hr>
                            </div>                                    
                        </section>
                    </div>
                    <div class="container" v-else>
                        <div class="card bg-warning" v-if="error">
                            <div class="card-body">
                                <p>Hmmm... something went wrong. Please try another page.</p>
                                <router-link to="/">&laquo; back to homepage</router-link>
                            </div>
                        </div>
                    </div>
                </main>`,
    mounted() {
        window.scrollTo(0, 0, 'smooth');
        if (this.$route.query.user) this.user = this.$route.query.user;
        else this.getUser();
        this.getNewsletter();
    },
    methods: {
        getFrequency(frequency) {
            let freq = ' / ';
            if (frequency === 'monthly') freq += 'mo.';
            else if (frequency === 'bi-weekly') freq = frequency;
            else if (frequency === 'daily') freq += 'day';
            else if (frequency === 'weekly') freq += 'week';
            else if (frequency === 'yearly' || freq === 'annual') freq += 'year';
            else freq += frequency;
            return freq;
        },
        getNewsletter() {
            var list = null;
            var docRef = db.collection("newsletters").doc(this.$route.query.list);
            docRef.get().then((doc) => {
                    if (doc.exists) list = doc.data();
                    else this.error = true;
                })
                .then(() => {
                    this.list = list;
                    // if (this.list.images.length > 1) this.cycleImages(this.list.images.length);
                }).catch((error) => {
                    this.error = true;
                });
        },
        getUser() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    if (user.displayName) this.user = user.displayName;
                    else this.user = user.email;
                }
            });
        },
        handleStripe() {
            // Create an instance of the Stripe object with your publishable API key
            var stripe = Stripe('pk_test_51HZlTtA5YRGP79ZvTt31kfhAHxkE0WUM50Bmj0RrSLoTZjAW0TOwWM1VVvycsaikA4Xph3TJ3zBRBTvoEuVcfj1T00tAmlOvBA');

            // Create a new Checkout Session using the server-side endpoint you
            // created in step 3.
            fetch(`/create-checkout-session-${this.list.id}`, {
                    method: 'POST',
                })
                .then(function(response) {
                    if (response.status == '404') console.log('Error:', response.statusText);
                    else return response.json();
                })
                .then(function(session) {
                    return stripe.redirectToCheckout({ sessionId: session.id });
                })
                .then(function(result) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, you should display the localized error message to your
                    // customer using `error.message`.
                    if (result.error) {
                        alert(result.error.message);
                    }
                })
                .catch(function(error) {
                    console.error('Error:', error);
                });


        }
    },
    watch: {
        // if the path changes, update the newsletter content
        $route(to, from) {
            if (to.query.list !== from.query.list) this.getNewsletter();
        }
    }

};