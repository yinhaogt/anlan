<template>
  <div class="case">
    <banner :img="require('../assets/img/case/header.jpg')" />
    <div class="case-section">
      <div class="case-section-content">
        <div class="content-nav">
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': activeTab == 1 }"
            @click="activeTab = 1"
          >
            <span>装配</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': activeTab == 2 }"
            @click="activeTab = 2"
          >
            <span>视觉检测</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': activeTab == 3 }"
            @click="activeTab = 3"
          >
            <span>激光焊接</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': activeTab == 4 }"
            @click="activeTab = 4"
          >
            <span>测试功能</span>
          </div>
        </div>
        <div class="content-main">
          <img v-if="activeTab === 4" src="../assets/img/case/1.jpg" alt="" />
          <img
            v-else-if="activeTab === 3"
            src="../assets/img/case/2.jpg"
            alt=""
          />
          <img
            v-else-if="activeTab === 2"
            src="../assets/img/case/3.png"
            alt=""
            :style="{ width: '80%' }"
          />
          <img
            v-else-if="activeTab === 1"
            src="../assets/img/case/4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner,
  },
  data() {
    return {
      activeTab: 1,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  position: relative;
  overflow: hidden;

  &-section {
    width: 100%;
    //height: 1600px;

    &-content {
      width: 1240px;
      //height: 1600px;
      margin: 0 auto;
      background-color: #fff;
      // border: 1px solid red;

      .content-nav {
        width: 800px;
        height: 55px;
        margin: 0 auto;
        display: flex;
        //justify-content: center;
        align-items: center;
        position: relative;
        bottom: 30px;
        // border: 1px solid red;

        &-btn {
          width: 25%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e4e4e4;
          transition: all 0.2s;
          cursor: pointer;
        }

        .content-nav-active {
          background-color: #409eff;
          color: #fff;
        }
      }

      .content-main {
        padding: 0 20px;
        padding-bottom: 20px;
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
