<template>
	<button class="button_elem" @click="$emit('onClick')">
		{{ buttonText }}
	</button>
</template>

<script>
export default {
	props: {
		buttonText: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped>
.button_elem {
	height: 48px;
	width: 100%;
	border-color: #00c471;
	font-weight: 700;
	background-color: #00c471;
	color: #fff;
	line-height: 1.47;
	font-size: 15px;
	letter-spacing: -0.3px;
	margin-top: 16px;
	margin-bottom: 12px;
	border-radius: 4px;
}
</style>
