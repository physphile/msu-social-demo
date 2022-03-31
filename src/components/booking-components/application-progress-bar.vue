<template>
  <div class="bar">
    <irdom-step-progress-bar-item
        @click="$router.push('/booking')"
        :url="require('../../assets/icons/buildings.png')"
        :number="1"
        :done="modelValue > 1"
        :active="modelValue === 1"
    >
      Выобр пансионата
    </irdom-step-progress-bar-item>
    <div class="line"></div>
    <irdom-step-progress-bar-item
        @click="$router.push('/booking2')"
        :url="require('../../assets/icons/bed_blue.png')"
        :number="2"
        :done="modelValue > 2"
        :active="modelValue === 2"
    >
      Выбор номера
    </irdom-step-progress-bar-item>
    <div class="line"></div>
    <irdom-step-progress-bar-item
        :url="require('../../assets/icons/users_blue.png')"
        :number="3"
        :done="modelValue > 3"
        :active="modelValue === 3"
        @click="$router.push('/booking3')"
    >
      Данные о гостях
    </irdom-step-progress-bar-item>
    <div class="line"></div>

    <irdom-step-progress-bar-item
        :url="require('../../assets/icons/send.png')"
        :number="4"
        :done="modelValue > 4"
        :active="modelValue === 4"
    >
      Отправка заявки
    </irdom-step-progress-bar-item>
  </div>
</template>

<script>
export default {
  name: "application-progress-bar",
  props: {
    modelValue: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
.bar {
  display: flex;
  border: 1px solid #E3E3E3;
  border-radius: 25px;
  align-items: center;
}

.line {
  border: 1px solid #E3E3E3;
  height: 35px;
  width: 0;
}

</style>