<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style=" {backgroundImage: `url(${a.image})`}"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, toRefs } from "vue";
import axios from "axios";

export default {
  name: "MyPage-Component",
  props:{
    one: Number,
  },
  setup(props) {
    //ref() 함수 사용해서 변수 선언.
    let follower = ref([]);

    let {one} = toRefs(props);
    console.log(one.value);


    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    console.log(follower.value);

    return { follower };
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
</style>