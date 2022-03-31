<template>
  <h1>Личный кабинет</h1>
  <div class="body-back"></div>
  <div class="body">
    <div class="side">
      <account-side-menu style="width: 390px; margin: 0 82px 60px 0"/>
      <img src="../assets/profile_hello.png" alt="">
    </div>
    <div class="content">
      <acc-mini/>
      <form @submit.prevent @submit="changeProfile">
        <form-input-group
            :label="'Статус в МГУ'"
            :id="'statusMSU'"
            style="margin-bottom: 20px;">
          <status-btn-group
              v-model="user.statusMSU"
              id="statusMSU"

          />
        </form-input-group>

        <form-input-group label="Имя" :id="'given-name'">
          <irdom-input
              style="width: 373px"
              v-model="user.first_name"
              id="given-name"
              name="given-name"

          />
        </form-input-group>

        <form-input-group label="Фамилия" :id="'family-name'">
          <irdom-input
              style="width: 373px"
              v-model="user.last_name"
              id="family-name"
              name="family-name"

          />
        </form-input-group>

        <form-input-group label="Отчество" :id="'additional-name'">
          <irdom-input

              style="width: 373px"
              v-model="user.middle_name"
              id="additional-name"
              name="additional-name"
              autocomplete="on"

          />
        </form-input-group>

        <form-input-group label="Пол" :id="'sex'">
          <gender-btn-group v-model="user.gender" id="sex" name="sex"/>
        </form-input-group>

        <form-input-group label="Дата рождения" :id="'bday'">
          <irdom-input
              type="date"
              style="width: 200px"
              v-model="user.birthdate"
              id="bday"
              name="bday"

          />
        </form-input-group>

        <form-input-group
            label="Место работы"
            v-show="user.statusMSU === 'STAFF'"
            :id="'work'">
          <irdom-input
              v-model="user.work"

              style="width: 476px"
              id="work"

          />
        </form-input-group>

        <form-input-group
            label="Кафедра"
            v-show="user.statusMSU === 'STAFF'"
            :id="'cathedra'">
          <irdom-input
              v-model="user.cathedra"

              style="width: 476px"
              id="cathedra"

          />
        </form-input-group>

        <form-input-group
            label="Должность"
            v-show="user.statusMSU === 'STAFF'"
            :id="user.post">
          <irdom-input
              v-model="user.post"
              style="width: 476px"
              id="post"

          />
        </form-input-group>

        <form-input-group
            label="Факультет"
            v-show="user.statusMSU === 'STUDENT'"
            :id="'faculty'">
          <irdom-select
              :options="FACULTIES"
              style="width: 476px"
              v-model="user.faculty"
              id="faculty"

          >
            Введите свой факультет
          </irdom-select>
        </form-input-group>

        <!--TODO: набор текста с выпадающим списком подсказок-->
        <form-input-group
            label="Курс"
            v-show="user.statusMSU === 'STUDENT'"
            :id="'course'">
          <irdom-select
              v-model="user.course"
              style="width: 200px"
              :options='COURSES'
          >
            Введите курс
          </irdom-select>
        </form-input-group>

        <form-input-group label="УИН" :id="'id'">
          <irdom-input

              v-model="user.uin"
              style="width: 270px"
              id="uin"
          />
        </form-input-group>

        <form-input-group label="Почта" :id="user.email">
          <irdom-input

              v-model="user.email"
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
              style="width: 270px"
              id="tel"
              name="tel"
          />
        </form-input-group>
        <form-input-group label="Пароль">
          <button class="change-btn" type="submit">Изменить</button>
        </form-input-group>
        <form-input-group>
          <irdom-color-btn style="margin-top: 35px;" :disabled="!changing">Сохранить изменения</irdom-color-btn>
        </form-input-group>
      </form>
    </div>
  </div>
</template>

<script>
import AccountSideMenu from "@/components/profile-components/profile-side-menu";
import AccMini from "@/components/profile-components/acc-mini";
import {API_URL, COURSES, FACULTIES} from "@/data/CONSTANTS";
import statusBtnGroup from '@/components/profile-components/status-btn-group'
import formInputGroup from '@/components/profile-components/form-input-group'
import genderBtnGroup from '@/components/profile-components/gender-btn-group'
import axios from "axios";
import roleAddMixin from "@/mixins/roleAddMixin";
import userEditMixin from "@/mixins/userEditMixin";
import roleEditMixin from "@/mixins/roleEditMixin";

export default {
  name: "Profile",
  components: {AccMini, AccountSideMenu, statusBtnGroup, formInputGroup, genderBtnGroup},
  mixins: [roleAddMixin, userEditMixin, roleEditMixin],
  mounted() {
    // let user = this.user
    // let storeUser = this.$store.state.user
    //при равенстве юзеров, юзер начинает ватчить стор
    const user = this.user
    const storeUser = this.$store.state.user
    storeUser.gender ? user.gender = storeUser.gender : {}
    storeUser.first_name ? user.first_name = storeUser.first_name : {}
    storeUser.last_name ? user.last_name = storeUser.last_name : {}
    storeUser.middle_name ? user.middle_name = storeUser.middle_name : {}
    storeUser.birthdate ? user.birthdate = storeUser.birthdate : {}
    storeUser.email ? user.email = storeUser.email : {}
    storeUser.contact_phone ? user.contact_phone = storeUser.contact_phone : {}
    storeUser.statusMSU ? user.statusMSU = storeUser.statusMSU : {}
    storeUser.faculty ? user.faculty = storeUser.faculty : {}
    storeUser.course ? user.course = storeUser.course : {}
    storeUser.cathedra ? user.cathedra = storeUser.cathedra : {}
    storeUser.work ? user.work = storeUser.work : {}
    storeUser.post ? user.post = storeUser.post : {}
  },
  data() {
    return {
      user: {
        last_name: "",
        first_name: "",
        middle_name: "",
        gender: "",
        birthdate: "",
        contact_phone: "8",
        email: "",
        faculty: "",
        course: '',
        uin: "",
        statusMSU: "",
        work: "",
        cathedra: "",
        post: "",
      },
      FACULTIES,
      COURSES,
      changing: false,
    }
  },
  methods: {
    async changeProfile() {
      if (this.changing) {
        const userEditPromise = await this.user_edit(this.user)

        if (!userEditPromise.success) {
          // alert(userEditPromise.err)
          this.$store.commit('addMessage', {type: 'error', text: userEditPromise.err})
        } else {
          this.$store.commit('addMessage', {type: 'success', text: 'Профиль успешно отредактирован'})
        }


        const roleAddPromise = await this.role_add(this.user)

        if (!roleAddPromise.success) {
          if (roleAddPromise.err === 21) {
            const roleEditPromise = await this.role_edit(this.user)

            if (!roleEditPromise.success) {
              // alert("Ошибка при добавлении роли")
              this.$store.commit('addMessage', {type: 'error', text: 'Ошибка при добавлении роли'})
            } else {
              this.$store.commit('addMessage', {type: 'success', text: 'Статус успешно отредактирован'})
            }
          } else {
            // alert("Ошибка при добавлении роли")
            this.$store.commit('addMessage', {type: 'error', text: 'Ошибка при добавлении роли'})
          }
        } else {
          this.$store.commit('addMessage', {type: 'success', text: 'Статус успешно добавлен'})
        }
      }
    },
    changingUpdate(val) {
      let storeUser = this.$store.getters.user
      this.changing = !((val.first_name === storeUser.first_name) &&
          (val.last_name === storeUser.last_name) &&
          (val.middle_name === storeUser.middle_name) &&
          (val.birthdate === storeUser.birthdate) &&
          (val.statusMSU === storeUser.statusMSU) &&
          (val.gender === storeUser.gender) &&
          (val.email === storeUser.email) &&
          (val.contact_phone === storeUser.contact_phone) &&
          (val.faculty === storeUser.faculty) &&
          (val.uin === storeUser.uin) &&
          (val.work === storeUser.work) &&
          (val.cathedra === storeUser.cathedra) &&
          (val.post === storeUser.post) &&
          (val.course === storeUser.course))
    }
  },

  watch: {
    'user': {
      handler(val) {
        this.changingUpdate(val)
      },
      deep: true
    },
  }
}
</script>

<style scoped>
h1 {
  margin: 62px 0 40px 0;
}

.body {
  border-radius: 50px 50px 0 0;
  padding: 50px 0;
  display: flex;
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 40px;
}

.change-btn {
  background: #3D62BB;
  border-radius: 8px;
  font-size: 16px;
  line-height: 19px;
  color: white;
  padding: 16px 0;
  width: 167px;
}
</style>