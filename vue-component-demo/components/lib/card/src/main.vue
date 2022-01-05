<!--
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-31 08:30:40
 * @LastEditTime: 2022-01-05 08:26:40
 * @FilePath: /vue-component-demo/components/lib/card/src/main.vue
 * @Description: 
-->
<template>
  <div class="m-demo">
    卡片组件
    <img
      :style="width ? { width: width + 'px' } : {}"
      src="https://img.mukewang.com/61c53d57099eba3c12800640.jpg"
      alt="img"
    />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    width: {
      type: Number,
      default: 300,
    },
  },
};
</script>
 
