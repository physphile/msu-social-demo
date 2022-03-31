<template>
<!--TODO: убрать лишние кнопки, уменьшить начальный масштаб-->
  <div style="position:relative;overflow:hidden;" class="map">
    <div class="filter"></div>
    <a
        href="https://yandex.ru/maps/org/mgu_im_m_v_lomonosova_dom_otdykha/1145535838/?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:0px;"
    >
      МГУ им. М. В. Ломоносова, дом отдыха
    </a>
    <a
        href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/category/resort/184106400/?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:14px;"
    >Дом отдыха в Москве и Московской области
    </a>
    <iframe
        src="https://yandex.ru/map-widget/v1/-/CCU5mOSjDD"
        width="270"
        height="160"
        frameborder="1"
        allowfullscreen="true"
        style="position:relative; border: 1px solid #E3E3E3; border-radius: 10px;"
    />
  </div>
</template>

<script>
export default {
  name: "irdom-yandex-maps"
}
</script>

<style scoped>
.filter {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 4px);
  z-index: 10;
  background: #3D62BB;
  opacity: 0.1;
  border-radius: 10px;
  pointer-events: none;
}
</style>