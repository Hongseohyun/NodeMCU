import axios from 'axios';

// --------------------------------------------------------------------
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const URL = `${PROXY}/src/api/data.json`;
// --------------------------------------------------------------------

function getDataList() {
	const response = axios.get(URL);
	console.log(PROXY, URL);
	return response;
}

async function getDataById(id) {
	const { data } = await getDataList(URL);
	return data.find(item => item.id === id);
}

export { getDataList, getDataById };
