<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountPercent }}% 할인</h4>
  </div>
</template>

<script>
export default {
  // name은 2단어 이상으로 작성하기.
  name: 'Discount-Component',
  data() {
    return {
      discountPercent: 30,
    }
  },
  created() {
    // html 생성하고,
    setInterval(() => {
      this.discountPercent -= 1;
    }, 1000);
  },
  props: {
  },    
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>