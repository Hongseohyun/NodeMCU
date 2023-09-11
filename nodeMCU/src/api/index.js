import axios from 'axios';

function getDataList() {
	const response = axios.get('/src/api/data.json');
	return response;
}

async function getDataById(id) {
	const { data } = await getDataList();
	return data.find(item => item.id === id);
}

export { getDataList, getDataById };
