// store the firebase information
const db = firebase.firestore();

// initialize the Vue app
const app = new Vue({
    // define the element that this vue instance will be targeting. in this case, EVERYTHING
    el: '#app',
    // tie the router definitions to Vue
    router,
    // data that Vue will be using, populating later
    data: {
        svgs: svgs,
        user: null,
        lists: {},
        loaded: {
            user: false,
            lists: false
        }
    },
    // 'mounted' is effectively 'on load'
    mounted() {
        // call functions (must be prepended with 'this')
        this.getUser();
        this.getNewsletters();
    },
    // 'methods' are effectively functions
    methods: {

        // get user details (if any exist) from firebase.
        getUser() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    if (user.displayName) this.user = user.displayName;
                    else this.user = user.email;
                }

                // handles hiding / unhiding to avoid flash of content
                this.loaded.user = true;
            });
        },

        // get all newsletters from firebase
        getNewsletters() {
            // temporary object to store our data.
            var lists = {};
            // iterate through the firebase 'newsletters' data table
            db.collection("newsletters").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // add the data to the temporary 'lists'
                    // not sure why this doesn't work to simply add to this.lists,
                    // but it doesn't. hence the use of the temporary object instead.
                    lists[doc.id] = doc.data();
                });
            }).then(() => {
                // once that's done, add to the Vue dataset 'lists' (again, using 'this') 
                this.lists = lists;

                // handles hiding / unhiding to avoid flash of content
                this.loaded.lists = true;
            });

        },

        // this handles the logout functionality
        logout() {
            firebase.auth().signOut().then(() => {
                this.user = null;
                this.$router.push('/');
            }).catch(function(error) {
                console.log(error.message);
            });
        },
    }
});