<template>
  <div class="block" style="height: 450px; overflow: hidden;">
    <div class="timeline-container">
      <el-timeline>
        <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
          <el-card>
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  animation: scrollTimeline linear infinite;
  animation-duration: 30s; /* 滚动的总时长 */
}

@keyframes scrollTimeline {
  from {
    transform: translateY(0); /* 初始位置 */
  }
  to {
    transform: translateY(-100%); /* 滚动距离，根据实际需求调整 */
  }
}
</style>
<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2023/4/20',
          title: 'yapi-rce->dysrc',
          content: '已通过'
        },
        {
          timestamp: '2023/4/20',
          title: '信息泄露->dysrc',
          content: '已驳回，非我司资产'
        },
        {
          timestamp: '2023/4/20',
          title: '信息泄露->dysrc',
          content: '已驳回，非我司资产'
        },
        {
          timestamp: '2023/4/20',
          title: '信息泄露->dysrc',
          content: '已驳回，非我司资产'
        },
        {
          timestamp: '2023/4/20',
          title: '信息泄露->dysrc',
          content: '已驳回，非我司资产'
        },
        {
          timestamp: '2023/4/20',
          title: '信息泄露->dysrc',
          content: '已驳回，非我司资产'
        },
        {
          timestamp: '2023/4/20',
          title: '信息泄露->dysrc',
          content: '已驳回，非我司资产'
        },
        {
          timestamp: '2023/4/20',
          title: '信息泄露->dysrc',
          content: '已驳回，非我司资产'
        }
      ]
    }
  },
}
</script>
