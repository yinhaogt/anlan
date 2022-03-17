<template>
  <div class="news">
    <banner
      title="产品中心"
      :img="require('../assets/img/product/header.jpg')"
    />
    <div class="news-section">
      <div class="news-section-content">
        <div class="content-nav">
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newstype == 1 }"
            @click="newstype = 1"
          >
            <span>自动化生产线</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newstype == 2 }"
            @click="newstype = 2"
          >
            <span>自动化工作站</span>
          </div>
        </div>
        <div class="content-main">
          <template v-if="newstype === 1">
            <swiper :options="swiperOption">
              <swiper-slide class="swiper-slide slide-one"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-two"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-three"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-four"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-five"> </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </template>
          <template v-else>
            <swiper :options="swiperOption">
              <swiper-slide class="swiper-slide slide-1"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-2"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-3"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-4"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-5"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-6"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-7"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-8"> </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Banner from "../components/Banner";
export default {
  name: "product",
  components: {
    Banner,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      newstype: 1,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {},
  mounted() {
    if (this.$route.query.type) {
      this.newstype = this.$route.query.type;
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.news {
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
        width: 400px;
        height: 55px;
        margin: 0 auto;
        display: flex;
        //justify-content: center;
        align-items: center;
        position: relative;
        bottom: 30px;
        // border: 1px solid red;

        &-btn {
          width: 50%;
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
        .swiper-slide {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          height: 400px;
        }
        .slide-one {
          background-image: url(../assets/img/product/product1.jpg);
        }
        .slide-two {
          background-image: url(../assets/img/product/product2.jpg);
        }
        .slide-three {
          background-image: url(../assets/img/product/product3.jpg);
        }
        .slide-four {
          background-image: url(../assets/img/product/product4.jpg);
        }
        .slide-five {
          background-image: url(../assets/img/product/product5.jpg);
        }
      }
    }
  }
}
</style>