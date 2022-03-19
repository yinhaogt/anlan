<template>
  <div class="news">
    <banner :img="require('../assets/img/join/header.png')" />
    <div class="news-section">
      <div class="news-section-content">
        <div class="content-nav">
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newstype == 1 }"
            @click="newstype = 1"
          >
            <span>团队建设</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{ 'content-nav-active': newstype == 2 }"
            @click="newstype = 2"
          >
            <span>招聘信息</span>
          </div>
        </div>

        <div class="content-main">
          <template v-if="newstype == 1">
            <swiper :options="swiperOption" :key="1">
              <swiper-slide class="swiper-slide slide-one"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-two"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-three"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-four"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-five"> </swiper-slide>
              <swiper-slide class="swiper-slide slide-six"> </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </template>
          <template v-else>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="岗位名称"> </el-table-column>
              <el-table-column prop="education" label="学历要求">
              </el-table-column>
              <el-table-column prop="experience" label="经验要求">
              </el-table-column>
              <el-table-column prop="salary" label="薪资"> </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  name: "join",
  components: {
    Banner,
  },
  data() {
    return {
      newstype: 1,
      swiperOption: {
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 1500,
        effect: "coverflow",
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      tableData: [
        {
          name: "非标机械设计",
          education: "不限",
          experience: "不限",
          salary: "15k-20k *13",
        },
        {
          name: "机械设计",
          education: "不限",
          experience: "不限",
          salary: "6k-8k *13",
        },
        {
          name: "电气工程师",
          education: "大专及以上",
          experience: "3年以上",
          salary: "面议",
        },
        {
          name: "钳工",
          education: "不限",
          experience: "不限",
          salary: "面议",
        },
        {
          name: "电工",
          education: "不限",
          experience: "不限",
          salary: "面议",
        },
      ],
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
  background-color: #e4e4e4;
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
          height: 600px;
        }
        .slide-one {
          background-image: url(../assets/img/join/trip1.jpg);
        }
        .slide-two {
          background-image: url(../assets/img/join/trip2.jpg);
        }
        .slide-three {
          background-image: url(../assets/img/join/trip3.jpg);
        }
        .slide-four {
          background-image: url(../assets/img/join/trip4.jpg);
        }
        .slide-five {
          background-image: url(../assets/img/join/trip5.jpg);
        }
        .slide-six {
          background-image: url(../assets/img/join/trip6.jpg);
        }
      }
    }
  }
}
</style>