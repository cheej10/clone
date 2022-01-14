<template>
  <div class="agree">
    <p>가입 시, 인프런의 이용약관, 개인정보취급방침 에 동의합니다.</p>
    <div class="checkBox">
      <input type="checkbox" />
      <span>인프런의 할인 및 유용한 소식을 받아볼래요.</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.agree {
  margin: 10px;
  text-align: center;
  font-size: 12px;
}
.checkBox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}
</style>
