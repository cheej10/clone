<template>
  <div>
    <label :for="labelText">{{ labelText }}</label>
    <div class="input_box">
      <input
        :type="type"
        :id="labelText"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
      />
      <span
        class="icon_box"
        v-if="inputType === 'password'"
        @click="$emit('clickIcon')"
      >
        <i class="far fa-eye" v-if="!showPW"></i>
        <i class="far fa-eye-slash" v-else></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: '',
    },
    showPW: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.input_box > input {
  box-sizing: border-box;
  margin: 10px 0;
  padding: 0 10px;
  width: 300px;
  height: 40px;
  border: 0;
  outline: 1px solid rgb(206, 206, 206);
  border-radius: 5px;
}
.input_box > input:focus {
  outline: 1px solid #00c471;
}
.input_box > input::placeholder {
  color: rgb(228, 228, 228);
}
.input_box {
  position: relative;
}
.icon_box {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
}
</style>
