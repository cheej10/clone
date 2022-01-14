<template>
	<div class="terms_wrapper">
		<span class="terms_policy">
			가입 시, 인프런의
			<a href="#" class="link">이용약관</a>,
			<a href="#" class="link">개인정보취급방침</a>
			에 동의합니다.
		</span>
		<p class="terms_policy_allow">
			<input
				id="policy"
				type="checkbox"
				:checked="value"
				@change="policyTermChecked"
			/>
			<label for="policy">인프런의 할인 및 유용한 소식을 받아볼래요.</label>
		</p>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		policyTermChecked(e) {
			this.$emit('policyTermChecked', e.target.checked);
		},
	},
};
</script>

<style scoped>
.terms_wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.terms_policy {
	line-height: 1.5;
	letter-spacing: -0.3px;
	font-size: 12px;
	font-weight: 400;
	margin-bottom: 6px;
	color: #858a8d;
}

.terms_policy_allow {
	line-height: 1.5;
	letter-spacing: -0.3px;
	font-size: 12px;
	font-weight: 400;
	margin-left: 4px;
	color: #858a8d;
	display: flex;
}

.link {
	text-decoration: none;
	color: #1964d5;
}

.link:visited {
	color: #1964d5;
}
</style>
