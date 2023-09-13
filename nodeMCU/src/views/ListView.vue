<template>
	<div>
		<section id="card-warp">
			list : {{ lists }}
			<VideoCard
				v-for="list in lists"
				:key="list.id"
				:video="list.video"
				:title="list.title"
				@click="detailView(list.id)"
			/>
		</section>
	</div>
	<router-view></router-view>
</template>

<script setup>
import VideoCard from '@/components/video/VideoCard.vue';
import { getDataList } from '@/api/index.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const lists = ref({});

const fetchedList = async () => {
	const { data } = await getDataList(URL);
	try {
		lists.value = data;
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
fetchedList();

const router = useRouter();
const detailView = id => {
	router.push({
		name: 'listDetail',
		params: { id },
	});
};
</script>

<style scoped>
#card-warp {
	display: flex;
	border-top: 1px solid #000;
	border-left: 1px solid #000;
}
</style>
