<template>
	<div class="card">
		<video :src="video"></video>
		<span>{{ title }}</span>
	</div>
</template>

<script setup>
defineProps({
	video: String,
	title: String,
});
</script>

<style scoped>
.card {
	width: 25%;
	text-align: center;
	padding: 0.3rem;
	border-right: 1px solid #000;
	border-bottom: 1px solid #000;
	cursor: pointer;
}
video {
	width: 100%;
	display: block;
}
span {
	display: inline-block;
	padding-top: 0.3rem;
	font-weight: 200;
	font-size: 1.3rem;
}
</style>
