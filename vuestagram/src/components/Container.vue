<template>
  <div v-if="step == 0">
    <Post :info="Feed[i]" :idx="i" v-for="(a, i) in Feed" :key="i" />
  </div>
  
  <div v-if="step == 1">
    <!-- 필터선택페이지 -->
    <div :class="selectFilter + ' upload-image'" :style=" {backgroundImage: `url(${imageUrl})`}"></div>
    <div class="filters">
      <FilterBox v-for="(filter, i) in filterList" :key="i" :filterInfo="filter" :imageUrl="imageUrl">
        <span>{{ filter }}</span>
      </FilterBox>
    </div>
  </div>

  <div v-if="step == 2">
    <!-- 글작성페이지 -->
    <div :class="selectFilter + ' upload-image'" :style=" {backgroundImage: `url(${imageUrl})`}"></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('editContent', $event.target.value)"></textarea>
    </div>
  </div>

  <div v-if="step == 3">
    <MyPage :one="1"/>
  </div>


</template>

<script>
import Post from "./Post.vue";
import MyPage from "./MyPage.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container-Component",
  data() {
    return {
      filterList: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  components: {
    Post: Post,
    MyPage: MyPage,
    FilterBox: FilterBox,
  },
  props: {
    Feed: Array,
    step: Number,
    imageUrl: String,
    selectFilter: String,
  },
  methods: {
    
  },
};
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>