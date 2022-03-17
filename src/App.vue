<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/img/toplogo.png" alt />
        </div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/product">产品中心</el-menu-item>
          <el-menu-item index="/case">经典案例</el-menu-item>
          <el-menu-item index="/goin">走进安澜</el-menu-item>
          <el-menu-item index="/join">加入我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>走进安澜</p>
              <span>公司简介</span>
              <span>团队建设</span>
              <span>企业文化</span>
              <span>企业愿景</span>
            </li>
            <li>
              <p>产品中心</p>
              <span>
                <router-link :to="{ path: '/product', query: { type: '1' } }">
                  自动化生产线
                </router-link>
              </span>
              <span>
                <router-link :to="{ path: '/product', query: { type: '2' } }">
                  自动化工作站
                </router-link>
              </span>
            </li>
            <li>
              <p>联系我们</p>
              <span>邮箱：xiaowei.hong@szalign-tech.com</span>
              <span>电话：0553-2831006</span>
              <span>地址：安徽省芜湖市鸠江区永镇路196号</span>
            </li>
          </ul>
          <!-- <img src="./assets/img/ercode.png" alt /> -->
        </div>
        <!-- <div class="copyright">
          <span>版权所有</span>
        </div> -->
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
    };
  },
  methods: {
    handleSelect() {},
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  .logo {
    width: 167px;
    padding: 10px 0;
    img {
      width: 100%;
      height: 40px;
    }
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #333;
  a,
  a:focus,
  a:hover {
    text-decoration: none;
  }
  a {
    color: #fff;
  }
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
