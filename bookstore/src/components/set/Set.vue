<template>
  <div class="set_wrapper">
    <div class="tab_bar">
      <span>
        <i class="fa fa-arrow-left return"></i>
      </span>
      <span class="tab_bar_title">设置</span>
    </div>
    <div class="set_list_wrapper">
      <ul class="set_list_box">
        <li class="set_list" v-for="item in set_list" :key="item">
          <span class="set_list_title">{{item.title}}</span>
          <span class="set_list_arrowright" v-if="showArrow">{{item.arrowright}}</span>
          <span class="message_remind" v-if="showArrow">{{item.arrowright}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      set_list: [
        {
          title: "查看账户",
          arrowright: ">"
        },
        {
          title: "个人资料",
          arrowright: ">"
        },
        {
          title: "消息提醒",
          arrowright: ">"
        },
        {
          title: "清理缓存",
          arrowright: "128MB  >"
        },
        {
          title: "帮助中心",
          arrowright: ">"
        },
        {
          title: "关于我们",
          arrowright: ">"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.set_wrapper {
      color: #ffffff;
  background: #21272e;
  padding-left: 50px;
  box-sizing: border-box;
}
.tab_bar {
  height: 80px;
  line-height: 80px;

  position: relative;
  .return {
    font-size: 44px;
  }
  .tab_bar_title {
    width: 100px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 44px;
  }
}

.set_list_wrapper {
  .set_list {
    display: flex;
    justify-content: space-between;
    height: 135px;
    font-size: 36px;
    line-height: 135px;
    border-bottom: 1px solid #333c47;
  }
  .set_list_arrowright {
    margin-right: 45px;
  }
}
</style>