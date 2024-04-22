<template>
  <div class="black-bg" v-if="modalState == true">
    <div class="white-bg">
      <img class="room-img" :src="info[clickValue].image">
      <h4>{{ info[clickValue].title }}</h4>
      <p>{{ info[clickValue].content }}</p>
      <input v-model="month">
      
      <p>{{ month }}개월 선택함 : {{ month * info[clickValue].price }} 원</p>  
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Modal-Component',
    data() {
      return {
        month: 1,
      }
    },
    watch: {
      month(a) {
        if(a > 12){
          alert('13이상 입력하지 마셈');
          this.month = 1;
        }
        else if(!(typeof(a) != 'number')){
          alert('숫자만 입력하라');
          this.month = 1;
        }
      },
    },
    props: {
        info: Array,
        clickValue: Number,
        modalState: Boolean,
    },
    components: {
    }
}
</script>

<style>
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>