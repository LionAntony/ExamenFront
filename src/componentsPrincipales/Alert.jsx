import React from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../moduloClientes/node_modules/react-toastify/dist/ReactToastify.css';

/**
 * @description Contenedor de Alerts
 * @example import Contenedor,{Alert} from '...'
 * @example <Contenedor />
 */
const Contenedor=() => {
  return <ToastContainer
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />

};
/**
 * 
 * @param {*String} tipo 'info','success','warn','error','toast',''
 * @param {*String} msj 'Mensaje del Alert', ''
 * @descriptionSi se envia sin parametros manda un mensaje de prueba
 * @example Alert(); 
 * @example Alert('info','Hola');
 * @example Alert('success',Hola);
 * 
 * @example Alert('warn','Hola');
 * @example Alert('error',Hola);
 * @example Alert('toast',Hola);
 */
export const Alert=(tipo,msj) => {
  let Tipo='';
  if(tipo) {Tipo=tipo.trim()}

  switch(Tipo) {
    case 'info':
      toast.info(msj,{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case 'success':
      toast.success(msj,{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case 'warn':
      toast.warn(msj,{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case 'error':
      toast.error(msj,{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case 'toast':
      toast(msj,{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      break;
    default:
      toast('AlertaDemo',{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
  }
};


export default Contenedor;

