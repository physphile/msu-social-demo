<template>
  <div class="room-cart-list-container">

    <div v-for="item in items" class="list">
      <cart-item :item="item" @change="change"/>
      <div class="hline" v-if="items.indexOf(item) !== items.length - 1"/>
    </div>

  </div>
</template>

<script>
import CartItem from "@/components/cart-item";

export default {
  name: "room-cart-list",
  components: {CartItem},
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    change(id, amount) {

      this.$emit('change', id, amount)
    }
  }
}
</script>

<style scoped>
.room-cart-list-container {
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow-y: scroll;
  padding: 25px;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 3px;
  background: white;
}

::-webkit-scrollbar-thumb {
  background: #E3E3E3;
  border-radius: 50px;
}

.hline {
  width: 100%;
  height: 0;
  border: 1px solid #E3E3E3;
  margin: 25px 0;
}
</style>