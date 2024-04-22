<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step != 3 && step != 0" @click="moveMain">Cancel</li>
      <li v-if="step == 3" @click="moveMain">Back</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 0" @click="follower">팔로워</li>
      <li v-if="step == 1" @click="moveNext">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <p>{{ name }}   {{ age }}    {{ likes }}</p>

  <p>{{ $store.state.more }}</p> -->
  <!-- <Button @click="$store.dispatch('getData')">더보기버튼</Button> -->
  <Container :Feed="Feed" :step="step" :imageUrl="imageUrl" :selectFilter="filter"  @editContent="content = $event"/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <p>{{ now2 }}    {{ counter }}</p>
  <button @click="counter++">버튼</button> -->

</template>

<script>
import Container from "./components/Container.vue";
import feed from "./assets/feed.js";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      Feed: feed,
      count: 0,
      step: 0,
      imageUrl: '',
      content: '',
      filter: '',
      counter: 0,
    };
  },
  mounted() {
    this.emitter.on('fire', (filter) => {
      this.filter = filter;
    });
  },
  components: {
    Container: Container,
  },
  computed: {
    // return은 필수.
    now2() {
      return new Date()
    },
    ...mapState(['name','age', 'likes']),
    ...mapState({ 작명: 'name' }),
  },
  methods: {
    ...mapMutations(['setMore', 'IncreaseAge']),

    moveMain() {
      this.step = 0;
    },
    follower() {
      this.step = 3;
    },
    now() {
      return new Date()
    },
    publish() {
      var post = {
      name: "Roh Declan",
      userImage: "https://picsum.photos/100?random=3",
      postImage: this.imageUrl,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.content,
      filter: this.filter,
    };
      this.Feed.unshift(post);
      this.step = 0;
    },
    moveNext() {
      this.step += 1;
    },
    upload(e) {
      let file = e.target.files;
      this.imageUrl = URL.createObjectURL(file[0]);
      this.step = 1;
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count++}.json`)
        .then((result) => {
          this.Feed.push(result.data);
        })
        .catch((error) => {
          alert(error.message);
          this.count -= 1;
          return error.code;
        });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
