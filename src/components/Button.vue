<template>
  <button class="btn" @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.btn {
  background-color: #00c471;
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
}
</style>
