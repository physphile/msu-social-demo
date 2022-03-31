<template>
  <div v-show="width >= 1260" class="container">
    <irdom-header/>
    <router-view></router-view>
        <toast-list></toast-list>
  </div>
  <h1 v-show="width < 1260">Сайт еще не адаптирован под мобильные устройства</h1>
</template>
<script>
import IrdomHeader from "@/components/header";
import innerWidthMixin from '@/mixins/innerWidthMixin'
import ToastList from "@/components/toast-list";

export default {
  created() {
    window.addEventListener('beforeunload', e => {
      // e.preventDefault()
      // localStorage.setItem('order', JSON.stringify(this.$store.state.order))
    })
  },


  mounted() {
    const user = localStorage.getItem('user');
    this.$store.state.isAuth = !(localStorage.getItem('token') === '')
    if (user) {
      this.$store.state.user = JSON.parse(user)
    }

    // if (localStorage.getItem('order')) {
    //   this.$store.commit('setOrder', JSON.parse(localStorage.getItem('order')))
    // }
  },

  data() {
    return {
      show: false
    }
  },
  components: {ToastList, IrdomHeader},
  mixins: [innerWidthMixin]
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 500;
}

button:hover {
  cursor: pointer;
}

span:hover {
  cursor: default;
}

.wrapper {
  display: flex;
  align-items: center;
}

h1, h1 span {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 117.52%;
  /* or 63px */
  color: #000000;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.body-back {
  background: #F9F9F9;
  border-radius: 50px 50px 0 0;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: -1;
  top: 282px;
  height: calc(100% - 282px);
}
</style>
