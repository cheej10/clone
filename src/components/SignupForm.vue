<template>
  <form v-on:submit.prevent>
    <div class="title">
      <h2>회원가입</h2>
      <p>인프런에서 가치를 높이세요</p>
    </div>
    <div class="email">
      <p>이메일</p>
      <input
        type="email"
        v-model="userInfo.email"
        placeholder="example@inflearn.com"
      />
    </div>
    <div class="email_check">
      <p>이메일 확인</p>
      <input
        type="email"
        v-model="userInfo.emailCheck"
        placeholder="example@inflearn.com"
      />
    </div>
    <div class="password">
      <p>비밀번호</p>
      <div class="input-box">
        <input
          type="password"
          v-if="!showPW"
          v-model="userInfo.password"
          placeholder="******"
        />
        <input
          type="text"
          v-else
          v-model="userInfo.password"
          placeholder="******"
        />
        <i class="far fa-eye" v-if="!showPW" v-on:click="togglePWIcon"></i>
        <i class="far fa-eye-slash" v-else v-on:click="togglePWIcon"></i>
      </div>
    </div>
    <div class="password_check">
      <p>비밀번호 확인</p>
      <div class="input-box">
        <input
          type="password"
          v-if="!showPWCheck"
          v-model="userInfo.passwordCheck"
          placeholder="******"
        />
        <input
          type="text"
          v-else
          v-model="userInfo.passwordCheck"
          placeholder="******"
        />
        <i
          class="far fa-eye"
          v-if="!showPWCheck"
          v-on:click="toggleCheckIcon"
        ></i>
        <i class="far fa-eye-slash" v-else v-on:click="toggleCheckIcon"></i>
      </div>
    </div>
    <button class="signupBtn" type="submit" v-on:click="welcome">
      가입하기
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        email: '',
        emailCheck: '',
        password: '',
        passwordCheck: '',
      },
      showPW: false,
      showPWCheck: false,
    };
  },
  methods: {
    welcome() {
      if (this.checkUserInfo(this.userInfo)) {
        alert(`${this.userInfo.email}님 환영합니다!`);
      }
    },
    checkUserInfo(user) {
      for (let i in user) {
        if (user[i] === '') {
          alert('정보를 모두 입력해주세요.');
          return false;
        }
      }
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
    togglePWIcon() {
      this.showPW = !this.showPW;
    },
    toggleCheckIcon() {
      this.showPWCheck = !this.showPWCheck;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  box-sizing: border-box;
  margin: 10px 0;
  padding: 0 10px;
  width: 300px;
  height: 40px;
  border: 0;
  outline: 1px solid rgb(206, 206, 206);
  border-radius: 5px;
}
input:focus {
  outline: 1px solid #00c471;
}
input::placeholder {
  color: rgb(228, 228, 228);
}
.input-box {
  position: relative;
}
.input-box i {
  position: absolute;
  right: 10px;
  top: 22px;
  cursor: pointer;
}
.title {
  margin: 20px 0;
  width: 300px;
  text-align: left;
}
.signupBtn {
  background-color: #00c471;
  color: white;
  font-size: 15px;
  padding: 10px;
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
}
</style>
