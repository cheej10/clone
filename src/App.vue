<template>
	<div id="app">
		<Nav />
		<router-view />
	</div>
</template>

<script>
import Nav from '@/components/Nav';
export default {
	components: {
		Nav,
	},
};
</script>

<style scoped>
@import url('./assets/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

#app {
	margin: 0;
	padding: 0;
	font-family: 'Noto Sans KR', sans-serif;
}
</style>
