<template>
	<!-- 디테일 페이지 -->
	<section>
		<article class="flex-box">
			<video :src="list.video" controls muted></video>
			<div class="thum">
				<div class="flex-box space-between center" id="title-box">
					<h3 id="title">{{ list.title }}</h3>
					<small id="date">{{ list.date }}</small>
				</div>
				<p v-html="list.discription" id="discription"></p>
				<div id="note">
					<mark>✍🏻 NOTE</mark>
					<p v-if="list.note" class="note">{{ list.note }}</p>
					<p v-else class="note">콘턴츠가 없음.</p>
				</div>
			</div>
		</article>
		<article id="code-view">
			<h2 id="code-view-title">CODE VIEW</h2>
			<template v-for="image in list.image" :key="image">
				<img :src="image" alt="" />
			</template>
		</article>
	</section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { getDataById } from '@/api/index.js';
// --------------------------------------------------------------------
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}/src/api/data.json`;
// --------------------------------------------------------------------
const list = ref({});
const route = useRoute();

const fetchedList = async () => {
	const data = await getDataById(parseInt(route.params.id), URL);
	list.value = data;
};
fetchedList();
</script>

<style scoped>
section {
	width: 70%;
	margin: 0 auto;
}
video {
	width: 50%;
}
.thum {
	width: 50%;
	padding: 1rem;
}
#title-box {
	padding-bottom: 4rem;
}
#title {
	font-size: 1.4rem;
}
#date {
	font-size: 0.8rem;
	color: #333;
}
#discription {
	font-size: 1rem;
	border-top: 2px solid #ccc;
	border-bottom: 2px solid #ccc;
	padding: 2rem 0rem;
	font-weight: 200;
}
#note {
	padding-top: 4rem;
}
mark {
	font-size: 1.3rem;
	padding: 0 1rem;
}
.note {
	margin-top: 2.5rem;
	font-size: 1rem;
	font-weight: 200;
}

/*  */
/*  */
#code-view {
	text-align: center;
}
#code-view-title {
	font-size: 1.5rem;
	margin: 5rem 0 5rem 0;
}
#code-view-title:hover {
	text-decoration: underline;
}
</style>
