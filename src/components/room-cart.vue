<template>
  <div class="cart-container" :class="{'no-fixed': height < 961}">

  <span class="cart-title">
    Моя заявка
  </span>

    <span class="cart-subtitle">
      {{ subtitle }}
    </span>

    <div
        class="hline"
        style="margin-bottom: 0;"
    />

    <room-cart-list
        :items="order.rooms"
        v-if="order.rooms[0]"
        @change="change"
    />

    <div
        class="cart-empty"
        v-show="!order.rooms[0]"
    >
      <img
          src="../assets/empty_cart.png"
          alt=""
          class="cart-empty-img"
      >

      <p class="empty-cart-text">
        Выберите номера и добавьте их к заказу
      </p>
    </div>

    <div class="info-block">
      <span
          class="info-block-row"
          v-show="(capacity >= order.guests || !order.rooms[0]) && order.departureDate && order.arrivalDate"
      >
        <img
            src="../assets/icons/guests_small_gray.png"
        >
        {{ order.guests }} {{ guestsCase(order.guests) }}
      </span>

      <span
          class="info-block-row"
          v-show="(capacity >= order.guests || !order.rooms[0]) && order.departureDate && order.arrivalDate"
      >
        <img
            src=" ../assets/icons/calendar_small_gray.png"
        >
        {{ parseDate(order.arrivalDate) }}—{{ parseDate(order.departureDate) }}
      </span>

      <div class="not-enough" v-show="(capacity < order.guests) && order.rooms[0]">
        <div class="vline"></div>
        <span class="not-enough-text">Выбранных номеров<br>недостаточно, чтобы<br>разместить всех гостей</span>
      </div>
    </div>
    <div class="hline" style="margin:  0 24px 0 24px; border: 1px solid #858585;"></div>
    <span class="cart-price">от 11&nbsp500 ₽</span>
    <irdom-color-btn style="width: auto; border-radius: 10px; margin: 0 24px 25px 24px; padding: 0" :dark="!disabled"
                     :disabled="disabled" @click="nextPage()">Перейти к оформлению
    </irdom-color-btn>
  </div>
</template>

<script>
import RoomCartList from "@/components/room-cart-list";
import innerHeightMixin from '@/mixins/innerHeightMixin'
import Vue from "q";

export default {
  name: "room-cart",
  components: {RoomCartList},
  mixins: [innerHeightMixin],

  computed: {
    subtitle() {
      if (this.order) {
        const state = this.$store.state
        const hotel = state.hotels[this.order.hotel]
        return hotel.title + ' ' + hotel.name
      }

    },
    capacity() {
      let capacity = 0
      this.order.rooms.forEach(r => {
        capacity += r.capacity * r.amount
      })
      return capacity
    },
    disabled() {
      return this.order.guests > this.capacity || !this.order.rooms[0]
    }
  },
  props: {
    order: {
      type: Object
    }
  },

  methods: {
    change(id, amount) {
      this.$emit('change', id, amount, 'cart')
    },
    nextPage() {
      if (!this.disabled) {
        this.$store.commit('setOrder', this.order)
        this.$router.push('/booking3')
      }
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


.cart-container {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #E3E3E3;
  border-radius: 25px 25px 0 0;
  box-shadow: 0 2.8125px 12.375px rgba(18, 31, 67, 0.08);
  width: 270px;
  position: fixed;
  top: calc(100vh - 810px);
}

.cart-title {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140.52%;
  margin-top: 24px;
  margin-left: 26px;
}

.cart-subtitle {
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #858585;
  margin-top: 2px;
  margin-left: 27px;
}

.hline {
  height: 0;
  border: 1px solid #E3E3E3;
  margin: 25px 0;
}

.info-block {
  background: linear-gradient(180deg, #FFFFFF 62.2%, rgba(255, 255, 255, 0) 100%);
  height: 110px;
  /*transform: matrix(1, 0, 0, -1, 0, 0);*/
  /*position: absolute;*/
  /*top: 486px;*/
  /*left: 0;*/
  /*width: 100%;*/
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 40px 24px 20px 24px;
}

.cart-price {
  font-size: 20px;
  line-height: 140.52%;
  /* or 28px */
  margin: 20px 24px;
}

.cart-empty {
  padding: 0 55px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.empty-cart-text {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  font-weight: 400;
  margin-top: 27px;
  color: #858585;
}

.cart-empty-img {
  width: 161px;
  height: 166px;
}

.info-block-row {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #858585;
}

.no-fixed {
  position: initial;
}

.vline {
  background: #FB8888;
  border-radius: 50px;
  width: 4px;
  height: 50px;
  align-self: stretch;
}

.not-enough {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.not-enough-text {
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #858585;

}
</style>