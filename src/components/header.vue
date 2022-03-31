<template>
  <div class="wrapper">
    <img
        src="../assets/icons/logo.png"
        alt=""
        class="logo"
        style="margin-right: 65px; pointer-events: none"
        @click="$router.push('/')"
    >
    <irdom-text-btn class="mr-40" @click="$router.push('/')">Главная</irdom-text-btn>
    <irdom-text-btn class="mr-40">Пансионаты</irdom-text-btn>
    <irdom-text-btn class="mr-40">Горячие путевки</irdom-text-btn>
    <irdom-text-btn style="margin-right: auto;">О проекте</irdom-text-btn>

    <div v-show="!this.$store.state.isAuth">
      <irdom-text-btn
          class="mr-40" @click="show=true">Войти
      </irdom-text-btn>
      <irdom-color-btn dark @click="$router.push('/registration')">Зарегистрироваться</irdom-color-btn>
    </div>
    <logout v-show="this.$store.state.isAuth"/>
    <login-popup :show="show" @close="show=false"/>
  </div>
</template>
<script>

import Logout from "@/components/profile-components/logout";
import LoginPopup from "@/components/profile-components/login-popup";

export default {
  components: {LoginPopup, Logout},
  mounted() {
    this.isAuth = !(localStorage.getItem('token') === '')
  },
  name: "irdom-header",
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.mr-40 {
  margin-right: 40px;
}

.wrapper {
  width: 100%;
  padding: 54px 0 0 0;
}

</style>