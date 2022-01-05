/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-31 08:32:17
 * @LastEditTime: 2022-01-05 08:18:05
 * @FilePath: /vue-component-demo/components/lib/card/index.js
 * @Description:
 */
import Card from "./src/main.vue";

Card.install = (vue) => {
  vue.component(Card.name, Card);
};

export default Card;
