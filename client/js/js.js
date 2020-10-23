"use strict";

/**
 *
 * Gulp / svgmin use this template to create the svgs.js file that allows
 * our javascript to embed the svgs
 *
 **/
var svgs = {
    "icon": {
        'viewBox': '0 0 440.25 500',
        content: '<path class="paper" d="M220.12 351.413L440.25 202.82H0z"/><path class="left" d="M220.12 351.413L0 500V202.82l220.12 148.593"/><path class="right" d="M220.12 351.413L440.25 500V202.82L220.12 351.413"/><path class="top" d="M220.12 0l220.13 202.82H0z"/><path class="bot" d="M220.12 351.413L440.25 500H0l220.12-148.587"/>',
    },

    "logo": {
        'viewBox': '0 0 998.234 213.84',
        content: '<path class="paper" d="M92.621 147.865l92.625-62.524H0z"/><path class="left" d="M92.621 147.865L0 210.387V85.341l92.621 62.524"/><path class="right" d="M92.621 147.865l92.625 62.522V85.341l-92.625 62.524"/><path class="top" d="M92.621 0l92.625 85.341H0z"/><path class="bot" d="M92.621 147.865l92.625 62.522H0l92.621-62.522"/><g><path class="mailpress" d="M498.457 111.869c-4.045 0-7.482 1.416-10.313 4.247s-4.246 6.337-4.246 10.515c0 4.181 1.416 7.684 4.246 10.514 2.83 2.832 6.268 4.247 10.313 4.247 4.176 0 7.715-1.415 10.617-4.247 2.896-2.83 4.346-6.333 4.346-10.514 0-4.178-1.449-7.684-4.346-10.515-2.903-2.831-6.442-4.247-10.617-4.247zm-12.942 99.545h26.287v-61.929h-26.287v61.929zm503.215-48.125c-6.336-5.39-14.289-9.838-23.859-13.346-4.988-1.75-8.795-3.336-11.424-4.752-2.629-1.415-3.943-2.998-3.943-4.751 0-2.29 1.111-4.277 3.336-5.966 2.225-1.683 5.02-2.527 8.393-2.527 4.313 0 8.457.54 12.434 1.619 3.975 1.079 8.525 2.764 13.648 5.054l7.887-17.592c-4.584-3.1-10.178-5.592-16.781-7.481-6.607-1.885-12.203-2.83-16.783-2.83-11.729 0-21.031 2.664-27.904 7.986-6.875 5.328-10.314 12.637-10.314 21.939 0 7.414 3.102 13.547 9.303 18.4 6.199 4.852 13.951 8.83 23.252 11.931 11.457 3.506 17.189 7.886 17.189 13.144 0 2.697-1.688 4.784-5.057 6.266-3.371 1.486-7.076 2.227-11.119 2.227-6.895 0-15.6-2.15-26.543-7.368-.361 7.403-2.627 13.681-6.764 18.755 4.176 2.879 10.102 5.652 16.119 7.215 6.738 1.75 12.602 2.629 17.59 2.629 13.211 0 23.32-2.66 30.332-7.987 7.008-5.324 10.514-12.906 10.514-22.748-.002-7.817-3.17-14.424-9.506-19.817zm-75.865 0c-6.338-5.39-14.291-9.838-23.859-13.346-4.99-1.75-8.797-3.336-11.426-4.752-2.629-1.415-3.941-2.998-3.941-4.751 0-2.29 1.111-4.277 3.336-5.966 2.225-1.683 5.02-2.527 8.391-2.527 4.313 0 8.459.54 12.436 1.619 3.816 1.037 12.422 3.893 17.498 6.719.063-7.219 2.004-13.445 5.793-18.599-4.584-3.099-11.936-6.25-18.539-8.14-6.605-1.885-12.201-2.83-16.783-2.83-11.729 0-21.029 2.664-27.902 7.986-6.875 5.328-10.314 12.637-10.314 21.939 0 7.414 3.1 13.547 9.303 18.4 6.199 4.852 13.951 8.83 23.252 11.931 11.457 3.506 17.188 7.886 17.188 13.144 0 2.697-1.686 4.784-5.055 6.266-3.371 1.486-7.076 2.227-11.121 2.227-7.146 0-15.705-2.227-25.68-6.674l-7.887 17.793c4.178 3.236 9.637 5.732 16.379 7.482 6.738 1.75 12.604 2.629 17.592 2.629 13.211 0 23.32-2.66 30.33-7.987 7.008-5.324 10.516-12.906 10.516-22.748-.003-7.815-3.173-14.422-9.507-19.815zm-459.848-47.922c-6.471-3.1-13.617-4.65-21.432-4.65-4.584 0-10.719.909-18.4 2.729-7.686 1.819-13.281 3.876-16.783 6.167l7.076 21.838c3.771-1.75 8.357-3.267 13.75-4.55 5.391-1.279 10.313-1.921 14.76-1.921 4.852 0 8.66 1.384 11.424 4.145 2.762 2.766 4.211 5.376 4.348 10.36h-19.21c-11.322 0-20.355 2.643-27.093 8.102-6.742 5.46-10.111 14.532-10.111 24.507 0 9.705 2.965 17.424 8.898 23.152 5.93 5.73 14.76 8.594 26.488 8.594 7.342 0 14.418-2.853 21.23-8.559v6.133h26.285v-64.503c0-6.876-1.92-13.074-5.764-18.603-3.839-5.527-8.997-9.837-15.466-12.941zm-5.055 69.118c-6.607 5.686-13.818 8.527-21.635 8.527-3.641 0-6.643-.946-8.998-2.842-2.359-1.894-3.539-4.145-3.539-6.751 0-3.313 1.314-6.797 3.943-9.168 2.629-2.367 6.098-4.101 10.412-4.101h19.816v14.335zm105.1-.313c-2.201-2.853-3.424-6.494-3.68-10.923V65.448h-26.084V176.1c0 11.17 3.43 19.846 10.291 26.031 4.236 3.82 9.504 6.453 15.793 7.916 3.896.904 8.178 1.367 12.861 1.367.404 0 .832-.039 1.248-.058v-22.351c-4.493-.036-7.972-1.645-10.429-4.833zm268.205-66.58c-6.742-4.582-16.387-6.875-26.227-6.875-10.109 0-18.873 2.123-26.285 6.369-7.416 4.246-13.113 10.28-17.088 18.097-3.977 7.82-5.963 16.919-5.963 27.298 0 16.043 4.818 28.611 14.457 37.711 9.637 9.099 23.758 13.648 42.361 13.648 7.951 0 14.828-1.045 20.625-3.135 5.793-2.088 11.186-5.086 16.176-8.998l-7.684-19.006c-4.988 2.83-9.639 4.987-13.953 6.469-4.314 1.486-9.168 2.227-14.559 2.227-9.301 0-16.211-1.821-20.725-5.461-4.518-3.64-7.449-8.896-8.795-15.771l67.475-2.71v-5.378c0-9.562-.266-16.883-3.498-24.629-3.233-7.751-9.579-15.272-16.317-19.856zm-46.799 31.961c1.254-4.861 3.385-8.684 6.42-11.438 3.639-3.301 8.152-4.953 13.547-4.953 5.389 0 9.807 1.618 13.244 4.853 2.877 2.707 5.012 6.564 6.426 11.539h-39.637zm-468.969-6.012l-48.587-78.093h-27.977v145.966h27.977v-90.52l44.836 70.75h7.502l44.834-70.75v90.52h27.977V65.448h-27.977l-48.585 78.093zm433.356-28.65c-2.979-1.031-6.127-1.546-9.445-1.546-4.354 0-8.189 1.202-11.508 3.606-3.324 2.405-6.455 5.153-8.287 8.245v-11.852H683.33v98.069h26.285v-58.392c0-4.007 1.5-7.474 3.391-10.393 1.891-2.92 5.008-4.379 9.361-4.379 2.289 0 4.264.343 5.926 1.03 1.615.668 7.063 3.99 9.434 6.665 1.111-4.938 2.734-9.569 4.904-13.835a51.29 51.29 0 016.611-9.95c-2.787-2.71-6.532-5.934-10.387-7.268zM659.501 78.11c-10.045-8.43-23.152-12.662-39.328-12.662h-57.074v22.205h14.004v123.761h26.084V170.19h15.166c10.109 0 19.41-1.93 27.902-5.794 8.492-3.858 15.334-9.81 20.525-17.848 5.188-8.038 7.783-17.885 7.783-29.549.001-17.495-5.022-30.457-15.062-38.889zm-20.525 63.62c-4.719 4.675-11.119 7.755-19.209 7.755h-16.58V87.653h16.178c9.029 0 15.871 2.579 20.521 7.253 4.65 4.676 6.977 13.72 6.977 24.429-.539 9.354-3.168 17.722-7.887 22.395z"/><path class="the" d="M504.98 77.034a2 2 0 00-2 2c0 3.402-1.906 6.372-5.23 8.15-3.743 2.003-8.236 1.955-11.628-.041a85.866 85.866 0 005.513-9.91c2.174-4.642 6.221-13.283 3.453-20.538-1.172-3.072-3.631-4.834-6.75-4.834-2.461 0-5.297 1.133-7.584 3.03-4.41 3.651-6.908 9.531-6.854 16.13.053 6.601 2.574 12.78 6.813 16.922-4.067 5.554-9.697 11.194-15.107 9.806-4.939-1.268-4.668-9.805-4.406-18.061.27-8.472.549-17.232-4.66-20.863-1.266-.882-2.715-1.092-4.186-.607-3.78 1.244-8.047 7.819-12.726 19.552a1.998 1.998 0 00-.543-1.135c-.171-6.75-.075-13.931.598-21.196 13.402-5.938 26.465-31.745 24.352-44.164-.826-4.857-3.975-7.643-8.635-7.643-.373 0-.76.017-1.162.053-10.339.912-16.512 17.381-18.356 48.937-6.31 2.3-12.57 3.072-17.825 2.278.46-1.844.949-3.764 1.45-5.729 3.084-12.089 6.273-24.591 5.422-29.838a2 2 0 00-3.949.642c.719 4.424-2.645 17.611-5.348 28.207a1070.25 1070.25 0 00-1.461 5.773 17.961 17.961 0 01-1.812-.726c-3.908-1.852-6.568-4.91-7.906-9.088a2.002 2.002 0 00-3.811 1.22c1.666 5.2 5.125 9.171 10.004 11.483.823.39 1.682.73 2.571 1.024-.606 2.561-1.108 4.868-1.418 6.734l-.17 1.011c-1.279 7.598-3.215 19.081 1.486 25.611 1.338 1.859 3.234 2.86 5.48 2.892l.111.001c5.625 0 12.453-6.094 16.644-10.485.091 1.886.19 3.74.299 5.521a1.998 1.998 0 003.89.519l.066-.196c6.406-18.958 11.432-26.616 13.998-27.461.271-.089.422-.068.648.09 3.43 2.39 3.186 10.048 2.951 17.453-.314 9.832-.637 19.999 7.408 22.063.875.225 1.76.336 2.656.336 5.311 0 10.966-3.921 16.565-11.506 2.381 1.466 5.165 2.214 8.003 2.214a16.58 16.58 0 007.801-1.955c4.598-2.459 7.344-6.825 7.344-11.677a1.998 1.998 0 00-1.999-1.999zM454.587 7.67c.281-.025.551-.037.811-.037 1.844 0 4.041.49 4.691 4.314 1.721 10.108-9.109 32.125-20.09 38.823 1.792-27.16 6.94-42.426 14.588-43.1zm-35.873 82.449h-.064c-.982-.014-1.689-.394-2.291-1.23-3.724-5.174-1.886-16.089-.787-22.609l.17-1.018c.294-1.764.776-3.978 1.36-6.447 1.65.275 3.373.421 5.158.421 4.185 0 8.691-.767 13.285-2.268-.575 7.233-.616 14.335-.421 20.984-3.448 4.084-11.537 12.167-16.41 12.167zm64.299-5.536c-3.152-3.391-5.072-8.404-5.113-13.596-.045-5.392 1.926-10.136 5.404-13.018 1.57-1.301 3.498-2.11 5.033-2.11 1.467 0 2.426.718 3.014 2.26 2.162 5.669-1.418 13.311-3.34 17.417a81.542 81.542 0 01-4.998 9.047z"/></g>',
    },
};
"use strict";

Vue.component('newsletters', {
    props: ['lists', 'user'],
    data: function data() {
        return {};
    },
    template: "<div class=\"row\">\n                    <div class=\"col-md-4\" v-for=\"list,i of lists\" :key=\"i\">\n                        <div class=\"product-top\">\n                            <a href=\"#\" @click.prevent=\"loadNewsletter(i)\">\n                                <img :src=\"list.thumb\" />\n                            </a>\n                            <!--icons on images---->\n                        </div>\n                        <div class=\"product-bottom text-center\">\n                            <!--product name---->\n                            <h3>{{i}}</h3>\n                            <!--product price--->\n                            <h5>{{ '$'+list.price.cost }}{{getFrequency(list.price.freq)}}</h5>\n                            <hr>\n                        </div>\n                    </div>\n                </div>",
    mounted: function mounted() {},
    methods: {
        loadNewsletter: function loadNewsletter(newsletter) {
            this.$router.push({
                path: '/newsletter',
                query: {
                    list: newsletter,
                    user: this.user
                }
            });
        },
        getFrequency: function getFrequency(frequency) {
            var freq = ' / ';
            if (frequency === 'monthly') freq += 'mo.';
            else if (frequency === 'bi-weekly') freq = frequency;
            else if (frequency === 'daily') freq += 'day';
            else if (frequency === 'weekly') freq += 'week';
            else if (frequency === 'yearly' || freq === 'annual') freq += 'year';
            else freq += frequency;
            return freq;
        }
    }
});
"use strict";

Vue.component('svgIcon', {
    props: ['svg', 'aspect'],
    data: function data() {
        return {
            s: svgs[this.svg]
        };
    },
    template: "<svg  \n                    xmlns=\"http://www.w3.org/2000/svg\" \n                    :viewBox=\"s.viewBox\" \n                    :preserveAspectRatio=\"aspect\" \n                    class=\"svg\"\n                    :class=\"'-'+svg\" \n                    v-html=\"s.content\"\n                ></svg>",
    mounted: function mounted() {},
    methods: {}
});
"use strict";

var about = {
    props: ['lists', 'user'],
    data: function data() {
        return {};
    },
    template: "<main class=\"container\">\n                    <h1>About Us</h1>\n                    <div>\n                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus distinctio consectetur. Sapiente exercitationem dicta, iure velit fugiat sunt quaerat dolore modi error ducimus facere libero ad delectus maiores animi!</p>\n                        <p>Illum debitis blanditiis fuga deleniti cupiditate. Optio illum minima ipsum a labore corrupti odio dolorum quasi vel nesciunt exercitationem quam quis aliquam nemo possimus ipsa, repellendus eveniet. Magni, voluptatibus eligendi!</p>\n                        <p>Delectus est eaque veniam et culpa consequuntur voluptates, odio fuga perspiciatis blanditiis tenetur dolores deserunt ut molestiae cum explicabo officia quo accusamus quisquam dicta beatae! Doloribus ipsum sequi delectus possimus!</p>\n                        <p>Dolores numquam, aut, obcaecati, assumenda temporibus doloribus id deserunt natus corporis ipsa laborum totam pariatur debitis provident reiciendis maiores. At iusto dolore perferendis ullam deleniti aspernatur debitis delectus, velit asperiores.</p>\n                        <p>Id magnam quibusdam cupiditate tempora delectus, voluptatum fugit eius saepe unde error, commodi autem mollitia, reiciendis labore. Vel, natus. Dignissimos ex, soluta vitae accusamus reprehenderit unde veniam blanditiis excepturi modi.</p>\n                        <p>Veritatis iure consectetur aliquam odio aliquid reiciendis atque vitae, corporis id dolorum voluptate sit officia vero et quibusdam inventore tenetur repellat facere molestiae ex ea architecto sed dolorem illum? Maiores.</p>\n                    </div>\n                </main>",
    mounted: function mounted() {},
    methods: {}
};
"use strict";

var dashboard = {
    props: ['lists', 'user'],
    data: function data() {
        return {};
    },
    template: "<main class=\"container\">\n            <h1>{{ user }}'s Dashboard</h1>   \n            <div class=\"row\">\n                <div class=\"col\">\n                    <ul>\n                        <li>List all the newsletters the user is currently subscribed to.</li>\n                        <li>Include methods to unsubscribe.</li>\n                        <li>Payment history?</li>\n                        <li>Date subscribed?</li>\n                    </ul>\n                </div>\n                <div class=\"col\">\n                    <ul>\n                        <li>Include form for updating user profile, such as change password, email, name, etc.</li>\n                    </ul>\n                </div>\n            </div>\n        </main>",
    mounted: function mounted() {
        this.$parent.getUser();
    },
    methods: {}
};
"use strict";

var homepage = {
    props: ['lists', 'user'],
    data: function data() {
        return {};
    },
    template: "<main><div class=\"container text-center\"><h2>Welcome to The Mail Press, a place where you can indulge in your favorite topics and receive exclusive content directly in your inbox.</h2></div></main>",
    mounted: function mounted() {},
    methods: {}
};
"use strict";

var login = {
    props: ['lists', 'user'],
    data: function data() {
        return {
            email: '',
            password: '',
            error: null,
            from: null
        };
    },
    template: "<main>\n            <div class=\"card border-0\" style=\"max-width: 32em\">\n                <div class=\"card-header\"><h2>Log in</h2>\n                    <div class=\"card bg-warning card bg-warning mt-3 text-dark\" v-if=\"error\">\n                        <h4>Error:</h4>\n                        <p>{{error}}</p>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                        \n                    <form @submit.prevent=\"login\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Email address</label>\n                            <input type=\"email\" v-model=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Password</label>\n                            <input type=\"password\" v-model=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n                        </div>\n                        <!--\n                        <div class=\"form-check\">\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"remember\" checked>\n                            <label class=\"form-check-label\" for=\"remember\">Remember me?</label>\n                        </div>\n                        -->\n                        <button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button>\n                    </form>                \n                </div>\n                <div class=\"card-footer\">\n                    <small>\n                    <a href=\"#\">\n                        Forgot your password?\n                    </a>\n                    </small>\n                </div>\n            </div>                  \n        </main>",
    mounted: function mounted() {},
    methods: {
        login: function login() {
            var _this = this;

            var info = {
                email: this.email,
                pass: this.password
            };
            firebase.auth().signInWithEmailAndPassword(info.email, info.pass).then(function() {
                _this.$router.push(_this.from ? _this.from : '/');
            }).catch(function(error) {
                _this.error = error.message;
            });
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next(function(vm) {
            vm.from = from;
        });
    }
};
"use strict";

var newsletter = {
    props: ['lists', 'user'],
    data: function data() {
        return {
            list: null,
            error: null,
            move: 0,
            ease: '400ms',
            delay: 2000,
            committed: false
        };
    },
    template: "<main>\n                    <div v-if=\"list\">\n                        <section class=\"single-product\">\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <img class=\"border d-block\" v-if=\"list.images.length === 1\" :src=\"list.images[0]\" width=\"445\" height=\"500\" />\n                                        <div v-else id=\"product-slider\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                                            <div class=\"carousel-inner\">\n                                                <div class=\"carousel-item\" v-for=\"img,i of list.images\" :class=\"(i === 0 ? 'active' : '')\">\n                                                    <img :src=\"img\" class=\"d-block border\" alt=\"\" width=\"445\" height=\"500\">\n                                                </div>\n                                            </div>\n                                            <a class=\"carousel-control-prev\" href=\"#product-slider\" role=\"button\" data-slide=\"prev\">\n                                                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                                                <span class=\"sr-only\">Previous</span>\n                                            </a>\n                                            <a class=\"carousel-control-next\" href=\"#product-slider\" role=\"button\" data-slide=\"next\">\n                                                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                                                <span class=\"sr-only\">Next</span>\n                                            </a>\n                                        </div>\n                                    </div>   \n                                    <div class=\"col-md-7\">\n\n                                        <!-- new -->\n                                        <!-- <p class=\"new-arrival text-center\">new</p> -->\n\n                                        <!-- list title -->\n                                        <h2>{{list.name}}</h2>\n\n                                        <!--<h6 class=\"mt-2 pb-3 text-muted\">Deployed {{list.frequency.num}} times {{getFrequency(list.frequency.per)}}</h6>-->\n                                        <!--  <p>Product Code: IRSC</p>  --> \n\n                                        <!-- stars -->\n                                        <i class=\"fa fa-star\"></i>\n                                        <i class=\"fa fa-star\"></i>\n                                        <i class=\"fa fa-star\"></i>\n                                        <i class=\"fa fa-star\"></i>\n                                        <i class=\"fa fa-star\"></i>\n\n                                        <!-- price -->\n                                        <p class=\"price\">USD {{ '$'+list.price.cost }}{{getFrequency(list.price.freq)}}</p>\n\n                                        <!-- availability -->\n                                        <p><b>Availability:</b> In Stock</p>\n\n                                        <!--- \n                                        <p><b>Condition:</b> New</p>\n                                        <p><b>Brand:</b> Company</p>\n                                        <p><b>Availability:</b> In Stock</p>\n                                        <label>Quantity: </label>\n                                        <input type=\"text\" value=\"1\"> \n                                        -->\n\n                                        <!-- subscribe -->\n                                        <button v-if=\"user\" type=\"button\" @click=\"handleStripe()\" class=\"btn btn-primary ml-0\" id=\"checkout-button\">Subscribe</button>\n                                        <div v-else class=\"mt-3\">\n                                            <router-link to=\"/login\" class=\"btn btn-primary ml-0\">Login to subscribe &raquo;</router-link>\n                                            <small class=\"d-block mt-1\">\n                                                <router-link to=\"/register\">Need an account?</router-link>\n                                            </small>\n                                        </div>\n                                    </div> \n                                </div>\n                            </div> \n                        </section>\n                        <!--description-->\n                        <section class=\"product-description\">\n                            <div class=\"container\">\n                                <h6>{{list.name}}</h6>\n                                <div v-html=\"list.desc\"></div>\n                                <hr>\n                            </div>                                    \n                        </section>\n                    </div>\n                    <div class=\"container\" v-else>\n                        <div class=\"card bg-warning\" v-if=\"error\">\n                            <div class=\"card-body\">\n                                <p>Hmmm... something went wrong. Please try another page.</p>\n                                <router-link to=\"/\">&laquo; back to homepage</router-link>\n                            </div>\n                        </div>\n                    </div>\n                </main>",
    mounted: function mounted() {
        window.scrollTo(0, 0, 'smooth');
        this.getNewsletter();
    },
    methods: {
        getFrequency: function getFrequency(frequency) {
            var freq = ' / ';
            if (frequency === 'monthly') freq += 'mo.';
            else if (frequency === 'bi-weekly') freq = frequency;
            else if (frequency === 'daily') freq += 'day';
            else if (frequency === 'weekly') freq += 'week';
            else if (frequency === 'yearly' || freq === 'annual') freq += 'year';
            else freq += frequency;
            return freq;
        },
        getNewsletter: function getNewsletter() {
            var _this = this;

            if (this.lists[this.$route.params[0]]) {
                this.list = this.lists[this.$route.params[0]];
            } else {
                var list = null;
                var docRef = db.collection("newsletters").doc(this.$route.params[0]);
                docRef.get().then(function(doc) {
                    if (doc.exists) list = doc.data();
                    else _this.error = true;
                }).then(function() {
                    _this.list = list; // if (this.list.images.length > 1) this.cycleImages(this.list.images.length);
                }).catch(function(error) {
                    _this.error = true;
                });
            }
        },
        // getUser() {
        //     firebase.auth().onAuthStateChanged(user => {
        //         if (user) {
        //             if (user.displayName) this.user = user.displayName;
        //             else this.user = user.email;
        //         }
        //     });
        // },
        handleStripe: function handleStripe() {
            // Create an instance of the Stripe object with your publishable API key
            var stripe = Stripe('pk_test_51HZlTtA5YRGP79ZvTt31kfhAHxkE0WUM50Bmj0RrSLoTZjAW0TOwWM1VVvycsaikA4Xph3TJ3zBRBTvoEuVcfj1T00tAmlOvBA'); // Create a new Checkout Session using the server-side endpoint you
            // created in step 3.

            fetch("/create-checkout-session-".concat(this.list.id), {
                method: 'POST'
            }).then(function(response) {
                if (response.status == '404') console.log('Error:', response.statusText);
                else return response.json();
            }).then(function(session) {
                return stripe.redirectToCheckout({
                    sessionId: session.id
                });
            }).then(function(result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, you should display the localized error message to your
                // customer using `error.message`.
                if (result.error) {
                    alert(result.error.message);
                }
            }).catch(function(error) {
                console.error('Error:', error);
            });
        }
    },
    watch: {
        // if the path changes, update the newsletter content
        $route: function $route(to, from) {
            if (to.path !== from.path) this.getNewsletter();
        }
    }
};
"use strict";

var register = {
    props: ['lists', 'user'],
    data: function data() {
        return {
            name: '',
            email: '',
            pass1: '',
            pass2: '',
            error: '',
            authError: null,
            from: null
        };
    },
    template: "<main>\n            <div class=\"card border-0\" style=\"max-width: 32em\">\n                <div class=\"card-header\">\n                    <h2>Create an account</h2>\n                    <div class=\"card bg-warning card bg-warning mt-3 text-dark\" v-if=\"authError\">\n                        <h4>Error:</h4>\n                        <p>{{authError}}</p>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                        \n                    <form @submit.prevent=\"register\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\" v-model=\"name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"email\">Email address</label>\n                            <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" v-model=\"email\" placeholder=\"Enter email\">\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"pass1\">Password</label>\n                            <input type=\"text\" class=\"form-control\" id=\"pass1\" placeholder=\"Password\" v-model=\"pass1\">\n                            <small id=\"pass1Help\" class=\"form-text text-muted\">Password should be at least 6 characters.</small>\n                        </div>\n                        <div class=\"form-group\" v-if=\"pass1\">\n                            <label for=\"pass2\">Password (repeat)</label>\n                            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"pass2\" placeholder=\"Please re-enter your password\" v-model=\"pass2\">\n                            <small class=\"form-text text-danger\" v-if=\"error\">{{error}}</small>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary mt-4\">Register account &raquo;</button>\n                    </form>                \n                </div>\n            </div>                  \n        </main>",
    mounted: function mounted() {},
    methods: {
        register: function register() {
            var _this = this;

            var info = {
                email: this.email,
                pass: this.pass1,
                name: this.name
            };

            if (!this.error) {
                firebase.auth().createUserWithEmailAndPassword(info.email, info.pass).then(function(result) {
                    return result.user.updateProfile({
                        displayName: info.name
                    }).then(function() {
                        _this.$router.push(_this.from ? _this.from : '/dashboard');
                    });
                }).catch(function(error) {
                    _this.authError = error.message;
                });
            }
        },
        doneTyping: function doneTyping() {
            var _this2 = this;

            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }

            this.timer = setTimeout(function() {
                if (_this2.pass1 !== _this2.pass2) _this2.error = 'passwords must match';
            }, 350);
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next(function(vm) {
            vm.from = from;
        });
    },
    watch: {
        pass2: function pass2() {
            if (this.pass1 !== '' && this.pass2 !== '' && this.pass1 !== this.pass2) this.doneTyping();
            else this.error = null;
        }
    }
};
"use strict";

var subscribe = {
    props: ['lists', 'user'],
    data: function data() {
        return {
            name: '',
            email: '',
            pass1: '',
            pass2: '',
            error: '',
            authError: null,
            from: null
        };
    },
    template: "<main>\n            <div class=\"card border-0\" style=\"max-width: 32em\">\n                <div class=\"card-header\">\n                    <h2>Create an account</h2>\n                    <div class=\"card bg-warning card bg-warning mt-3 text-dark\" v-if=\"authError\">\n                        <h4>Error:</h4>\n                        <p>{{authError}}</p>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                        \n                    <form @submit.prevent=\"register\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter your name\" v-model=\"name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"email\">Email address</label>\n                            <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" v-model=\"email\" placeholder=\"Enter email\">\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"pass1\">Password</label>\n                            <input type=\"text\" class=\"form-control\" id=\"pass1\" placeholder=\"Password\" v-model=\"pass1\">\n                            <small id=\"pass1Help\" class=\"form-text text-muted\">Password should be at least 6 characters.</small>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"pass2\">Password (repeat)</label>\n                            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"pass2\" placeholder=\"Please re-enter your password\" v-model=\"pass2\">\n                            <small class=\"form-text text-danger\" v-if=\"error\">{{error}}</small>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary mt-4\">Register account &raquo;</button>\n                    </form>                \n                </div>\n            </div>                  \n        </main>",
    mounted: function mounted() {},
    methods: {
        register: function register() {
            var _this = this;

            var info = {
                email: this.email,
                pass: this.pass1,
                name: this.name
            };

            if (!this.error) {
                firebase.auth().createUserWithEmailAndPassword(info.email, info.pass).then(function(result) {
                    return result.user.updateProfile({
                        displayName: info.name
                    }).then(function() {
                        _this.$router.push(_this.from ? _this.from : '/dashboard');
                    });
                }).catch(function(error) {
                    _this.authError = error.message;
                });
            }
        },
        doneTyping: function doneTyping() {
            var _this2 = this;

            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }

            this.timer = setTimeout(function() {
                if (_this2.pass1 !== _this2.pass2) _this2.error = 'passwords must match';
            }, 350);
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next(function(vm) {
            vm.from = from;
        });
    },
    watch: {
        pass2: function pass2() {
            if (this.pass1 !== '' && this.pass2 !== '' && this.pass1 !== this.pass2) this.doneTyping();
            else this.error = null;
        }
    }
};
"use strict";

Vue.use(VueRouter);
var routes = [{
    path: '/',
    component: homepage
}, {
    path: '/register',
    component: register
}, {
    path: '/login',
    component: login
}, {
    path: '/dashboard',
    component: dashboard
}, {
    path: '/newsletter/*',
    component: newsletter
}, {
    path: '/subscribe',
    component: subscribe
}, {
    path: '/about',
    component: about
}];
var router = new VueRouter({
    // base: '/',
    routes: routes
});
"use strict";

// store the firebase information
var db = firebase.firestore(); // initialize the Vue app

var app = new Vue({
    // define the element that this vue instance will be targeting. in this case, EVERYTHING
    el: '#app',
    // tie the router definitions to Vue
    router: router,
    // data that Vue will be using, populating later
    data: {
        svgs: svgs,
        user: null,
        lists: {},
        loaded: {
            user: false,
            lists: false
        },
        currentlist: null
    },
    // 'mounted' is effectively 'on load'
    mounted: function mounted() {
        // call functions (must be prepended with 'this')
        this.getUser();
        this.getNewsletters();
    },
    // 'methods' are effectively functions
    methods: {
        // get user details (if any exist) from firebase.
        getUser: function getUser() {
            var _this = this;

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    if (user.displayName) _this.user = user.displayName;
                    else _this.user = user.email;
                } // handles hiding / unhiding to avoid flash of content


                _this.loaded.user = true;
            });
        },
        // get all newsletters from firebase
        getNewsletters: function getNewsletters() {
            var _this2 = this;

            // temporary object to store our data.
            var lists = {}; // iterate through the firebase 'newsletters' data table

            db.collection("newsletters").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // add the data to the temporary 'lists'
                    // not sure why this doesn't work to simply add to this.lists,
                    // but it doesn't. hence the use of the temporary object instead.
                    lists[doc.id] = doc.data();
                });
            }).then(function() {
                // once that's done, add to the Vue dataset 'lists' (again, using 'this') 
                _this2.lists = lists; // handles hiding / unhiding to avoid flash of content

                _this2.loaded.lists = true;
            });
        },
        // 
        // loadNewsletter(newsletter) {
        //     this.$router.push({
        //         path: '/newsletter',
        //         query: {
        //             list: newsletter,
        //             user: this.user
        //         }
        //     });
        // },
        // parses the newsletter data to get frequency 
        getFrequency: function getFrequency(frequency) {
            var freq = ' / ';
            if (frequency === 'monthly') freq += 'mo.';
            else if (frequency === 'bi-weekly') freq = frequency;
            else if (frequency === 'daily') freq += 'day';
            else if (frequency === 'weekly') freq += 'week';
            else if (frequency === 'yearly' || freq === 'annual') freq += 'year';
            else freq += frequency;
            return freq;
        },
        // this handles the logout functionality
        logout: function logout() {
            var _this3 = this;

            firebase.auth().signOut().then(function() {
                _this3.user = null;

                _this3.$router.push('/');
            }).catch(function(error) {
                console.log(error.message);
            });
        }
    }
});