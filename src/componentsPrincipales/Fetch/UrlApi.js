// import GetCookie from './GetCookie';
/**
 * Guardaremos el url de la api de la aplicación para usarlo de manera general
 * @param {string} ToDir Es la dirección a donde va ir por parte de la api.
 * @param {string} MoreParameters Son parametros adicionales que puede llevar la petición
 * @return Regresa la url ya compuesta con el token y los demás parametros.
 */
function UrlApi(ToDir='',MoreParameters='') {
	let parameters='';
	if(MoreParameters.length!==0) {
		parameters=`${MoreParameters}`;
	}
	let UrlApi=`http://localhost:1338/${ToDir}?${parameters}`;
	// let UrlApi=`http://http://3.131.94.104:1338/${ToDir}?${parameters}`;
	return UrlApi;
}

export default UrlApi;
