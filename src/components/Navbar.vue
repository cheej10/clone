<template>
  <nav class="navbar">
    <div class="btnContainer">
      <button class="loginBtn" @click="showModal = true">로그인</button>
      <LoginForm :showModal="showModal" @closeModal="closeModal"></LoginForm>
      <router-link to="/signup">
        <button class="signupBtn">회원가입</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal(value) {
      this.showModal = value;
    },
  },
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.navbar {
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: -2px -2px 5px 0px;
}
.btnContainer {
  width: 150px;
  display: flex;
  justify-content: space-between;
}
.loginBtn {
  border: 1px solid rgb(209, 209, 209);
  border-radius: 5px;
  width: 60px;
  height: 30px;
}
.signupBtn {
  border: 1px solid rgb(209, 209, 209);
  border-radius: 5px;
  width: 80px;
  height: 30px;
  background-color: rgb(255, 124, 124);
  color: white;
}
</style>
