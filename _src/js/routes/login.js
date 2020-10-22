const login = {
    props: ['lists', 'user'],
    data() {
        return {
            email: '',
            password: '',
            error: null,
            from: null
        };
    },
    template: `<main>
            <div class="card border-0" style="max-width: 32em">
                <div class="card-header">
                    <h2>Log in</h2>
                    <div class="card bg-warning card bg-warning mt-3 text-dark" v-if="error">
                        <h4>Error:</h4>
                        <p>{{error}}</p>
                    </div>
                </div>
                <div class="card-body">
                        
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <!--
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="remember" checked>
                            <label class="form-check-label" for="remember">Remember me?</label>
                        </div>
                        -->
                        <button type="submit" class="btn btn-primary mt-4">Submit</button>
                    </form>                
                </div>
                <div class="card-footer">
                    <small>
                    <a href="#">
                        Forgot your password?
                    </a>
                    </small>
                </div>
            </div>                  
        </main>`,
    mounted() {},
    methods: {
        login() {
            const info = {
                email: this.email,
                pass: this.password
            };

            firebase.auth().signInWithEmailAndPassword(info.email, info.pass)
                .then(() => {
                    this.$router.push(this.from ? this.from : '/');
                }).catch((error) => {
                    this.error = error.message;
                });
        }



    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.from = from;
        });
    },

};