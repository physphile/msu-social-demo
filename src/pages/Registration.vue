<template>
  <div class="wrap">
    <h1 style="margin-right: 40px;">Регистрация</h1>
    <div class="already-reg">
      <span>Уже зарегестрированы?</span>
      <irdom-text-btn style="color: #3D62BB" @click="show=true">Войти</irdom-text-btn>
    </div>
    <login-popup @close="show=false" :show="show"/>
  </div>

  <div class="body-back"></div>
  <div class="body">
    <img src="../assets/registration_hello_.png" alt="" class="reg-hello">
    <form @submit.prevent @submit="remained() === '.' ? registerUser(user) : {}">
      <!--      <form-input-group-->
      <!--          :label="'Статус в МГУ'"-->
      <!--          :id="'statusMSU'"-->
      <!--          style="margin-bottom: 20px;">-->
      <!--        <status-btn-group-->
      <!--            v-model="user.statusMSU"-->
      <!--            id="statusMSU"/>-->
      <!--      </form-input-group>-->

      <form-input-group label="Имя" :id="'given-name'">
        <irdom-input
            placeholder="Введите имя"
            style="width: 373px"
            v-model="user.first_name"
            id="given-name"
            name="given-name"
            :type="'name'"
            @error="getError"
        />
      </form-input-group>

      <!--      <form-input-group label="Фамилия" :id="'family-name'">-->
      <!--        <irdom-input-->
      <!--            placeholder="Введите фамилию"-->
      <!--            style="width: 373px"-->
      <!--            v-model="user.last_name"-->
      <!--            id="family-name"-->
      <!--            name="family-name"-->
      <!--        />-->
      <!--      </form-input-group>-->

      <!--      <form-input-group label="Отчество" :id="'additional-name'">-->
      <!--        <irdom-input-->
      <!--            placeholder="Введите отчество"-->
      <!--            style="width: 373px"-->
      <!--            v-model="user.middle_name"-->
      <!--            id="additional-name"-->
      <!--            name="additional-name"-->
      <!--            autocomplete="on"-->
      <!--        />-->
      <!--      </form-input-group>-->

      <!--      <form-input-group label="Пол" :id="'sex'">-->
      <!--        <gender-btn-group v-model="user.gender" id="sex" name="sex"/>-->
      <!--      </form-input-group>-->

      <!--      <form-input-group label="Дата рождения" :id="'bday'">-->
      <!--        <irdom-input-->
      <!--            type="date"-->
      <!--            style="width: 200px"-->
      <!--            v-model="user.birthdate"-->
      <!--            id="bday"-->
      <!--            name="bday"-->
      <!--        />-->
      <!--      </form-input-group>-->

      <!--      <form-input-group-->
      <!--          label="Место работы"-->
      <!--          v-show="user.statusMSU === 'STAFF'"-->
      <!--          :id="'work'">-->
      <!--        <irdom-input-->
      <!--            v-model="user.work"-->
      <!--            placeholder="Введите своё место работы"-->
      <!--            style="width: 476px"-->
      <!--            id="work"-->
      <!--        />-->
      <!--      </form-input-group>-->

      <!--      <form-input-group-->
      <!--          label="Кафедра"-->
      <!--          v-show="user.statusMSU === 'STAFF'"-->
      <!--          :id="'cathedra'">-->
      <!--        <irdom-input-->
      <!--            v-model="user.cathedra"-->
      <!--            placeholder="Введите свою кафедру (если есть)"-->
      <!--            style="width: 476px"-->
      <!--            id="cathedra"-->
      <!--        />-->
      <!--      </form-input-group>-->

      <!--      <form-input-group-->
      <!--          label="Должность"-->
      <!--          v-show="user.statusMSU === 'STAFF'"-->
      <!--          :id="user.post">-->
      <!--        <irdom-input-->
      <!--            v-model="user.post"-->
      <!--            placeholder="Введите свою должность"-->
      <!--            style="width: 476px"-->
      <!--            id="post"-->
      <!--        />-->
      <!--      </form-input-group>-->

      <!--      <form-input-group-->
      <!--          label="Факультет"-->
      <!--          v-show="user.statusMSU === 'STUDENT'"-->
      <!--          :id="'faculty'">-->
      <!--        <irdom-select-->
      <!--            :options="FACULTIES"-->
      <!--            style="width: 476px"-->
      <!--            v-model="user.faculty"-->
      <!--            id="faculty"-->
      <!--        >-->
      <!--          Введите свой факультет-->
      <!--        </irdom-select>-->
      <!--      </form-input-group>-->

      <!--      &lt;!&ndash;TODO: набор текста с выпадающим списком подсказок&ndash;&gt;-->
      <!--      <form-input-group-->
      <!--          label="Курс"-->
      <!--          v-show="user.statusMSU === 'STUDENT'"-->
      <!--          :id="'course'">-->
      <!--        <irdom-select-->
      <!--            v-model="user.course"-->
      <!--            style="width: 200px"-->
      <!--            :options='COURSES'-->
      <!--        >-->
      <!--          Введите курс-->
      <!--        </irdom-select>-->
      <!--      </form-input-group>-->

      <!--      <form-input-group label="УИН" :id="'id'">-->
      <!--        <irdom-input-->
      <!--            v-model="user.uin"-->
      <!--            placeholder="Введите УИН"-->
      <!--            style="width: 270px"-->
      <!--            id="uin"-->
      <!--        />-->
      <!--      </form-input-group>-->

      <form-input-group label="Почта" :id="user.email">
        <irdom-input
            v-model="user.email"
            placeholder="Введите свой e-mail"
            style="width: 270px"
            id="email"
            name="email"
            type="email"
        />
      </form-input-group>

      <form-input-group label="Телефон" :id="'tel'">
        <irdom-input
            v-model="user.contact_phone"
            type="phone"
            placeholder="+7"
            style="width: 270px"
            id="tel"
            ref="phone"
            name="tel"
        />
        <!--        TODO: маска для ввода номера телефона-->
      </form-input-group>

      <form-input-group label="Пароль" :id="'password'">
        <irdom-input
            v-model="user.password"
            type="password"
            placeholder="Придумайте пароль"
            style="width: 270px"
            id="password"
            @error="getError"
        />
      </form-input-group>
      <form-input-group style="margin-top: 40px;">
        <irdom-color-btn type="submit" :disabled="remained() !== '.'">Зарегестрироваться</irdom-color-btn>
      </form-input-group>
    </form>
    <form-input-group v-show="remained() !== '.'" style="margin-top: 20px;">
      <p class="remained">{{ "Осталось заполнить: ".repeat(+!isActive()) + remained() }}</p>
    </form-input-group>
  </div>

</template>

<script>
import formInputGroup from "@/components/profile-components/form-input-group";
import StatusBtnGroup from "@/components/profile-components/status-btn-group";
import GenderBtnGroup from "@/components/profile-components/gender-btn-group";
import {COURSES} from "@/data/CONSTANTS"
import {FACULTIES} from "@/data/CONSTANTS"
import LoginPopup from "@/components/profile-components/login-popup";
import registerMixin from "@/mixins/registerMixin";
import userGetMixin from "@/mixins/userGetMixin";
import loginMixin from "@/mixins/loginMixin";
import rolesGetMixin from "@/mixins/rolesGetMixin";
import Vue from "q";

export default {
  name: "Registration",
  components: {LoginPopup, GenderBtnGroup, StatusBtnGroup, formInputGroup},
  mixins: [registerMixin, userGetMixin, loginMixin, rolesGetMixin],
  data() {
    return {
      user: {
        last_name: "",
        first_name: "",
        middle_name: "",
        gender: "",
        birthdate: "",
        contact_phone: "+7 ",
        email: "",
        password: "",
        faculty: "default",
        course: "default",
        uin: "",
        statusMSU: "OTHER",
        work: "",
        cathedra: "",
        post: "",
      },
      FACULTIES,
      COURSES,
      show: false,
      errors: []
    }
  },
  methods: {
    remained() {
      let str = "имя, ".repeat(+(this.user.first_name === "" || this.isErrorType('name'))) +
          // "фамилия, ".repeat(+(this.user.last_name === "")) +
          // "отчество, ".repeat(+(this.user.middle_name === "")) +
          // "пол, ".repeat(+(this.user.gender === "")) +
          // "дата рождения, ".repeat(+(this.user.birthdate === "")) +
          // "факультет, ".repeat(+((this.user.faculty === "default") && (this.user.statusMSU === 'STUDENT'))) +
          // "курс, ".repeat(+((this.user.course === "default") && (this.user.statusMSU === 'STUDENT'))) +
          // "место работы, ".repeat(+((this.user.work === '') && (this.user.statusMSU === 'STAFF'))) +
          // "кафедра, ".repeat(+((this.user.cathedra === '') && (this.user.statusMSU === 'STAFF'))) +
          // "должность, ".repeat(+((this.user.post === '') && (this.user.statusMSU === 'STAFF'))) +
          // "УИН, ".repeat(+(this.user.uin === "")) +
          "почта, ".repeat(+((this.user.email === "") || (this.user.email.indexOf('@') === -1 || this.user.email.indexOf('@') === this.user.email.length - 1))) +
          "телефон, ".repeat(+!(this.user.contact_phone.length === 18)) +
          "пароль, ".repeat(+(this.user.password === "" || this.isErrorType('password')))
      return str.substring(0, str.length - 2) + '.';
    },

    isActive() {
      return this.remained() === ""
    },
    getError(err, type) {
      this.errors = this.errors.filter(e => e.type !== type)
      if (err.length !== 0) {
        this.errors.push({text: err, type: type})
      }
    },
    isErrorType(type) {
      return this.errors.filter(e => e.type === type).length !== 0
    }
  },
}
</script>

<style scoped>
.already-reg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  padding-top: 5px;
}

.wrap {
  margin: 83px 0 0 0;
  display: flex;
  align-items: center;
}

.body {
  border-radius: 50px 50px 0 0;
  padding: 60px 0;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.remained {
  line-height: 140.52%;
  color: black;
  font-size: 16px;
  width: 373px;
  font-weight: 600;
}

form {
  row-gap: 20px;
  display: flex;
  flex-direction: column;
}

.body-back {
  top: 303px;
  height: calc(100% - 303px);
}

.reg-hello {
  position: absolute;
  left: 826px;
  top: -91px;
  pointer-events: none;
  user-select: none; /*запрет на перенос текста*/
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>