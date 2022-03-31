<template>
  <div class="list">
    <irdom-card-plank
        v-for="hotel in hotels"
        :hotel="hotel"
        :id="hotels.indexOf(hotel)"
        @select="select"
        :active="active === hotels.indexOf(hotel)"
    />
  </div>
</template>

<script>
import Vue from "q";

export default {
  name: "booking-hotel-list",
  mounted() {
    Vue.nextTick(() => {
      this.active = this.init
    })
  },
  data() {
    return {
      hotels: this.$store.state.hotels,
      active: null
    }

  },
  props: {
    init: {
      required: true
    }
  },
  methods: {
    select(id) {
      if (this.active === id) {
        this.active = null
        this.$emit('select', null)
      } else {
        this.active = id
        this.$emit('select', id)
      }
    },
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

}
</style>