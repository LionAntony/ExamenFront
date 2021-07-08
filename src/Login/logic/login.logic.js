import Fetch from '../../componentsPrincipales/Fetch/FetchN.js';
import GetCookie from '../../componentsPrincipales/Fetch/GetCookie.js';
/**
 * 
 * @param {string} email
 * @param {string} Password 
 */
function LogicOfLogin(email="",password="",setErr) {
  const basicAuth=btoa(`${email}:${password}`);
  console.log(basicAuth)
  Fetch('api/auth/sign-in',{method: 'post',auth: {username: email,password}}).then(response => {
    if(response.token) {
      if(GetCookie().length>0) {
        document.cookie="_userLog= ;expires = Thu, 01 Jan 1970 00:00:00 GMT"
      }
      let expires=new Date();
      expires.setTime(expires.getTime()+86400000);
      let cookie=`_userLog=${response.token
        };expires=${expires.toUTCString()};path=/`;
      document.cookie=cookie;
      document.location.reload();
    } else {
      setErr(true);
    }
  }).catch(err => {
    console.log(err);
    setErr(true);
  })
}
export default LogicOfLogin;