<template>
  <div class="grid">
    <img src="../../assets/fountain.png" alt="">
    <img src="../../assets/fountain.png" alt="">
    <img src="../../assets/fountain.png" alt="">
    <img src="../../assets/fountain.png" alt="">
    <img src="../../assets/fountain.png" alt="">
    <img src="../../assets/fountain.png" alt="">
    <div class="filter-grid">
      <div class="filter-cell">
        <div class="filter"></div>
      </div>
      <div class="filter-cell">
        <div class="filter"></div>
      </div>
      <div class="filter-cell">
        <div class="filter"></div>
      </div>
      <div class="filter-cell">
        <div class="filter"></div>
      </div>
      <div class="filter-cell">
        <div class="filter"></div>
      </div>
      <div class="filter-cell">
        <div class="filter"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "booking-photo-block"
}
</script>

<style scoped>
.grid, .filter-grid {
  display: grid;
  grid-template: '1fr 1fr 1fr'
                 '1fr 1fr 1fr';
  grid-gap: 8px;
}
.filter-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.grid {
  position: relative;
}
img {
  width: 85px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  overflow: hidden;
}
.filter {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #3D62BB;
  opacity: 0.1;
  border-radius: 10px;
  pointer-events: none;
}
.filter-cell {
  position: relative;
}
</style>