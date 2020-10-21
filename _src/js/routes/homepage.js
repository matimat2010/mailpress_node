const homepage = {
    props: ['lists', 'user'],
    data() {
        return {

        };
    },
    template: `<main>
                    <div class="container text-center">
                        <h2>Discover topics below and click on anyone to subscribe</h2>
                    </div>
                    <section class="featured-categories">
                            <div class="container">
                                <div class="title-box">
                                    <h2>Newsletters</h2>
                                </div>
                                <newsletters :lists="lists" :user="user"></newsletters>
                            </div>                      
                    </section>
                </main>`,
    mounted() {},
    methods: {

    },

};