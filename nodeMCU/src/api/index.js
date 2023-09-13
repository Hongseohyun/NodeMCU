import axios from 'axios';

function getDataList() {
	try {
		const response = axios.get('');
		return response;
	} catch (err) {
		alert(err);
	}
}

async function getDataById(id) {
	try {
		const { data } = await getDataList();
		return data.find(item => item.id === id);
	} catch (err) {
		console.log(err.message);
	}
}

export { getDataList, getDataById };
