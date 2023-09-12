import axios from 'axios';

function getDataList(url) {
	const response = axios.get(url);
	return response;
}

async function getDataById(id, url) {
	const { data } = await getDataList(url);
	return data.find(item => item.id === id);
}

export { getDataList, getDataById };
