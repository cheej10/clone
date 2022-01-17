<template>
  <Modal v-if="showModal" @close="closeModal">
    <h2 slot="header">Inflearn</h2>
    <div slot="body">
      <Input type="email" v-model="userInfo.email" placeholder="이메일"></Input>
      <Input
        inputType="password"
        :type="passwordType"
        v-model="userInfo.password"
        placeholder="비밀번호"
        autocomplete="new-password"
        @clickIcon="togglePWIcon"
        :showPW="showPW"
      ></Input>
      <Button text="로그인" @click="welcome"></Button>
      <ul class="helpMenu">
        <li><a href="#">비밀번호 찾기</a></li>
        <li>
          <router-link to="/signup" @click.native="closeModal"
            >회원가입
          </router-link>
        </li>
      </ul>
    </div>
  </Modal>
</template>

<script>
import Modal from '../components/common/Modal.vue';
import Input from './Input.vue';
import Button from './Button.vue';
import checkBlank from './mixins/checkBlank';
import togglePWIcon from './mixins/togglePWIcon';

export default {
  components: {
    Modal,
    Input,
    Button,
  },
  props: {
    showModal: Boolean,
  },
  mixins: [checkBlank, togglePWIcon],
  data() {
    return {
      userInfo: {
        email: '',
        password: '',
      },
      showPW: false,
      passwordType: 'password',
    };
  },
  methods: {
    welcome() {
      if (this.checkBlank()) {
        alert(`${this.userInfo.email}님 환영합니다!`);
        this.closeModal();
      }
    },
    closeModal() {
      this.clearInput();
      this.$emit('closeModal', !this.showModal);
    },
    clearInput() {
      this.userInfo.email = '';
      this.userInfo.password = '';
    },
  },
};
</script>

<style scoped>
.helpMenu {
  display: flex;
  justify-content: center;
  font-size: 12px;
}
.helpMenu > li > a {
  color: rgb(95, 95, 95);
  padding: 8px;
}
.helpMenu > li::after {
  content: 'l';
}
.helpMenu > li:last-child::after {
  content: '';
}
</style>
