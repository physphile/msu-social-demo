<template>
  <div class="infoblock">
    <div>
      <irdom-icon-text :icon="require('../../assets/icons/calendar_small.png')">Круглогодичное функционирование
      </irdom-icon-text>
      <irdom-icon-text :icon="require('../../assets/icons/bed_small_gray.png')">Вместимость 195 человек
      </irdom-icon-text>
      <irdom-icon-text :icon="require('../../assets/icons/rooms_small_gray.png')">67 номеров</irdom-icon-text>
    </div>
    <span style="font-size: 12px; line-height: 20px; color: #858585; margin-top: 10px;">
          — 14 одноместных <br>
          — 15 двухместных <br>
          — 16 двухместных люкс</span>
  </div>

</template>

<script>
export default {
  name: "booking-info-block"
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>