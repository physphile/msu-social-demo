<template>
  <div class="cart-item-container">
    <img
        src="https://sputnik-hotel.ru/wp-content/uploads/2019/08/%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82-%D0%B4%D0%B2%D1%83%D1%85%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9-2%D0%BA%D1%80.jpg"
        alt="" class="cart-item-img">
    <div class="cart-item-body">
      <span class="cart-item-title">{{ item.name }}</span>
      <span class="cart-item-subtitle">от 11&nbsp500 ₽</span>
      <div class="bottom-row">
        <irdom-counter :scale="0.52" :fontSize="'14px'" v-model="amount" :min="0" :max="6"></irdom-counter>
        <img src="../assets/icons/cart_remove.png" alt="" class="remove" @click="this.$emit('change', item.id, 0)">
      </div>

    </div>
  </div>
</template>

<script>
import Vue from "q";

export default {
  name: "cart-item",
  mounted() {
    Vue.nextTick(() => {
      this.amount = this.item.amount
    })
  },
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      amount: 1
    }
  },
  watch: {
    amount(val) {
      this.$emit('change', this.item.id, val)
    },
    item: {
      handler(val) {
        this.amount = val.amount
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.cart-item-img {
  border-radius: 10px;
  width: 60px;
  height: 50px;
  margin-right: 15px;
}

.cart-item-title {
  font-size: 14px;
  line-height: 17px;
}

.cart-item-subtitle {
  font-weight: 600;
  font-size: 14px;
  line-height: 140.52%;
  margin: 10px 0;
}

.cart-item-container {
  display: flex;
}

.cart-item-body {
  display: flex;
  flex-direction: column;
}

.bottom-row {
  display: flex;
  justify-content: space-between;
}

.remove {
  cursor: pointer;
  object-fit: contain;
  transition: filter .3s ease;
}

.remove:hover, .remove:active {
  filter: saturate(15);
}
</style>