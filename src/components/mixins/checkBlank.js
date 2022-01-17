export default {
  methods: {
    checkBlank() {
      for (let i in this.userInfo) {
        if (this.userInfo[i] === '') {
          alert('정보를 모두 입력해주세요.');
          return false;
        }
      }
      return true;
    },
  },
};
