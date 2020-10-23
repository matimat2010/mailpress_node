const dashboard = {
    props: ['lists', 'user'],
    data() {
        return {

        };
    },
    template: `<main class="container">
            <h1>{{ user }}'s Dashboard</h1>   
            <div class="row">
                <div class="col">
                    <ul>
                        <li>List all the newsletters the user is currently subscribed to.</li>
                        <li>Include methods to unsubscribe.</li>
                        <li>Payment history?</li>
                        <li>Date subscribed?</li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li>Include form for updating user profile, such as change password, email, name, etc.</li>
                    </ul>
                </div>
            </div>
        </main>`,
    mounted() {
        this.$parent.getUser();
    },
    methods: {


    },

};