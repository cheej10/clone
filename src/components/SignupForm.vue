<template>
  <form @submit.prevent class="signupForm">
    <div class="title">
      <h2>회원가입</h2>
      <p>인프런에서 가치를 높이세요</p>
    </div>
    <Input
      labelText="이메일"
      type="email"
      v-model="userInfo.email"
      placeholder="example@inflearn.com"
    ></Input>
    <Input
      labelText="이메일 확인"
      type="email"
      v-model="userInfo.emailCheck"
      placeholder="example@inflearn.com"
    ></Input>
    <Input
      labelText="비밀번호"
      inputType="password"
      :type="passwordType"
      v-model="userInfo.password"
      placeholder="******"
      autocomplete="new-password"
      @clickIcon="togglePWIcon"
      :showPW="showPW"
    ></Input>
    <Input
      labelText="비밀번호 확인"
      inputType="password"
      :type="passwordCheckType"
      v-model="userInfo.passwordCheck"
      placeholder="******"
      autocomplete="new-password"
      @clickIcon="toggleCheckIcon"
      :showPW="showPWCheck"
    ></Input>
    <Button text="가입하기" @click="welcome"></Button>
    <Footer @receiveMailCheck="receiveMailCheck"></Footer>
  </form>
</template>

<script>
import Input from './Input.vue';
import Footer from './Footer.vue';
import Button from './Button.vue';
import checkBlank from './mixins/checkBlank';
import togglePWIcon from './mixins/togglePWIcon';

export default {
  components: {
    Input,
    Footer,
    Button,
  },
  mixins: [checkBlank, togglePWIcon],
  data() {
    return {
      userInfo: {
        email: '',
        emailCheck: '',
        password: '',
        passwordCheck: '',
        receiveMailCheck: false,
      },
      showPW: false,
      showPWCheck: false,
      passwordType: 'password',
      passwordCheckType: 'password',
    };
  },
  methods: {
    welcome() {
      if (this.checkBlank() && this.checkUserInfo()) {
        alert(`${this.userInfo.email}님 환영합니다!`);
        this.$router.push('/main');
      }
    },
    checkUserInfo() {
      const user = this.userInfo;
      if (user.email !== user.emailCheck) {
        alert('이메일이 일치하지 않습니다.');
        return false;
      }
      if (user.password !== user.passwordCheck) {
        alert('비밀번호가 일치하지 않습니다.');
        return false;
      }
      return true;
    },
    toggleCheckIcon() {
      this.showPWCheck = !this.showPWCheck;
      this.passwordCheckType = this.showPWCheck ? 'text' : 'password';
    },
    receiveMailCheck(checkValue) {
      this.receiveMailCheck = checkValue;
    },
  },
};
</script>

<style scoped>
.signupForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin: 20px 0;
  width: 300px;
  text-align: left;
}
</style>
