<template>
  <div class="wrap">
    <img :src="room.url" alt="">
    <div class="info">
      <p class="card-title">{{ room.name }}</p>
      <div class="facilities">
        <irdom-icon-text :icon="require('../../assets/icons/building_small_black.png')"
                         class="item">
          {{ room.building }}
        </irdom-icon-text>
        <irdom-icon-text :icon="require('../../assets/icons/bed_small_black.png')" class="item">{{
            room.beds
          }}
        </irdom-icon-text>
        <irdom-icon-text :icon="require('../../assets/icons/arrow_up_right_blue.png')">
          <irdom-text-btn class="more-about">Подробнее о номере</irdom-text-btn>
        </irdom-icon-text>

      </div>
      <div class="prices">
        <div class="price">
          <span class="value">{{ room.price.msu }}₽</span>
          <span class="divide">/ ночь</span>
          <div class="status">гость из МГУ</div>
        </div>
        <div class="price">
          <span class="value">{{ room.price.stranger }}₽</span>
          <span class="divide">/ ночь</span>
          <div class="status">другой гость</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "room-card",
  props: {
    room: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  height: 170px;
  width: 827px;
  background: #FFFFFF;
  border-radius: 10px;
  border: 1px solid #E3E3E3;
}

img {
  height: 100%;
  width: 270px;
}

.facilities {
  display: flex;
  margin-left: 40px;
  column-gap: 18px;
}

.item {
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  color: #000000;
}

.card-title {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 140.52%;
  /* or 39px */
  color: #000000;
  margin: 21px 0 8px 38px;
}

.status {
  background: white;
  width: 94px;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  color: #000000;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
}

.value {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140.52%;
  /* or 28px */
  color: #000000;
}

.prices {
  display: flex;
  column-gap: 38px;
  margin-left: 38px;
  margin-top: 29px;
}

.divide {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #858585;
  margin: 0 8px 4px 4px;
}

.info {
  width: 100%;
}

.price {
  display: flex;
  align-items: flex-end;
}

.more-about {
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  color: #3D62BB;
}
.more-about:hover {
  text-decoration: underline;
}
</style>