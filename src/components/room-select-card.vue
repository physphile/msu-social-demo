<template>
  <div class="card" :class="{'selected-rooms': selected}">

    <div class="list">
      <room-card v-for="room in rooms" :room="room"/>
    </div>

    <div class="body">
      <div class="price">
        <span class="value">
          от 11&nbsp500 ₽
        </span>

        <span class="divide">
          / {{ nights }} ночи {{ guests }} человек
        </span>
      </div>

      <irdom-counter
          style="margin-left: auto;"
          :min="this.selected ? 0 : 1"
          :max="6"
          v-model="amount"
      />

      <irdom-color-btn
          dark
          style="width: 133px; height: 51px; border-radius: 10px; margin-left: 30px;"
          @click="select"
          v-show="!selected"
      >
        Выбрать
      </irdom-color-btn>
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
    nights: {
      type: Number,
      required: true
    },

    guests: {
      type: Number,
      required: true
    },

    rooms: {
      type: Array,
      required: true
    },

    selected: {
      type: Boolean,
      default: false
    },

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
  transition: box-shadow .3s ease;
}
.card:hover {
  box-shadow: 0 5px 21px rgba(0, 0, 0, 0.15);
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
  justify-content: space-between;
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
</style>