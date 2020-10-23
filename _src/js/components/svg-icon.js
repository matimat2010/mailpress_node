Vue.component('svgIcon', {
    props: ['svg', 'aspect'],
    data() {
        return {
            s: svgs[this.svg]

        };
    },
    template: `<svg  
                    xmlns="http://www.w3.org/2000/svg" 
                    :viewBox="s.viewBox" 
                    :preserveAspectRatio="aspect" 
                    class="svg"
                    :class="'-'+svg" 
                    v-html="s.content"
                ></svg>`,
    mounted() {

    },
    methods: {

    },

});