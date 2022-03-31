<template>
  <div class="wrap">
    <div class="cell">
      <span class="label">Дата заезда — выезда</span>
      <div class="dates">
        <irdom-input
            type="date"
            style="width: 200px"
            :min="today"
            :max="order.departureDate"
            v-model="order.arrivalDate"
        />
        <span style="margin: 0 10px 0 10px">—</span>
        <irdom-input
            type="date"
            style="width: 200px"
            :min = 'order.arrivalDate ? order.arrivalDate : today'
            v-model="order.departureDate"
        />
      </div>

    </div>
    <div class="cell">
      <span class="label">Число гостей</span>
      <irdom-counter :min="1" :max="6" v-model="order.guests"/>
    </div>
    <irdom-color-btn dark class="submit-btn" @click="search">Найти номера</irdom-color-btn>
  </div>

</template>

<script>
import _ from 'lodash';
import Vue from "q";

export default {
  name: "booking2-calc",
  props: {
    initialOrder: {
      type: Object,
      required: true
    }
  },
  mounted() {
    Vue.nextTick(() => {
      this.order.guests = this.initialOrder.guests ? this.initialOrder.guests : 1
      this.order.departureDate = this.initialOrder.departureDate ? this.initialOrder.departureDate : ''
      this.order.arrivalDate = this.initialOrder.arrivalDate ? this.initialOrder.arrivalDate : ''

    })
  },


  data() {
    return {
      order: {
        arrivalDate: '',
        departureDate: '',
        guests: 1
      }
    }
  },

  computed: {
    searchRooms() {
      if (this.order) {
        return (this.order.arrivalDate !== '') && (this.order.departureDate !== '') && (typeof this.order.guests === 'number')
      }
    },
    today () {
      const today = new Date()
      const year = today.getFullYear().toString()
      let month = (today.getMonth() + 1).toString()
      if (month.length === 1) {
        month = '0' + month
      }
      let day = today.getDate().toString()
      if (day.length === 1) {
        day = '0' + day
      }

      return year + '-' + month + '-' + day
    }
  },
  methods: {
    search() {
      if (this.searchRooms) {
        this.$emit('search', this.order)
      } else {
        // alert('Выберите даты заезда и выезда и число гостей')
        this.$store.commit('addMessage', {type: 'info', text: 'Выберите даты заезда и выезда и число гостей'})
      }
    }
  }
}
</script>

<style scoped>


.wrap {
  display: flex;
  column-gap: 43px;
}

.cell {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  row-gap: 18px;
}

.dates {
  display: flex;
  align-items: center;
}

span {
  font-weight: 600;
  font-size: 18px;
  line-height: 140.52%;
  /* or 25px */
  color: #858585;
}


.label {
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  color: #858585;
}

.submit-btn {
  align-self: flex-end;
  width: 200px;
}
</style>