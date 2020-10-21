Vue.component('newsletters', {
    props: ['lists', 'user'],
    data() {
        return {

        };
    },
    template: `<div class="row">
                    <div class="col-md-4" v-for="list,i of lists" :key="i">
                        <div class="product-top">
                            <a href="#" @click.prevent="loadNewsletter(i)">
                                <img :src="list.thumb" />
                            </a>
                            <!--icons on images---->
                        </div>
                        <div class="product-bottom text-center">
                            <!--product name---->
                            <h3>{{i}}</h3>
                            <!--product price--->
                            <h5>{{ '$'+list.price.cost }}{{getFrequency(list.price.freq)}}</h5>
                            <hr>
                        </div>
                    </div>
                </div>`,
    mounted() {},
    methods: {
        loadNewsletter(newsletter) {
            this.$router.push({
                path: '/newsletter',
                query: {
                    list: newsletter,
                    user: this.user
                }
            });
        },
        getFrequency(frequency) {
            let freq = ' / ';
            if (frequency === 'monthly') freq += 'mo.';
            else if (frequency === 'bi-weekly') freq = frequency;
            else if (frequency === 'daily') freq += 'day';
            else if (frequency === 'weekly') freq += 'week';
            else if (frequency === 'yearly' || freq === 'annual') freq += 'year';
            else freq += frequency;
            return freq;
        }

    },

});