<template>
	<article class="signup_wrapper">
		<Title titleText="회원가입" />
		<horizontal-animation />
		<form @submit.prevent>
			<input-form
				v-model="userData.id"
				label-text="이메일"
				type="email"
				name="id"
				placeholder="example@inflearn.com"
			/>
			<input-form
				v-model="userData.checkId"
				label-text="이메일 확인"
				type="email"
				name="checkId"
				placeholder="example@inflearn.com"
			/>
			<input-form
				v-model="userData.password"
				key="password"
				input-type="password"
				label-text="비밀번호"
				:type="passwordType"
				placeholder="******"
				name="password"
				autocomplete="new-password"
				:showPasswordStatus="showPasswordStatus"
				@eyeClick="showPassword"
			/>
			<input-form
				v-model="userData.checkPassword"
				key="checkPassword"
				input-type="password"
				label-text="비밀번호 확인"
				:type="checkPasswordType"
				placeholder="******"
				name="checkPassword"
				autocomplete="new-password"
				:showPasswordStatus="showCheckPasswordStatus"
				@eyeClick="showCheckPassword"
			/>
			<Button buttonText="가입하기" @onClick="checkValidation" />
			<Terms class="form_footer" @policyTermChecked="policyTermChecked" />
		</form>
		<div class="social_signup_wrapper">
			<hr class="divider" />
			<span class="social_signup_title">간편 회원가입</span>
			<div class="social_signup_buttons">
				<social-login-button
					class="social_login_button_component"
					key="kakao"
					src="kakao"
				/>
				<social-login-button
					class="social_login_button_component"
					key="google"
					src="google"
				/>
				<social-login-button
					class="social_login_button_component"
					key="apple"
					src="apple"
				/>
			</div>
		</div>
	</article>
</template>

<script>
import HorizontalAnimation from '@/components/HorizontalAnimation.vue';
import SocialLoginButton from '@/components/SocialLoginButton';
import InputForm from '@/components/InputForm';
import Button from '@/components/Button';
import Title from '@/components/Title';
import Terms from '@/components/Terms';

export default {
	components: {
		HorizontalAnimation,
		SocialLoginButton,
		InputForm,
		Button,
		Title,
		Terms,
	},
	data() {
		return {
			userData: {
				id: '',
				checkId: '',
				password: '',
				checkPassword: '',
				policyAgreeStatus: true,
			},
			showCheckPasswordStatus: false,
			showPasswordStatus: false,
			checkPasswordType: 'password',
			passwordType: 'password',
		};
	},
	methods: {
		showPassword() {
			this.showPasswordStatus = !this.showPasswordStatus;
			this.passwordType = this.showPasswordStatus ? 'text' : 'password';
		},
		showCheckPassword() {
			this.showCheckPasswordStatus = !this.showCheckPasswordStatus;
			this.checkPasswordType = this.showCheckPasswordStatus
				? 'text'
				: 'password';
		},
		policyTermChecked(checkStatus) {
			this.userData.policyAgreeStatus = checkStatus;
		},
		checkValidation() {
			this.checkUserDataValidation();
			this.checkIdValidation();
		},
		checkUserDataValidation() {
			for (let i in this.userData) {
				if (!this.userData[i].trim()) {
					this.userData[i] = '';
					alert('응답이 필요한 문항입니다.');
					return;
				}
			}
		},
		checkIdValidation() {
			const id = this.userData.id;
			const checkId = this.userData.checkId;
			console.log(id, checkId);

			if (id !== checkId) {
				alert('아이디가 맞지 않습니다.');
				this.userData.checkId = '';
				return;
			}
		},
	},
};
</script>

<style scoped>
.signup_wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 64px auto auto;
	width: 320px;
	height: 676px;
}

.form_footer {
	margin-bottom: 2rem;
}

.social_signup_wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.divider {
	width: 100%;
	height: 1px;
	position: relative;
	background-color: #f1f3f5;
	margin: 0;
	top: 7.5px;
	border: none;
}

.social_signup_title {
	font-weight: 400;
	margin-bottom: 1rem;
	padding: 0 8px;
	font-size: 11px;
	line-height: 16px;
	letter-spacing: -0.3px;
	color: #abb0b5;
	z-index: 1;
	background: #fff;
}

.social_signup_buttons {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.social_login_button_component {
	margin-right: 12px;
}

.social_login_button_component:last-child {
	margin-right: 0;
}
</style>
