<template>
  <div class="card" :class="{'selected-rooms': selected}">

    <div class="list">
      <room-card v-for="room in order.rooms" :room="room"/>
    </div>

    <div class="body">
      <div class="price">

        <span class="value">
          от 33&nbsp500&nbsp₽
        </span>
      </div>
      <span class="vline">|</span>
      <span class="info-block-row">
          <img
              class="info-block-row-img"
              src="../assets/icons/guests_small_gray.png"
              alt=""
          >
          {{ order.guests }} {{ guestsCase(order.guests) }}
        </span>
      <span class="vline">|</span>
      <span class="info-block-row">
          <img
              class="info-block-row-img"
              src="../assets/icons/calendar_small_gray.png"
              alt=""
          >
          {{ parseDate(order.arrivalDate) }}—{{ parseDate(order.departureDate) }}
        </span>
    </div>
  </div>
</template>

<script>
import RoomCard from "@/components/booking-components/room-card";
import Vue from "q";

export default {
  name: "room-select-card",

  components: {RoomCard},

  // mounted() {
  //   Vue.nextTick(() => {
  //     this.amount = this.initialAmount
  //   })
  // },

  data() {
    return {
      amount: 1
    }
  },

  props: {
    order: {
      type: Object,
      required: true
    }

    // initialAmount: {
    //   type: Number,
    //   default: 1
    // }
  },

  watch: {
    async amount(val) {
      if (this.selected) {
        await this.$emit('change', this.rooms[0].id, val, 'card')
      }
      val === 0 ? ++this.amount : {}
    },
    // roomAmount(val) {
    //   this.amount = val.amount
    // },
    room: {
      handler(val) {
        this.amount = val.amount ? val.amount : 1
      },
      deep: true
    }
  },
  // computed: {
  //   roomAmount() {
  //     return this.room.amount
  //   }
  // },
  methods: {
    select() {
      this.$emit('select', this.rooms[0].id, this.amount)
    },
    guestsCase(g) {
      switch (g) {
        case 1:
          return 'гость'
        case 2:
        case 3:
        case 4:
          return 'гостя'
        default:
          return 'гостей'
      }

    },
    parseDate(d) {
      const date = new Date(d)
      return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
    }
  },
}
</script>

<style scoped>
.card {
  background: #FFFFFF;
  box-shadow: 0 2.8125px 12.375px rgba(18, 31, 67, 0.08);
  border-radius: 10px;
  width: 890px;
  padding: 30px 32px 30px 31px;
  height: auto;
}

.divide {
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #858585;
  margin-left: 7px;
}

.value {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 140.52%;
  /* or 39px */
  color: #000000;
}

.body {
  margin: 36px 1px 0 1px;
  display: flex;
  align-items: center;
}

.list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.selected-rooms {
  border: 3px solid #A9C0F7;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.vline {
  font-weight: normal;
  font-size: 28px;
  line-height: 140.52%;
  /* or 39px */
  color: #E3E3E3;
  margin: 0 28px;
}

.info-block-row {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: black;
}
.info-block-row-img {
  filter: contrast(10000000) invert(1);
}
</style>