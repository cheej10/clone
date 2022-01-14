<template>
	<h2 class="title_elem">
		{{ titleText }}
	</h2>
</template>

<script>
export default {
	props: {
		titleText: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped>
.title_elem {
	font-weight: 500;
	font-size: 26px;
	color: #000a12;
	text-align: left;
	width: 100%;
}
</style>
