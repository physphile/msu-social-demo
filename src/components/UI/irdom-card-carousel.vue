<template>
  <irdom-carousel/>

  <div class="card-body">
    <span class="card-title">
    {{ hotel.name }}
  </span>

    <irdom-icon-text :icon="require('../../assets/icons/building_small_black.png')" class="card-subtitle">{{hotel.title}}</irdom-icon-text>

  </div>
  <span>
    <span class="card-info">
        <img src="../../assets/icons/place.png" alt="" class="info-icon">{{ hotel.location }}
      </span>
  </span>

</template>

<script>
export default {
  name: "irdom-card-carousel",
  props: {
    hotel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-body {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: Montserrat,sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140.52%;
  /* or 28px */
  color: #000000;
  margin-top: 20px;
  margin-left: 10px;
}

.info-icon {
  filter: contrast(10%);
  margin-right: 6px;
}

.card-subtitle {
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  color: #858585;
  margin-top: 8px;
  margin-left: 10px;
}

span {
  display: flex;
  align-items: center;
}

.info-icon {
  margin-right: 4px;
  filter: contrast(1000000%);
}

.card-info {
  color: white;
  background: #445273;
  border-radius: 50px;
  padding: 5px 10px 6px;
  font-size: 11px;
  line-height: 13px;
  margin-top: 15px;
  margin-left: 10px;
}
</style>