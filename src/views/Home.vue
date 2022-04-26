<template>
  <div class="home">
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide slide-one"> </swiper-slide>
      <swiper-slide class="swiper-slide slide-two"> </swiper-slide>
      <swiper-slide class="swiper-slide slide-three"> </swiper-slide>
      <swiper-slide class="swiper-slide slide-four"> </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="product-wp">
      <div class="title">
        <div>精品展示</div>
        <div class="en-name">PRODUCTS</div>
      </div>
      <div class="product-item-wp prdwp">
        <div class="product-item">
          <img src="../assets/img/home/product1.jpg" />
        </div>
        <div class="product-item">
          <img src="../assets/img/home/product2.jpg" />
        </div>
      </div>
    </div>
    <div class="product-wp">
      <div class="title">
        <div>终端客户</div>
        <div class="en-name">CLIENT</div>
      </div>
      <div class="product-item-wp">
        <div class="product-item">
          <img src="../assets/img/home/client.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
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
};
</script>

<style lang="scss" scoped>
/* .el-header {
  position: absolute;
} */
.swiper-slide {
  font-size: 24px;
  // text-align: center;
  // line-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 500px;

  .page {
    text-align: center;
    height: 100px;
    overflow: hidden;
    h3,
    p {
      font-size: 40px;
      font-weight: 400;
      color: #fff;
    }
  }

  .slogan {
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding: 30px 0;
  }
}
.slide-one {
  background: url(../assets/img/home/loop1.jpg) no-repeat top;
  background-size: cover;
}
.slide-two {
  background: url(../assets/img/home/loop2.jpg) no-repeat top;
  background-size: cover;
}
.slide-three {
  background: url(../assets/img/home/loop3.jpg) no-repeat center;
  background-size: cover;
}
.slide-four {
  background: url(../assets/img/home/loop4.png) no-repeat center;
  background-size: cover;
}

.product-wp {
  .title {
    text-align: center;
    font-size: 35px;
    color: #777;
    font-weight: 500;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .en-name {
      font-size: 20px;
      font-weight: 700;
      color: #dfdfdf;
    }
  }
  .product-item-wp {
    display: flex;
    .product-item {
      flex: 1;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .prdwp {
    height: 32vw;
    overflow: hidden;
  }
}
</style>
