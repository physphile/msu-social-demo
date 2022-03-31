export default {
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize)
        })
    },

    methods: {
        onResize() {
            this.height = window.innerHeight
        },
    },

    data() {
        return {
            height: window.innerHeight,
        }
    }
}