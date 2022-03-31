<template>
  <div>
    <irdom-side-menu-item
        :icon="require('../../assets/icons/personal_data.png')"
        :active="active === 1"
        @click="active = 1"
    >
      Личные данные
    </irdom-side-menu-item>
    <irdom-side-menu-item
        :icon=" require('../../assets/icons/docs.png')"
        :active="active===2"
        @click="active = 2"
    >
      Мои документы
    </irdom-side-menu-item>
    <irdom-side-menu-item
        :icon="require('../../assets/icons/checked_calendar.png')"
        :active="active===3"
        @click="active = 3"
    >
      Статус бронирования
    </irdom-side-menu-item>
  </div>
</template>

<script>
export default {
  name: "account-side-menu",

  data() {
    return {
      active: 1
    }
  }
}
</script>

<style scoped>

</style>