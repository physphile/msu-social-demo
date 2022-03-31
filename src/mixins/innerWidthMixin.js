export default {
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize)
        })
    },

    methods: {
        onResize() {
            this.width = window.innerWidth
        },
    },

    data() {
        return {
            width: window.innerWidth,
        }
    }
}