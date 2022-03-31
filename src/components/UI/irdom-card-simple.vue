<template>
  <div class="card">
    <span class="title">{{ title }}</span>
    <span class="subtitle">{{ subtitle }}</span>
    <div class="img-wrap">
      <div class="img" :style="{'background-image': 'url(' + imgURL +')'}"/>
      <div class="gradient"/>
    </div>

    <div class="extra" v-if="(extra !== '') && (extra.trim() !== '')">
      <img src="../../assets/icons/place_small_white.png" style="margin: 0 4px 2px 0;" alt="">
      <span>{{ extra }}</span>
    </div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'irdom-card-simple',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    imgURL: {
      type: String,
      default: 'https://via.placeholder.com/270x209'
    },
    extra: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.btn {
  background: none;
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  text-align: center;
  color: #000000;
}

.card {
  box-shadow: 0 2.8125px 12.375px rgba(18, 31, 67, 0.08);
  border-radius: 10px;
  width: 270px;
  height: 256.74px;
  text-align: center;
  position: relative;
  transition: box-shadow .5s, color .5s;
  background: white;
}

.card:hover {
  box-shadow: 0 3.69792px 25px rgba(87, 128, 223, 0.4);
  color: #3D62BB;
}
*:hover {
  cursor: pointer;
}
.img-wrap {
  height: 209px;
  width: 100%;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
  background-clip: border-box;
}

.gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 81.4%;
  border-radius: 11.0938px;
  background: linear-gradient(360deg, rgba(33, 44, 71, 0.4) 18.7%, rgba(26, 37, 62, 0) 122.7%);
}

button {
  position: absolute;
  bottom: 13.65px;
  left: 86px;
}

.subtitle {
  color: white;
  font-weight: 400;
  font-size: 12px;
  position: absolute;
  left: 26px;
  bottom: 67.74px;
  z-index: 2;
}

.title {
  color: white;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 24px;
  position: absolute;
  left: 24px;
  z-index: 2;
  bottom: 84.74px;
  margin-bottom: 2px;
}

.extra {
  display: flex;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10.3652px);
  color: white;
  left: 20px;
  top: 21px;
  color: white;
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 34.0707px;
  padding: 6px 10px 6px;
  z-index: 2;
  font-size: 11px;
  line-height: 13px;
}
</style>