import axios from 'axios';

// --------------------------------------------------------------------
// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
// const URL = `${PROXY}/src/api/data.json`;
// --------------------------------------------------------------------

function getDataList() {
	try {
		const response = axios.get('./api/data.json');
		// console.log(PROXY, URL);
		// console.log(URL);
		return response;
	} catch (err) {
		alert(err);
	}
}

async function getDataById(id) {
	const { data } = await getDataList();
	return data.find(item => item.id === id);
}

export { getDataList, getDataById };
