<template>
  <div style="height: 200vh">
    <h1 style="margin-top: 62px;">Бронирование</h1>

    <div class="body-back"></div>
    <application-progress-bar :model-value="3" style="margin-top: 90px;"></application-progress-bar>
    <div class="body">
      <div class="content">
        <h2> Вы выбрали номера</h2>
        <plural-select-card :order="this.$store.state.order" style="margin-bottom: 20px;"></plural-select-card>
        <h2>Заполните данные о гостях</h2>
        <guest-dropdown v-for="guest in this.$store.state.order.guests" :key="guest" :guest="guest"/>
      </div>

      <div class="side">
        <div class="block">
          <irdom-card-carousel :hotel="this.$store.state.hotels[this.$store.state.order.hotel]"></irdom-card-carousel>
        </div>

        <div class="block">
          <h3>Информация</h3>
          <booking-info-block/>
        </div>

      </div>

    </div>
  </div>


</template>

<script>
import ApplicationProgressBar from "@/components/booking-components/application-progress-bar";
import Card2 from "@/components/UI/irdom-card-plank";
import BookingInfoBlock from "@/components/booking-components/booking-info-block";
import BookingPhotoBlock from "@/components/booking-components/booking-photo-block";
import rolesGetMixin from "@/mixins/rolesGetMixin";
import Booking2Calc from "@/components/booking2-calc";
import RoomCard from "@/components/booking-components/room-card";
import RoomSelectCard from "@/components/room-select-card";
import GuestDropdown from "@/components/guest-dropdown";
import pluralSelectCard from '@/components/plural-select-card'

export default {
  name: "Booking",
  components: {
    GuestDropdown,
    RoomSelectCard,
    RoomCard, Booking2Calc, BookingPhotoBlock, BookingInfoBlock, Card2, ApplicationProgressBar, pluralSelectCard
  },
  methods: {},

  data() {
    return {
      pictures: [
        require("../assets/solnechnyi.jpg"),
        require("../assets/universitetskiy.jpg"),
        require("../assets/krasnovidovo.png"),
      ],
      selected: [],


    }
  }
}
</script>

<style scoped>
.body {
  display: flex;
  padding: 50px 0;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-right: 40px;
}

h2 {
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 140.52%;
  /* or 39px */
  color: #000000;
}

h3 {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140.52%;
  /* or 28px */
  color: #000000;
}

.block {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>