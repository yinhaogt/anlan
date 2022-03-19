<template>
  <div class="banner">
    <div class="banner-img" :style="{ 'background-image': 'url(' + img + ')' }">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    img: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  .banner-img {
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    font-size: 45px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .subtitle {
      font-size: 28px;
    }
  }
}
</style>