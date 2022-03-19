<template>
  <div class="go-in">
    <banner
      :img="require('../assets/img/case/bgtop1.jpg')"
      title="走进安澜"
      subtitle="工业自动化设备整线系统方案的提供商"
    />
    <div class="intro">
      <div class="title">安澜自动化科技有限公司</div>
      <div class="content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;安澜自动化科技有限公司成立于2019年4月，总部位于江苏苏州新加坡工业园区，安徽芜湖设有分公司，是一家专业提供汽车电子行业非标自动化设备装配、测试解决方案的高新技术企业。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;公司成立以来，
          一直以为客户提供测试、装配及自动化服务为己任，专注于数据采集和控制、机器视觉、运动控制、射频测试技术、系统集成，
          服务于汽车、消费电子、通信、电力、工业现场控制等各种领域。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;公司基于西门子、NI虚拟仪器技术强大的软硬件平台，为广大客户提供全方位的技术服务：从完整的交钥匙工程到双方合作，其中包括搭建工艺系统的技术咨询、售前售后技术支持、系统开发需求分析、系统总体设计、系统应用软件开发、系统的硬件设计，
          包括电气和机械设计，以及最终的安装和调试、人员技术培训等各项业务，针对不同客户的需求，提供专业的培训课程。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;公司拥有一支高素质、雄厚的技术团队,专业技术力量雄厚、经验丰富、软件开发、电子系统硬件设计,机械结构设计、完整的电气设计方案的设计能力。安澜践行“让人不再像机器一样干活、让机器努力像人一样工作”的企业使命，为自动化行业从“机器换人”到智能制造而不懈奋进。
        </p>
      </div>
    </div>

    <div class="culture">
      <div class="title">企业文化</div>
      <div class="content">
        <div class="subtitle">保持创业精神</div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;今天，安澜自动化依然处于创业阶段，依旧需要大家继续发扬“百折不挠，愈战愈勇”的创业精神。我们的企业也是有韧度和潜力的，在成长的过程中，我们会遭遇困难，挑战，痛苦，甚至失败，但只要我们勇敢面对，团结一心，目标一致，我们的企业就会向前发展！过去，我们共同奋斗的经历和成长就是最有力的验证；未来，我们更应如此。
        </p>
        <div class="subtitle">为客户创造价值</div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;客户永远是我们企业最重要的合作伙伴，理解客户需求，满足客户需求，超越客户需求，与我们每个员工的工作息息相关。任正非说过：我们把煤炭洗的白白的，但这对客户没产生价值。同样的道理，我们把一个产品做的很复杂，耗费了很大的精力，用户根本不去用，一样是没有价值。
        </p>
        <div class="subtitle">我们的奋斗目标</div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;做到高层次的工业4.0、智能制造技术应用及全面的解决方案，以卓越的研发、创新能力为强大的硬件平台；并致力供应链物流管理模式下的系统规划、装备制造、系统集成与资源整合，帮助客户企业导入国内外优质导师资源，全方位提升客户企业的竞争力。
        </p>
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
      font-size: 18px;
      color: #777;
      line-height: 30px;
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
    .content {
      font-size: 18px;
      color: #777;
      line-height: 30px;
    }
    .subtitle {
      font-size: 22px;
      color: #555;
      margin: 20px 0;
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
