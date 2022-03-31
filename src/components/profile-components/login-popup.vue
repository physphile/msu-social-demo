<template>
  <irdom-popup :show='show' @close="close">
    <h2>Вход в кабинет</h2>
    <form @submit.prevent @submit="loginUser(email, password)">
      <irdom-input
          placeholder="Электронная почта"
          type="email"
          style="margin-bottom: 20px; width: 300px"
          v-model="email"
      />
      <irdom-input
          placeholder="Пароль"
          type="password"
          style="margin-bottom: 20px; width: 300px"
          v-model="password"
      />
      <irdom-color-btn
          type="submit"
          :disabled="(email === '') || (password === '')"
          style="margin-bottom: 30px; width: 300px"
      >
        Войти
      </irdom-color-btn>
    </form>
    <irdom-text-btn class="forgot">Не помню пароль</irdom-text-btn>
    <div class="line"></div>
    <span style="color: #858585">Нет аккаунта?</span>
    <irdom-text-btn class="forgot">Зарегестрироваться</irdom-text-btn>
  </irdom-popup>
</template>

<script>
import loginMixin from "@/mixins/loginMixin";
import userGetMixin from "@/mixins/userGetMixin";
import rolesGetMixin from "@/mixins/rolesGetMixin";

export default {
  name: "login-popup",
  mixins: [loginMixin, userGetMixin, rolesGetMixin],
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
h2 {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 117.52%;
  /* or 28px */
  text-align: center;
  color: #000000;
  margin: 60px 0 40px 0;
}

.forgot {
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  color: #3D62BB;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  width: 310px;
  border: 1px solid #E3E3E3;
  height: 0;
  margin-bottom: 30px;
}
</style>