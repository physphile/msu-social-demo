<template>
  <div class="card" :class="{active: active}">
    <img :src="hotel.imgURL" class="card-img" alt="">
    <div class="card-body">
      <span class="card-title">{{ hotel.name }}</span>
      <span class="card-subtitle">
        <img src="../../assets/icons/place.png" alt="" class="subtitle-icon">{{ hotel.location }}
      </span>
      <div class="bottom-wrap">
        <div class="info">
          <irdom-icon-text :icon="require('../../assets/icons/building_small_black.png')"
                           style="color: black; margin-right: 16px;">
            {{ hotel.title }}
          </irdom-icon-text>
          <irdom-icon-text :icon="require('../../assets/icons/rooms_small_black.png')"
                           style="color: black; margin-right: 16px;">67
          </irdom-icon-text>
          <irdom-icon-text :icon="require('../../assets/icons/bed_small_black.png')"
                           style="color: black; margin-right: 16px;">125
          </irdom-icon-text>
        </div>
        <irdom-text-btn style="color: #3D62BB;" @click="select">{{btnText}}</irdom-text-btn>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "irdom-card-plank",
  props: {
    hotel: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnText () {
      if (!this.active) {
        return 'Выбрать'
      }
      return 'Отменить выбор'
    }
  },
  methods: {
    select (){
      this.$emit('select', this.id)
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  background-color: white;
  box-shadow: 0 2.8125px 12.375px rgba(18, 31, 67, 0.08);
  border-radius: 10px;
  width: 890px;
  height: 170px;
  overflow: hidden;
  box-sizing: content-box;
  margin: 3px 0 0 3px;
}

.card-img {
  height: 170px;
  width: 270px;
  object-fit: cover;
}

.card-body {
  padding: 21px 35px 28px 38px;
  flex-grow: 1;
  height: 100%;
}

.info {
  display: flex;
  align-items: center;
}

span {
  display: flex;
  align-items: center;
}

.info-icon {
  margin-right: 5px;
}

.card-title {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 140.52%;
  /* or 39px */
  color: #000000;
  margin-bottom: 7px;
}

.card-subtitle {
  font-size: 16px;
  line-height: 19px;
  color: #858585;
  margin-bottom: 38px;
}

.subtitle-icon {
  filter: invert(1);
  margin: 0 6px 1px 0;
}

.bottom-wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.active {
  border: 3px solid #A9C0F7;
  margin: 0 0 -3px 0;
}

</style>