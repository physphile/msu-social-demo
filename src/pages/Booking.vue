<template>
  <h1 style="margin-top: 62px;">Бронирование</h1>

  <div class="body-back"></div>

  <div class="body">
    <div class="content">
      <application-progress-bar style="width: 890px"/>

      <booking-hotel-list @select="select" :init="active"/>

      <irdom-color-btn
          :dark="!disabled"
          style="align-self: flex-start; margin-top: 20px;"
          :disabled="disabled"
          @click="nextPage()"
      >
        Продолжить
      </irdom-color-btn>
    </div>

    <div class="side">
      <div class="block">
        <irdom-card-carousel :hotel="activeHotel"/>
      </div>

      <div class="block">
        <h2>На карте</h2>
        <irdom-yandex-maps/>
      </div>

      <div class="block">
        <h2>Информация</h2>
        <booking-info-block/>
      </div>

      <div class="block">
        <h2>Фотогалерея</h2>
        <booking-photo-block/>
      </div>

      <span style="display: flex; align-items: center">
        <irdom-text-btn
            style="color: #3D62BB;
            font-size: 16px;
            line-height: 140.52%;
             margin-right: 5px;"
        >
          Подробнее
        </irdom-text-btn>

        <img src="../assets/icons/arrow_up_right_blue.png" alt="">
      </span>

    </div>

  </div>

</template>

<script>
import ApplicationProgressBar from "@/components/booking-components/application-progress-bar";
import Card2 from "@/components/UI/irdom-card-plank";
import BookingInfoBlock from "@/components/booking-components/booking-info-block";
import BookingPhotoBlock from "@/components/booking-components/booking-photo-block";
import rolesGetMixin from "@/mixins/rolesGetMixin";
import BookingHotelList from "@/components/booking-hotel-list";

export default {
  name: "Booking",
  components: {BookingHotelList, BookingPhotoBlock, BookingInfoBlock, Card2, ApplicationProgressBar},
  mixins: [rolesGetMixin],

  data() {
    return {
      pictures: [
        require("../assets/solnechnyi.jpg"),
        require("../assets/universitetskiy.jpg"),
        require("../assets/krasnovidovo.png"),
      ],
      active: this.$store.state.order.hotel
    }
  },

  computed: {
    activeHotel(){
      const state = this.$store.state
      const id = state.order.hotel ? state.order.hotel : 0
      return state.hotels[id]
    },
    disabled() {
      return this.active === null
    },
  },
  methods: {
    nextPage () {
      if (!this.disabled) {
        this.$store.commit('setHotel', this.active)
        this.$router.push('booking2')
      }
    },
    select(id) {
      this.active =  id
    }
  }
}
</script>

<style scoped>
.body {
  display: flex;
  margin-top: 40px;
  padding: 50px 0;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 930px;
}

h2 {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140.52%;
  /* or 28px */
  color: #000000;
  margin-bottom: 20px;
}

.block {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
</style>