<template>
	<div class="input_component">
		<label :for="labelText" class="label_elem">
			{{ labelText }}
		</label>
		<div class="input_elem_wrapper">
			<input
				:type="type"
				:id="labelText"
				:value="value"
				@input="input"
				:name="name"
				class="input_elem"
				:placeholder="placeholder"
				:autocomplete="autocomplete"
			/>
			<span
				v-if="inputType === 'password'"
				class="eye_icon"
				@click="$emit('eyeClick')"
			>
				<img
					v-if="showPasswordStatus"
					src="@/assets/icons/eye.svg"
					alt="eye icon"
				/>
				<img v-else src="@/assets/icons/close-eye.svg" alt="eye icon" />
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: '',
		},
		inputType: {
			type: String,
			default: 'text',
		},
		labelText: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		autocomplete: {
			type: String,
			default: '',
		},
		showPasswordStatus: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		input(e) {
			this.$emit('input', e.target.value);
		},
	},
};
</script>

<style scoped>
.input_component {
	display: flex;
	flex-direction: column;
	width: 320px;
	margin-bottom: 1rem;
}

.input_elem_wrapper {
	width: 100%;
	position: relative;
}

.label_elem {
	line-height: 1.43;
	letter-spacing: -0.3px;
	font-size: 14px;
	font-weight: 400;
	color: #3e4042;
	width: 100%;
}

.input_elem {
	width: 320px;
	border: 1px solid #dee2e6;
	padding: 13px 12px;
	border-radius: 4px;
	height: 48px;
	margin-top: 4px;
	box-sizing: inherit;
	outline: none;
	font-size: 15px;
	line-height: 22.05px;
}

.input_elem:focus {
	border: 1px solid #00c471;
}

.input_elem::placeholder {
	color: #dee2e6;
}

.eye_icon {
	position: absolute;
	top: 50%;
	right: 12px;
	width: 16px;
	height: 16px;
	transform: translate(0, -50%);
	cursor: pointer;
}
</style>
