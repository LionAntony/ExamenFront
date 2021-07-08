import React from 'react';
import classNames from 'classnames';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {InputSwitch} from 'primereact/inputswitch';



const Formulario=({
  Idcat_usuario,
  Nombre,setNombre,
  ApellidoP,setApellidoP,
  ApellidoM,setApellidoM,
  Correo,setCorreo,
  Pass,setPass,
  OpenForm,
  Status,setStatus}) => {


  return (
    <React.Fragment>
      {/* Campo de nombre */}
      <div className="p-field">
        <label >Nombre</label>
        <InputText
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          autoFocus
          className={classNames({'p-invalid': OpenForm&&!Nombre})} />
        {OpenForm&&!Nombre&&<small className="p-invalid">Campo requerido</small>}
      </div>
      {/* Campo de Apellido Paterno */}
      <div className="p-field">
        <label>Apellido Paterno</label>
        <InputText
          value={ApellidoP}
          onChange={(e) => setApellidoP(e.target.value)}
          required
          autoFocus
          className={classNames({'p-invalid': OpenForm&&!ApellidoP})} />
        {OpenForm&&!ApellidoP&&<small className="p-invalid">Campo requerido</small>}
      </div>
      {/* Apellido Materno */}
      <div className="p-field ">
        <label>Apellido Materno</label>
        <InputText
          value={ApellidoM}
          onChange={(e) => setApellidoM(e.target.value)}
          required
          className={classNames({'p-invalid': OpenForm&&!ApellidoM})} />
        {OpenForm&&!ApellidoM&&<small className="p-invalid">Campo requerido</small>}
      </div>


      {/* correo */}
      <div className="p-field">
        <label>Correo</label>
        <InputText
          value={Correo}
          onChange={(e) => setCorreo(e.target.value)}
          autoFocus
          className={classNames({'p-invalid': OpenForm&&!Correo})} />
        {OpenForm&&!Correo&&<small className="p-invalid">Campo requerido</small>}
      </div>
      {/**Contraseña */}

      <div className="p-field">
        <label>{!Idcat_usuario? ('Contraseña'):'Nueva contraseña'}</label>
        <Password onChange={(e) => setPass(e.target.value)} required />
      </div>


      <h5>Estado de Empleado</h5>
      <InputSwitch checked={Status===0? false:true} onChange={(e) => setStatus(e.value? 1:0)} />

    </React.Fragment>
  )

}

export default Formulario;