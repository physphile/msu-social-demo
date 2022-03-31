<template>
  <div class="background"></div>

  <h1 style="margin: 83px 0 0 0">Забронируй отдых<br> в<span style="color: #3D62BB;"
  > пансионатах МГУ<br></span>
    онлайн
  </h1>

  <booking-calculator style="margin-top: 50px;"/>


  <h1 style="margin: 175px 0 0 0">Пансионаты</h1>

  <div class="main">
    <hotels-list :hotels="hotels"/>
  </div>
  <div class="body-back">
  </div>
</template>

<script>
import hotelsList from '@/components/main-components/hotels-list'
import bookingCalculator from '@/components/main-components/booking-calculator'

import Carousel2 from "@/components/UI/irdom-carousel";
import GuestDropdown from "@/components/guest-dropdown";

export default {
  components: {
    GuestDropdown,
    Carousel2,

    hotelsList, bookingCalculator
  },
  name: "Main",
  data() {
    return {
      step: 2,
      hotels: this.$store.state.hotels,
      files: [],
    }
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  padding: 30px 0;
}

.background {
  background: url('../assets/bg.png') no-repeat center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 803px;
  z-index: -10;
}

.body-back {
  top: 752px;
  height: calc(100% - 752px);
}


</style>