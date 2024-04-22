<template>

  <transition name="fade">
    <Modal @closeModal="modalState = false" :info="changedInfo" :clickValue="clickValue" :modalState="modalState"/>
  </transition>

  <div class="menu">
    <a v-for="(m, i) in menu" :key="i"> {{ m }} </a>
  </div>

  <Discount v-if="showDiscount == true"/>

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>
  <button @click="priceRevSort">가격역순정렬</button>
  <button @click="nameSort">이름순정렬</button>

  <Card @openModal="modalState = true; clickValue = $event" :info="changedInfo[i]" v-for="(d, i) in changedInfo" :key="i"/>
  

  <!-- <div v-for="(d, i) in info" :key="i">
    <img class="room-img" :src="d.image">
    <h4 @click="modalState = true; clickValue = i;">{{ d.title }}</h4>
    <p>{{ d.price }}</p>
  </div> -->

  <!-- <div>
    <img class="room-img" src="./assets/room0.jpg">
    <h4 @click="modalStatus = true">{{ products[0] }}</h4>
    <p>{{ price[0] }} 만원</p>
    <button @click="increase(0)">허위매물신고</button> <span>신고수: {{ reports[0] }}</span>
  </div>
  <div>
    <img class="room-img" src="./assets/room1.jpg">
    <h4 @click="modalStatus = true">{{ products[1] }}</h4>
    <p>{{ price[1] }} 만원</p>
    <button @click="increase(1)">허위매물신고</button> <span>신고수: {{ reports[1] }}</span>
  </div>
  <div>
    <img class="room-img" src="./assets/room2.jpg">
    <h4 @click="modalStatus = true">{{ products[2] }}</h4>
    <p>{{ price[2] }} 만원</p>
    <button @click="increase(2)">허위매물신고</button> <span>신고수: {{ reports[2] }}</span>
  </div> -->
</template>

<script>

import info from './assets/oneroom.js';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  data(){
    return {
      showDiscount: true,
      originalInfo: [...info],
      clickValue: 0,
      changedInfo: info,
      modalState: false,
      reports: [0, 0, 0],
      menu: ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price: [100, 50, 78],
    }
  },
  methods: {
    increase(i) {
      this.reports[i] += 1;
    },
    priceSort() {
      this.changedInfo.sort(function(a,b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.changedInfo = [...this.originalInfo];
    },
    priceRevSort() {
      this.changedInfo.sort(function(a,b) {
        return b.price - a.price;
      });
    },
    nameSort() {
      this.changedInfo.sort((function(a,b) {
        const x = a.title.toLowerCase();
        const y = b.title.toLowerCase();
        if(x < y) {
          return -1;
        }
        if(x > y) {
          return 1;
        }
        return 0;
      }));
    },
  },
  // mounted() {
  //   // mount 된 후,
  //   setTimeout(() => {
  //     this.showDiscount = false;
  //   }, 2000);
  // },
  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  }
}
</script>

<style>

/** 
.fade-enter-from
.fade-enter-acive
.fade-enter-to
 */
.fade-enter-from {
  /* opacity: 0; */
  transform: translateY(-1000px);
  
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  /* opacity: 1; */
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

body {
  margin: 0
}

div {
  box-sizing: border-box;
}

.room-img {
  width: 100%;
  margin-top:40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
