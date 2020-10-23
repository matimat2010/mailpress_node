"use strict";

/**
 *
 * Gulp / svgmin use this template to create the svgs.js file that allows
 * our javascript to embed the svgs
 *
 **/
var svgs = {
  "logo": {
    'viewBox': "0 0 595.616 147.471",
    content: "<path d=\"M232.586 38.143c-1.043-.14-1.557.662-1.732 1.55-.199.999-.741 1.898-1.469 2.602-1.672 1.616-4.454 2.422-6.653 1.477 2.17-2.825 4.267-5.947 5.64-9.249 1.215-2.919 2.262-8.874-2.303-9.436-4.109-.506-7.612 3.598-8.924 7.041-1.475 3.87-1.242 8.683 1.407 12.006-1.208 1.361-8.213 8.125-9.101 3.139-.41-2.297.212-4.826.592-7.087.413-2.458.937-5.018.686-7.521-.194-1.94-1.281-4.488-3.605-4.438-.656.014-1.293.246-1.842.594-2.859 1.813-4.737 5.473-6.33 8.311.421-3.451.938-6.493 1.592-9.373 3.729-1.594 6.738-4.812 9.158-7.974 2.557-3.34 4.787-7.133 6.004-11.181.946-3.15 1.26-7.96-3.067-8.547-2.769-.376-5.106 1.167-6.779 3.236-1.967 2.431-3.234 5.408-4.28 8.327-1.613 4.506-2.703 9.196-3.621 13.887-2.979 1.015-5.894 1.433-8.33 1.206 1.523-3.93 3.122-7.838 4.458-11.838.445-1.335.87-2.686 1.155-4.066.217-1.052.625-2.694-.541-3.336a1.513 1.513 0 00-2.036.591c-.267.484-.174 1.107-.259 1.643-.239 1.51-.743 2.987-1.231 4.431-1.356 4.011-2.967 7.933-4.493 11.881-1.524-.641-2.736-1.796-3.306-3.365-.274-.758-.245-1.687-1.029-2.134a1.514 1.514 0 00-2.044.56c-.723 1.265.551 3.536 1.273 4.58.996 1.437 2.43 2.503 4.04 3.164a76.458 76.458 0 00-2.153 6.839c-.695 2.635-1.317 5.515-.813 8.24.499 2.697 2.413 4.541 5.253 3.856 2.801-.676 5.291-2.675 7.426-4.52-.079.948-.41 2.165.516 2.813.75.525 1.822.24 2.215-.586 1.86-3.956 3.84-7.982 6.428-11.524.66-.902 1.532-2.247 2.633-2.69.828.786.695 2.398.637 3.42-.096 1.685-.391 3.354-.67 5.016-.468 2.786-1.146 5.861-.479 8.668.672 2.819 3.297 4.081 6.064 3.505 3.278-.682 5.975-3.324 8.112-5.736 3.065 1.796 7.072 1.13 9.831-.943 1.201-.902 2.182-2.101 2.756-3.494.466-1.138 1.038-3.297-.786-3.545-.82-.11.821.111 0 0zM211.438 3.021c4.355-.379.212 7.865-.633 9.427-2.306 4.267-5.434 8.627-9.46 11.428 3.874-18.293 8.304-20.698 10.093-20.855.134-.012-1.789.157 0 0zm-24.943 41.896c-.973-.111-1.026-2.227-1.029-2.918-.008-1.51.28-3.018.625-4.481.634-2.686 1.478-5.339 2.438-7.925 2.92.437 5.875.061 8.706-.721-.613 3.005-1.096 6.215-1.487 9.873-3.137 3.197-7.457 6.389-9.253 6.172-.196-.022 1.796.217 0 0zm36.464-15.828c.665-.496 1.477-.926 2.313-1.021.84-.096 1.07.404 1.161 1.169.187 1.551-.377 3.14-1.001 4.534-1.266 2.827-3.052 5.511-4.92 7.97-2.497-3.917-1.239-9.908 2.447-12.652.845-.629-2.178 1.621 0 0z\"/><path d=\"M255.928 45.099c12.773 1.474 15.265-20.119 2.492-21.594-12.774-1.472-15.266 20.117-2.492 21.594 5.404.624-5.406-.625 0 0zm48.908 68.302l-4.227-6.038c-4.26 6.121-21.092 18.749-21.424 3.365-.143-6.571 2.837-13.655 4.568-19.874 5.642-20.273 11.398-40.515 17.203-60.741.554-1.927 1.096-3.857 1.671-5.778 2.202-7.347-9.739-4.072-12.883-1.395-5.289 4.504-6.796 19.022-8.646 25.268-3.528 11.922-7.046 23.85-10.406 35.82-2.469 8.789-6.352 18.571-6.506 27.813-3.766 3.351-14.104 10.72-17.838 3.422-1.946-3.803-.745-8.437.231-12.343 2.621-10.485 5.5-20.911 8.376-31.328.48-1.739 3.363-8.641 1.044-9.688-2.64-1.192-7.662 1.012-10.488 1.229-3.474.267-4.213 4.856-4.958 7.473-3.688 12.965-9.301 26.638-10.14 40.187-3.249 3.547-9.961 10.066-15.624 7.476-7.084-3.241.521-20.992 1.959-26.044 2.435-8.563 5.613-17.113 7.479-25.82 1.358-6.344-6.874-3.485-10.807-2.171-3.48 1.163-4.102 7.242-4.868 10.24-3.679-14.6-19.191-15.99-29.894-7.957-13.24 9.938-19.44 30.617-16.068 46.489-4.844 3.967-15.998 9.319-17.331-.675-.479-3.592.496-7.021 1.415-10.439 2.937-10.934 6.044-21.821 9.123-32.715a11096.46 11096.46 0 019.924-34.906c.896-3.13 1.786-6.261 2.699-9.385 2.3-7.865-9.34-5.091-12.924-1.764-3.68 2.574-6.632 9.464-9.208 13.339-4.513 6.788-9.092 13.532-13.673 20.273a8425.653 8425.653 0 01-20.252 29.664c-.663-10.176-1.093-20.442-.637-30.636.335-7.477 1.393-14.932 1.992-22.394.369-4.599 3.19-12.645-3.164-13.538-.102-.006-.203.005-.305.001l.041-.021c-8.227.02-16.452.033-24.678.021-9.344-.013-23.367-2.537-28.509 7.509-3.647 5.833 1.198 11.146 7.333 11.597 1.158-5.4 5.048-10.284 10.904-10.547 4.922-.021 20.354-.402 20.135-.424-8.04 18.278-17.151 36.541-26.498 54.184-11.773 22.224-24.113 49.271-52.15 52.095l-.002.002c-9.873.413-12.008-4.166-12.008-4.166-3.447 2.814-6.41 7.568-3.852 11.969 3.991 6.863 16.194 5.639 22.695 4.645 15.825-2.416 26.307-14.454 34.923-26.991 7.712-11.22 13.355-23.382 19.231-35.603 5.451-11.339 11.667-22.279 16.91-33.731a6665.367 6665.367 0 00-1.927 32.811c-.282 5.033-5.309 35.654 3.728 34.969 5.895-.451 8.82-7.125 11.815-11.559 4.124-6.109 8.25-12.217 12.376-18.324 8.582-12.705 17.15-25.418 25.761-38.104-5.466 18.481-11.55 37.02-15.568 55.886-1.784 8.373-.044 18.625 8.194 23.055 8.617 4.635 20.35-2.041 26.875-7.611 8.908 13.929 24.855 9.688 33.162-2.176 2.671 17.654 25.66 11.747 32.492.301 5.999 16.759 24.303 10.653 34.586 1.867 8.565 18.051 32.254 5.085 38.618-8.084 0 0-4.377 9.057 0 0zM201.023 97.06c-1.992 7.475-6.031 19.489-14.798 21.622-7.858 1.912-9.947-10.246-9.729-15.43.387-9.204 3.815-25.16 13.747-29.051 13.284-5.204 12.691 15.692 10.78 22.859-4.939 18.53 3.42-12.829 0 0zm381.66-30.769c-1.692-3.032-3.825-9.223-8.338-8.593-5.351.75-7.515 5.344-9.446 9.593-6.008 13.218-14.168 25.612-21.574 38.069.23-10.13-3.532-20.137-7.906-29.111-2.354-4.83-5.641-13.988-10.352-17.014-6.249-4.014-10.924 6.07-12.856 10.091-4.914 10.225-10.968 19.94-16.748 29.692-10.822 14.271-42.042 27.09-41.794-.838 8.849.91 18.65-.861 26.361-5.369 10.346-6.049 15.631-22.024 5.143-30.8-10.523-8.806-26.207-2.687-34.208 6.438-9.448 10.776-14.919 28.539-10.149 42.438-5.042 4.147-17.008 8.87-16.895-2.145.104-10.016 3.967-20.473 6.782-29.982 2.089-7.056 3.206-14.249-5.423-16.448-7.449-1.898-17.004-7.891-24.65-7.613-8.057.292-6.924 9.964-8.116 15.477-1.628 7.536-4.63 14.808-8.286 21.574-6.201 11.475-16.605 26.345-30.82 27.858-3.451.179-8.809-.624-9.919-4.59-5.253 2.807-4.136 10.363.463 13.06 5.941 3.483 13.964 2.188 19.922-.471 23.903-9.185 33.282-36.539 38.271-59.221 2.03.697 14.655 3.808 14.859 5.929.338 3.512-2.115 8.471-3.063 11.816-1.477 5.214-2.642 10.533-3.69 15.85-1.74 8.813-.873 19.566 7.798 24.576 8.667 5.008 20.905-1.438 27.163-7.626 11.455 14.19 32.001 8.808 44.287-1.178 13.441-10.923 21.412-26.19 29.866-40.927 5.364 9.748 13.028 24.575 7.732 35.877-3.327 7.102-18.295 10.727-21.429 1.545-3.769 2.139-5.004 7.426-3.072 11.209 3.043 5.959 11.43 6.076 17.138 5.549 28.453-1.604 39.405-33.482 51.752-55.005 5.364 9.748 13.028 24.574 7.732 35.877-3.327 7.101-18.294 10.728-21.427 1.545-7.963 4.517-2.998 14.379 4.063 16.153 9.219 2.316 20.949-.256 27.277-7.603 13.963-16.21 2.335-39.976-6.448-55.682-.55-.985 3.901 6.976 0 0zM471.621 69.44c6.662-.106 7.08 6.603 4.566 11.14-4.181 7.546-13.546 9.75-21.565 9.104 2.149-7.844 8.024-20.102 16.999-20.244 4.526-.072-8.975.142 0 0zm-110.069 30.842c28.391-15.564 31.554-65.577-.534-78.682 1.786.729 3.572 1.46 5.359 2.188-2.207-.898-4.41-1.802-6.616-2.701l1.216.497c-14.478-5.897-32.674-4.599-44.792 5.858-13.091 11.295-13.901 31.101-.271 42.351l3.104-11.531c.821-3.053-1.161-5.968-.698-9.118.871-5.923 5.978-11.121 11.188-13.651 9.823-4.77 23.118-2.832 31.016 4.768 19.896 19.146.883 61.194-27.279 55.177 4.997-17.625 10.856-38.736 13.475-48.358.347-4.568-8.973-1.14-11.422-.952-3.687.284-4.404 5.504-5.215 8.328a3735 3735 0 01-6.67 22.946c-6.233 21.193-9.811 52.04-33.977 60.706 3.523 15.995 20.728 6.598 27.195-1.249 4.786-6.217 8.617-13.795 11.118-22.42l.03.017c.895-3.044 1.951-6.7 3.103-10.721 10.05 2.84 21.626 1.506 30.67-3.453 24.304-13.324-9.044 4.959 0 0z\"/>"
  }
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
      if (frequency === 'monthly') freq += 'mo.';else if (frequency === 'bi-weekly') freq = frequency;else if (frequency === 'daily') freq += 'day';else if (frequency === 'weekly') freq += 'week';else if (frequency === 'yearly' || freq === 'annual') freq += 'year';else freq += frequency;
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
  template: "<svg  \n                    xmlns=\"http://www.w3.org/2000/svg\" \n                    :viewBox=\"s.viewBox\" \n                    :preserveAspectRatio=\"aspect\" \n                    class=\"icon\"\n                    :class=\"'-'+svg\" \n                    v-html=\"s.content\"\n                ></svg>",
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
  template: "<main>\n                    <div class=\"container text-center\">\n                        <h2>Welcome to The Mail Press, a place where you can indulge in your favorite topics and receive exclusive content directly in your inbox.</h2>\n                    </div>\n                </main>",
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
  template: "<main>\n            <div class=\"card border-0\" style=\"max-width: 32em\">\n                <div class=\"card-header\">\n                    <h2>Log in</h2>\n                    <div class=\"card bg-warning card bg-warning mt-3 text-dark\" v-if=\"error\">\n                        <h4>Error:</h4>\n                        <p>{{error}}</p>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                        \n                    <form @submit.prevent=\"login\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Email address</label>\n                            <input type=\"email\" v-model=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleInputPassword1\">Password</label>\n                            <input type=\"password\" v-model=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n                        </div>\n                        <!--\n                        <div class=\"form-check\">\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"remember\" checked>\n                            <label class=\"form-check-label\" for=\"remember\">Remember me?</label>\n                        </div>\n                        -->\n                        <button type=\"submit\" class=\"btn btn-primary mt-4\">Submit</button>\n                    </form>                \n                </div>\n                <div class=\"card-footer\">\n                    <small>\n                    <a href=\"#\">\n                        Forgot your password?\n                    </a>\n                    </small>\n                </div>\n            </div>                  \n        </main>",
  mounted: function mounted() {},
  methods: {
    login: function login() {
      var _this = this;

      var info = {
        email: this.email,
        pass: this.password
      };
      firebase.auth().signInWithEmailAndPassword(info.email, info.pass).then(function () {
        _this.$router.push(_this.from ? _this.from : '/');
      }).catch(function (error) {
        _this.error = error.message;
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
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
      if (frequency === 'monthly') freq += 'mo.';else if (frequency === 'bi-weekly') freq = frequency;else if (frequency === 'daily') freq += 'day';else if (frequency === 'weekly') freq += 'week';else if (frequency === 'yearly' || freq === 'annual') freq += 'year';else freq += frequency;
      return freq;
    },
    getNewsletter: function getNewsletter() {
      var _this = this;

      if (this.lists[this.$route.params[0]]) {
        this.list = this.lists[this.$route.params[0]];
      } else {
        var list = null;
        var docRef = db.collection("newsletters").doc(this.$route.params[0]);
        docRef.get().then(function (doc) {
          if (doc.exists) list = doc.data();else _this.error = true;
        }).then(function () {
          _this.list = list; // if (this.list.images.length > 1) this.cycleImages(this.list.images.length);
        }).catch(function (error) {
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
      }).then(function (response) {
        if (response.status == '404') console.log('Error:', response.statusText);else return response.json();
      }).then(function (session) {
        return stripe.redirectToCheckout({
          sessionId: session.id
        });
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      }).catch(function (error) {
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
        firebase.auth().createUserWithEmailAndPassword(info.email, info.pass).then(function (result) {
          return result.user.updateProfile({
            displayName: info.name
          }).then(function () {
            _this.$router.push(_this.from ? _this.from : '/dashboard');
          });
        }).catch(function (error) {
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

      this.timer = setTimeout(function () {
        if (_this2.pass1 !== _this2.pass2) _this2.error = 'passwords must match';
      }, 350);
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.from = from;
    });
  },
  watch: {
    pass2: function pass2() {
      if (this.pass1 !== '' && this.pass2 !== '' && this.pass1 !== this.pass2) this.doneTyping();else this.error = null;
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
        firebase.auth().createUserWithEmailAndPassword(info.email, info.pass).then(function (result) {
          return result.user.updateProfile({
            displayName: info.name
          }).then(function () {
            _this.$router.push(_this.from ? _this.from : '/dashboard');
          });
        }).catch(function (error) {
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

      this.timer = setTimeout(function () {
        if (_this2.pass1 !== _this2.pass2) _this2.error = 'passwords must match';
      }, 350);
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.from = from;
    });
  },
  watch: {
    pass2: function pass2() {
      if (this.pass1 !== '' && this.pass2 !== '' && this.pass1 !== this.pass2) this.doneTyping();else this.error = null;
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

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          if (user.displayName) _this.user = user.displayName;else _this.user = user.email;
        } // handles hiding / unhiding to avoid flash of content


        _this.loaded.user = true;
      });
    },
    // get all newsletters from firebase
    getNewsletters: function getNewsletters() {
      var _this2 = this;

      // temporary object to store our data.
      var lists = {}; // iterate through the firebase 'newsletters' data table

      db.collection("newsletters").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // add the data to the temporary 'lists'
          // not sure why this doesn't work to simply add to this.lists,
          // but it doesn't. hence the use of the temporary object instead.
          lists[doc.id] = doc.data();
        });
      }).then(function () {
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
      if (frequency === 'monthly') freq += 'mo.';else if (frequency === 'bi-weekly') freq = frequency;else if (frequency === 'daily') freq += 'day';else if (frequency === 'weekly') freq += 'week';else if (frequency === 'yearly' || freq === 'annual') freq += 'year';else freq += frequency;
      return freq;
    },
    // this handles the logout functionality
    logout: function logout() {
      var _this3 = this;

      firebase.auth().signOut().then(function () {
        _this3.user = null;

        _this3.$router.push('/');
      }).catch(function (error) {
        console.log(error.message);
      });
    }
  }
});