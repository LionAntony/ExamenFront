const Timeout = (ms, promise) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			reject({ err: 'timeout' });
		}, ms);
		promise.then(resolve, reject);
	});
export default Timeout;
