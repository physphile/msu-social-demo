<template>
<div class="list">
  <irdom-card-simple
      v-for="hotel in hotels"
      :title="hotel.name"
      :subtitle="hotel.title"
      :extra="hotel.location"
      :imgURL="hotel.imgURL"
  >
    Посмотреть
  </irdom-card-simple>
</div>
</template>

<script>
export default {
  name: "hotels-list",
  props: {
    hotels: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}
</style>