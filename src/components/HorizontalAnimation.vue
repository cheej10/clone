<template>
	<div class="horizontal_animation_wrapper">
		<div ref="messageWrapper" class="horizontal_animation_inner_wrapper">
			<p class="message">{{ message1 }}</p>
			<p class="message">{{ message2 }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			signupMessage: [
				'성장에 목마를 때, 인프런',
				'나의 온라인 사수, 인프런',
				'인프런에서 가치를 높이세요',
				'인프런에서 다양한 기회를 얻으세요',
				'나의 성장을 돕는 IT 실무 지식 플랫폼',
			],
			animationTimer: null,
			messageIndex2: 1,
			messageIndex: 0,
			message1: '',
			message2: '',
		};
	},
	beforeDestroy() {
		clearInterval(this.animationTimer);
		this.animationTimer = null;
	},
	mounted() {
		this.setMessage(this.messageIndex, this.messageIndex2);
		this.startAnimation();
	},
	methods: {
		setMessage(index, index2) {
			this.message1 = this.signupMessage[index];
			this.message2 = this.signupMessage[index2];
		},
		startAnimation() {
			this.setTransform();
			this.animationTimer = setTimeout(() => {
				this.startAnimation();
			}, 3500);
		},
		setTransform() {
			this.$refs.messageWrapper.style.transition = 'transform 1s ease-in-out';
			this.$refs.messageWrapper.style.transform = 'translateX(-100%)';

			setTimeout(() => {
				this.setTransformReverse();
				this.setNextMessage();
				this.setMessage(this.messageIndex, this.messageIndex2);
			}, 1000);
		},
		setNextMessage() {
			this.messageIndex = this.checkIndex(this.messageIndex + 1);
			this.messageIndex2 = this.checkIndex(this.messageIndex2 + 1);
		},
		checkIndex(index) {
			return index > 4 ? 0 : index;
		},
		setTransformReverse() {
			this.$refs.messageWrapper.style.transition = 'none';
			this.$refs.messageWrapper.style.transform = 'translateX(0)';
		},
	},
};
</script>

<style scoped>
.horizontal_animation_wrapper {
	width: 100%;
	margin-bottom: 24px;
	position: relative;
	overflow: hidden;
	margin-top: 2px;
}

.horizontal_animation_inner_wrapper {
	display: flex;
	min-width: 100%;
	max-width: 100%;
}

.message {
	width: 320px;
	flex-shrink: 0;
	min-width: 100%;
	max-width: 100%;
	font-size: 1rem;
	line-height: 1rem;
	color: #000a12;
}
</style>
