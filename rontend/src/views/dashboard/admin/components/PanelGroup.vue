<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="indxData">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="chart" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            项目数量
          </div>
          <router-link to="../../task/add-task" class="card-panel-num link-type" :duration="2600" :start-val="0">{{list.task_cnt}}</router-link>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="indxData">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="eye-open" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            WEB站点
          </div>
          <router-link to="../../task/allweb-info" class="card-panel-num link-type" :duration="3000" :start-val="0">{{ list.site_cnt }}</router-link>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="indxData">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="guide" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            发现子域
          </div>
          <router-link to="../../task/alldomain-info" class="card-panel-num link-type" :duration="3200" :start-val="0">{{ list.domain_cnt }}</router-link>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="indxData">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="bug" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            漏洞数量
          </div>
          <router-link to="../../task/allnuclei-info" class="card-panel-num link-type" :duration="3600" :start-val="0">{{ list.vul_cnt }}</router-link>
        </div>
      </div>
    </el-col>
      <el-col :lg="4" class="card-panel-col">
        <div class="card-panel" @click="indxData">
          <div class="card-panel-icon-wrapper icon-shopping">
            CPU：
          </div>
          <div class="card-panel-description">
            <div class="circle-progress-wrapper">
              <div class="circle-progress" :style="{ width: list.cpu + '%' }"></div>
              <span class="card-panel-num">{{ list.cpu }}%</span>
            </div>
          </div>
        </div>
      </el-col>

    <el-col :lg="10" class="card-panel-col">
      <div class="card-panel" @click="indxData">
        <div class="card-panel-icon-wrapper icon-shopping" style="float: left;">
          内存：
        </div>
        <div class="card-panel-description" style="float: left; margin-left: 10px;">
          <div  >
            <div :style="{ width: list.memoryinfo.memory + '%' }"></div>
            <p class="card-panel-num">{{ list.memoryinfo.memory }}%</p>
          </div>
        </div>
        <div style="overflow: hidden;">
          <div v-for="item in menmList" :key="item.pid" style="float: left; margin-left: 5px; text-align: center;">
            <h3 style="margin-bottom: 5px;">PID: <span style="color: green;">{{ item.pid }}</span></h3>
            <h3 style="margin-top: 0; margin-bottom: 5px;">Name: <span style="color: green;">{{ item.name }}</span></h3>
          </div>
        </div>
        <br>
      </div>
    </el-col>

    <el-col :lg="4" class="card-panel-col">
      <div class="card-panel" @click="indxData">
        <div class="card-panel-icon-wrapper icon-shopping" style="float: left;">
          容器：
        </div>
        <div  style="float: left; margin-left: 5px;margin-bottom: 20px; margin-top: 10px;font-weight: bold;">
          <div v-for="(status, serviceName) in list.service" :key="serviceName" style="margin-top: 4px">
            <span v-if="status === 'running'" style="color: green;">{{ serviceName }}: {{ status }}</span>
            <span v-else style="color: red;">{{ serviceName }}: {{ status }}</span>
          </div>
        </div>
        <br>
      </div>
    </el-col>

    <el-col :lg="6" class="card-panel-col">
      <div class="card-panel" @click="indxData">
        <div class="card-panel-icon-wrapper icon-shopping">
          系统：
        </div>
        <div>
        <h3 style="color: green;">{{ list.sysinfo.distro +'  ' + list.sysinfo.os }}</h3>
        <h3 style="color: green;">{{ list.sysinfo.name }}</h3>
        <h3 style="color: green;margin-left: 106px">{{ list.sysinfo.runtime }}</h3>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.circle-progress-wrapper {
  position: relative;
  width: 80px; /* 圆形进度条容器的宽度 */
  height: 80px; /* 圆形进度条容器的高度 */
  border-radius: 50%; /* 圆形进度条容器的圆角效果 */
  background-color: #f0f0f0; /* 圆形进度条底色 */
  overflow: hidden; /* 隐藏超出进度条宽度的部分 */
}

.circle-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%; /* 圆形进度条的圆角效果 */
  background-color: #007bff; /* 圆形进度条颜色 */
  transform-origin: center center;
  transition: transform 0.3s ease-in-out; /* 圆形进度条过渡动画效果 */
}

.card-panel-num {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px; /* 数字的字体大小 */
  color: #000; /* 数字的颜色 */
}
</style>

<script>
import { indexList } from '@/api/remote-search'

export default {
  components: {
  },
  data() {
    return {
      list: {
        task_cnt: 0,
        site_cnt: 0,
        domain_cnt: 0,
        vul_cnt: 0,
        cpu: 0,
        memory: 0,
        disk: 0
      },
      menmList: {
        pid: 0,
        name: ''
      }
    }
  },
  created() {
    this.indxData()
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    indxData() {
      indexList().then(response => {
        this.list = response.data
        this.menmList = response.data.memoryinfo.menm_list
        console.log(response.data.memoryinfo.menm_list)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
