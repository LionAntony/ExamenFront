import UrlApi from './UrlApi.js';
import axios from 'axios';
import GetCookie from './GetCookie.js';
function FetchN(dir,options) {
	return new Promise((resolve,reject) => {
		if(options && options.body){
			options.data = options.body;
			delete options.body;
			options.method = options.method.toLowerCase();
		}
		if(!options) {
			options = {};
			options.method = 'get';
		}
		axios({
			url:UrlApi(dir),
			headers : {'Authorization': 'Bearer ' + GetCookie()},
			...options
		}).then(result=>{resolve(result.data)}).catch(err=>reject(err));
	});
}
export default FetchN;
