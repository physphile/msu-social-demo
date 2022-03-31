<template>
  <form @submit.prevent @submit="register">
    <form-input-group
        :label="'Статус в МГУ'"
        :id="'statusMSU'"
        style="margin-bottom: 20px;">
      <status-btn-group
          v-model="user.statusMSU"
          id="statusMSU"/>
    </form-input-group>

    <form-input-group label="Имя" :id="'given-name'">
      <irdom-input
          placeholder="Введите имя"
          style="width: 373px"
          v-model="user.first_name"
          id="given-name"
          name="given-name"
      />
    </form-input-group>

    <form-input-group label="Фамилия" :id="'family-name'">
      <irdom-input
          placeholder="Введите фамилию"
          style="width: 373px"
          v-model="user.last_name"
          id="family-name"
          name="family-name"
      />
    </form-input-group>

    <form-input-group label="Отчество" :id="'additional-name'">
      <irdom-input
          placeholder="Введите отчество"
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
          placeholder="Введите свою кафедру (если есть)"
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
          placeholder="Введите свою должность"
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
          placeholder="Введите УИН"
          style="width: 270px"
          id="uin"
      />
    </form-input-group>

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
          name="tel"
      />
    </form-input-group>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "registration-form"
}
</script>

<style scoped>
form {
  row-gap: 20px;
  display: flex;
  flex-direction: column;
}
</style>