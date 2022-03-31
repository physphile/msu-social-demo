<template>
  <div style="height: 200vh">
    <h1 style="margin-top: 62px;">Бронирование</h1>

    <div class="body-back"></div>

    <div class="body">
      <div class="content">
        <application-progress-bar :model-value="2" style="width: 890px"/>
        <booking2-calc
            :initial-order="this.order"
            @search="search"
            v-if="this.order"
        />
        <div style="" class="list">
          <room-select-card
              v-for="room in rooms"
              :rooms="[room]"
              @change="change"
              @select="select"
              :selected="!!selected.filter(s => s === room.id)[0]"
              :guests="order.guests"
              :nights="nights(order.arrivalDate, order.departureDate)"
          />
        </div>
        <img src="../assets/start_search_rooms.png" alt="" v-show="!showList">
        <irdom-color-btn :dark="!disabled" style="align-self: flex-start; margin-top: 30px;" @click="next"
                         :disabled="disabled">Продолжить
        </irdom-color-btn>
      </div>

      <div class="side">
        <room-cart :order="order" @change="change"/>
      </div>

    </div>
  </div>


</template>

<script>
import ApplicationProgressBar from "@/components/booking-components/application-progress-bar";
import Card2 from "@/components/UI/irdom-card-plank";
import BookingInfoBlock from "@/components/booking-components/booking-info-block";
import BookingPhotoBlock from "@/components/booking-components/booking-photo-block";
import Booking2Calc from "@/components/booking2-calc";
import RoomCard from "@/components/booking-components/room-card";
import RoomSelectCard from "@/components/room-select-card";
import RoomCart from "@/components/room-cart";
import CartItem from "@/components/cart-item";
import Vue from "q";

export default {
  name: "Booking",
  components: {
    CartItem,
    RoomCart,
    RoomSelectCard,
    RoomCard, Booking2Calc, BookingPhotoBlock, BookingInfoBlock, Card2, ApplicationProgressBar
  },
  created() {
    this.order = this.$store.state.order
    if (this.order.arrivalDate && this.order.departureDate && this.order.guests) {
      this.search(this.order)
    }
    if (this.order.rooms[0]) {
      this.order.rooms.forEach(r => {
        this.selected.push(r.id)
      })
    }
  },
  computed: {
    disabled() {
      return this.order.guests > this.capacity || !this.order.rooms[0]
    },
    capacity() {
      let capacity = 0
      this.order.rooms.forEach(r => {
        capacity += r.capacity * r.amount
      })
      return capacity
    },
  },
  methods: {
    next() {
      if (this.capacity) {
        this.$router.push('/booking3')
      }
    },

    select(id, amount) {
      this.selected.push(id)
      const room = this.rooms.filter(room => room.id === id)[0]
      room.amount = amount
      this.order.rooms.push(room)
    },

    isSelected(id) {
      let bool = false
      this.selected.forEach(i => {
        if (i === id) {
          bool = true
        }
      })
      return bool
    },
    change(id, amount, component) {
      if (amount === 0) {
        this.selected = this.selected.filter(i => i !== id)

        this.order.rooms = this.order.rooms.filter(room => room.id !== id)

      } else {
        this.order.rooms.filter(room => room.id === id)[0].amount = amount
      }


    },
    nights(start, end) {
      return (new Date(end).getTime() - new Date(start).getTime()) / 1000 / 60 / 60 / 24
    },
    search(order) {
      this.showList = true
      this.order.arrivalDate = order.arrivalDate
      this.order.departureDate = order.departureDate
      this.order.guests = order.guests
      //здесь будет подгрузка комнат, которые доступны в выбранные даты
      this.rooms = [
        {
          id: 1,
          name: "Одноместный номер",
          building: "Корпус 1",
          beds: "2 односпальные кровати",
          food: true,
          capacity: 1,
          shower: true,
          tv: true,
          fridge: true,
          url: require('../assets/room_photo.png'),
          price: {
            msu: 1800,
            stranger: 1900,
          },
        },
        {
          id: 2,
          name: "Двухместный номер",
          building: "Корпус 1",
          beds: "2 односпальные кровати",
          food: true,
          capacity: 2,
          shower: true,
          tv: true,
          fridge: true,
          url: require('../assets/room_photo.png'),
          price: {
            msu: 1800,
            stranger: 1900,
          },
        },
        {
          id: 3,
          name: "Трехместный номер",
          building: "Корпус 1",
          beds: "2 односпальные кровати",
          food: true,
          capacity: 3,
          shower: true,
          tv: true,
          fridge: true,
          url: require('../assets/room_photo.png'),
          price: {
            msu: 1800,
            stranger: 1900,
          },
        }
      ]
    },
  },
  data() {
    return {
      pictures: [
        require("../assets/solnechnyi.jpg"),
        require("../assets/universitetskiy.jpg"),
        require("../assets/krasnovidovo.png"),
      ],
      selected: [],
      rooms: [],
      order: {
        guests: 1,
        arrivalDate: '',
        departureDate: '',
        rooms: [],
        hotel: null
      },
      showList: false
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
  margin-right: 40px;
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

.list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>