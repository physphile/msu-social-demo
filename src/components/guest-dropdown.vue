<template>
  <irdom-dropdown :height="bodyHeight" :header="guest + ' гость'">
    <form @submit.prevent ref="form">
      <form-input-group
          :label="'Статус в МГУ'"
          :id="'statusMSU'"
      >
        <status-btn-group
            v-model="user.statusMSU"
            id="statusMSU"

        />
      </form-input-group>
      <form-input-group v-show="user.statusMSU === 'STUDENT' || user.statusMSU === 'STAFF'">
        <irdom-file-upload @change="updateHeight"/>
      </form-input-group>

      <form-input-group label="Имя" :id="'given-name'">
        <irdom-input
            style="width: 373px"
            v-model="user.first_name"
            id="given-name"
            name="given-name"
            placeholder="Введите имя"
        />
      </form-input-group>

      <form-input-group label="Фамилия" :id="'family-name'">
        <irdom-input
            style="width: 373px"
            v-model="user.last_name"
            id="family-name"
            name="family-name"
            placeholder="Введите фамилию"
        />
      </form-input-group>

      <form-input-group label="Отчество" :id="'additional-name'">
        <irdom-input

            style="width: 373px"
            v-model="user.middle_name"
            id="additional-name"
            name="additional-name"
            autocomplete="on"
            placeholder="Введите отчество"
        />
      </form-input-group>

      <form-input-group
          label="Место работы"
          v-show="user.statusMSU === 'STAFF'"
          :id="'work'">
        <irdom-input
            v-model="user.work"
            placeholder="Введите своё место работы"
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
            placeholder="Введите свою кафедру"
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
            placeholder="Введите свою должность"
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
            placeholder="Введите УИН"
            v-model="user.uin"
            style="width: 270px"
            id="uin"
        />
      </form-input-group>
    </form>
    <irdom-text-btn class="clear">
      Очистить поля
    </irdom-text-btn>
  </irdom-dropdown>
</template>

<script>
import {COURSES, FACULTIES} from "@/data/CONSTANTS";
import FormInputGroup from "@/components/profile-components/form-input-group";
import statusBtnGroup from '@/components/profile-components/status-btn-group'
import genderBtnGroup from '@/components/profile-components/gender-btn-group'
import Vue from "q";

export default {
  name: "guest-dropdown",
  components: {FormInputGroup, statusBtnGroup, genderBtnGroup},
  watch: {
    user: {
      handler(val) {
        Vue.nextTick(() => {
          this.updateHeight()
        })

      },
      deep: true
    }
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
        faculty: "default",
        course: 'default',
        uin: "",
        statusMSU: "",
        work: "",
        cathedra: "",
        post: "",
      },
      FACULTIES,
      COURSES,
      bodyHeight: 0
    }
  },
  props: {
    guest: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateHeight() {
      this.bodyHeight = this.$refs.form.scrollHeight
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.clear {
  font-weight: 600;
  font-size: 18px;
  line-height: 140.52%;
  /* or 25px */
  color: #3D62BB;
  margin-top: 40px;
}
</style>