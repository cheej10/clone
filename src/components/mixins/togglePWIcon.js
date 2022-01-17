export default {
  methods: {
    togglePWIcon() {
      this.showPW = !this.showPW;
      this.passwordType = this.showPW ? 'text' : 'password';
    },
  },
};
