<template>
  <!-- <div v-for="(d, i) in info" :key="i">
    <img class="room-img" :src="d.image">
    <h4 @click="modalState = true; clickValue = i;">{{ d.title }}</h4>
    <h4>{{ d.title }}</h4>
    <p>{{ d.price }} 원</p>
  </div> -->

  <div>
    <img class="room-img" :src="info.image">
    <h4 @click="$emit('openModal', info.id)">{{ info.title }}</h4>
    <p>{{ info.price }} 원</p>
  </div>
</template>

<script>
export default {
    name: "Card-Component",
    props: {
      info: Object,
    }
}
</script>

<style>

</style>