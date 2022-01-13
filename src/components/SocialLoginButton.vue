<template>
	<button class="social_login_button" :class="src">
		<img :src="require(`@/assets/icons/social/${this.src}.svg`)" alt="" />
	</button>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped>
.social_login_button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	border: 0;
	border-radius: 4px;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
	cursor: pointer;
}

.social_login_button.kakao {
	background-color: #fae500;
}

.social_login_button.google {
	background-color: #f8f8f8;
}
</style>
