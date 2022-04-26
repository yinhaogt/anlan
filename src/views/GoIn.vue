<template>
  <div class="go-in">
    <banner
      class="banner"
      :img="require('../assets/img/goin/header.png')"
      title="走进安澜"
      subtitle="工业自动化设备整线系统方案的提供商"
    />
    <div class="intro">
      <div class="title">安澜自动化科技有限公司</div>
      <div class="content">
        <div>
          <p>
            安澜自动化科技有限公司成立于2019年4月，总部位于江苏苏州新加坡工业园区，安徽芜湖设有分公司，是一家专业提供汽车电子行业非标自动化设备装配、测试解决方案的高新技术企业。
          </p>
          <p>
            公司成立以来，
            一直以为客户提供测试、装配及自动化服务为己任，专注于数据采集和控制、机器视觉、运动控制、射频测试技术、系统集成，
            服务于汽车、消费电子、通信、电力、工业现场控制等各种领域。
          </p>
        </div>
        <img src="../assets/img/goin/intro.jpg" />
      </div>
    </div>

    <div class="culture">
      <!-- <div class="title">企业文化</div> -->
      <img class="culturetitle" src="../assets/img/goin/culturetitle.png" />
      <div class="mission">
        <div class="h1">使命</div>
        <div class="h2">
          成为智能制造行业领导者，提供一流的产品和服务，成为行业标杆
        </div>
      </div>
      <div class="content">
        <div>
          <img src="../assets/img/goin/culture1.jpg" />
          <div class="text">
            <div class="subtitle">愿景</div>
            <div class="subcontent">
              从优秀的非标自动化制造商转型为数字智能化制造解决方案和技术服务商
            </div>
          </div>
        </div>
        <div>
          <img src="../assets/img/goin/culture3.jpg" />
          <div class="text">
            <div class="subtitle">价值观</div>
            <div class="subcontent">诚信、主动、用心、尽责、务实、合作、创新</div>
            <!-- <div class="subcontent">用心、尽责</div>
            <div class="subcontent">务实、合作</div>
            <div class="subcontent">创新</div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="course">
      <div class="title">发展历程</div>
      <img src="@/assets/img/goin/course.png" alt="" />
    </div>

    <div class="architecture">
      <div class="title">组织架构</div>
      <img src="@/assets/img/goin/architecture.png" alt="" />
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
      honorList: [],
      partnerImg: [],
      courseList: [],
      teamItem: [],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      dialogTableVisible: false,
      dialogUrl: "",
      dialogTitle: "",
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
/deep/ .banner {
  .banner-img {
    background-position: top !important;
  }
  .title,
  .subtitle {
    color: #333;
  }
}

.go-in {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .intro {
    width: 1240px;
    margin: 30px auto;
    .title {
      font-size: 35px;
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }
    .content {
      font-size: 25px;
      color: #777;
      line-height: 46px;
      display: flex;
      img {
        width: 50%;
        margin-left: 80px;
      }
    }
  }

  .culture {
    width: 1240px;
    margin: 30px auto;
    .title {
      font-size: 35px;
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }
    .culturetitle {
      width: 100%;
      margin: 30px 0;
    }
    .mission {
      background-image: url("../assets/img/goin/culture2.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      height: 400px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .h1 {
        font-size: 45px;
        color: #ff1818;
      }
      .h2 {
        font-size: 30px;
        margin-top: 20px;
        background-image: -webkit-linear-gradient(
          bottom,
          red,
          #ff5f60,
          #f0c41b
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .content {
      font-size: 18px;
      color: #777;
      line-height: 30px;
      display: flex;
      & > div {
        display: flex;
        flex: 1;
        padding-right: 20px;
      }
      img {
        width: 50%;
        margin-right: 20px;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .subtitle {
      font-size: 25px;
      color: #555;
      margin: 20px 0;
      text-align: center;
    }
  }

  .course {
    width: 1240px;
    margin: 30px auto;
    .title {
      font-size: 35px;
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }
    img {
      width: 100%;
    }
  }

  .architecture {
    width: 1240px;
    margin: 30px auto;
    .title {
      font-size: 35px;
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
