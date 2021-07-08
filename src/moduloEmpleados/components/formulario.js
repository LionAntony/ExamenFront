import React,{useState,useEffect} from 'react';
import classNames from 'classnames';
import {InputText} from 'primereact/inputtext';
import {InputMask} from 'primereact/inputmask';
import {Calendar} from 'primereact/calendar';
import {Dropdown} from 'primereact/dropdown';
import {addLocale} from 'primereact/api';
import Fetch from '../../componentsPrincipales/Fetch/FetchN.js'
import {Card} from 'primereact/card';
import Contenedor,{Alert} from '../../componentsPrincipales/Alert.jsx'


const Formulario=({
  Idcat_empleados,setIdcat_empleados,
  Nombre,setNombre,
  ApellidoP,setApellidoP,
  ApellidoM,setApellidoM,
  FechaNacimiento,setFechaNacimiento,
  Correo,setCorreo,
  Genero,setGenero,
  Telefono,setTelefono,
  Celular,setCelular,
  FechaIngreso,setFechaIngreso,
  Departamento,setDepartamento,
  OpenForm,setOpenForm}) => {

  const [CatDep,setCatDep]=useState([]);

  useEffect(() => {
    fungetCatDep()
  },[]);

  const fungetCatDep=() => {
    Fetch('departamentos/')
      .then(response => {
        let newData=[]
        response.data[0].forEach(element => {
          newData.push({
            "name": `${element.nombreEmpresa}-${element.nombreDepartamento}`,
            "code": element.idcat_departamento
          })
        })

        setCatDep(newData)
      }).catch(err => {
        console.log(err);
        Alert('warn',err);
      });
  }
  addLocale('es',{
    firstDayOfWeek: 1,
    dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
    dayNamesShort: ['dom','lun','mar','mié','jue','vie','sáb'],
    dayNamesMin: ['D','L','M','X','J','V','S'],
    monthNames: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    monthNamesShort: ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],
    today: 'Hoy',
    clear: 'Claro'
  });


  return (
    <React.Fragment>
      <Contenedor />
      <Card className="p-shadow-24" >
        {/* Departamento */}
        <div className="p-field">
          <label><h4>Departamento:</h4></label>
          <Dropdown value={Departamento} options={CatDep} onChange={(e) => setDepartamento(e.value)} optionLabel="name" placeholder="Selecciona un Departamento" />
        </div>
        {/* Campo de nombre */}
        <div className="p-field">
          <label > <h4>Nombre:</h4></label>
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
          <label><h4>Apellido Paterno:</h4></label>
          <InputText
            value={ApellidoP}
            onChange={(e) => setApellidoP(e.target.value)}
            required
            autoFocus
            className={classNames({'p-invalid': OpenForm&&!ApellidoP})} />
          {OpenForm&&!ApellidoP&&<small className="p-invalid">Campo requerido</small>}
        </div>
        {/* Apellido Materno */}
        <div className="p-field">
          <label><h4>Apellido Materno:</h4></label>
          <InputText
            value={ApellidoM}
            onChange={(e) => setApellidoM(e.target.value)}
            required
            className={classNames({'p-invalid': OpenForm&&!ApellidoM})} />
          {OpenForm&&!ApellidoM&&<small className="p-invalid">Campo requerido</small>}
        </div>
        {/* Fecha de Nacimiento */}
        <div className="p-field">
          <label><h4>Fecha de Nacimiento:</h4></label>

          <Calendar id="basic" dateFormat="yy/mm/dd" value={FechaNacimiento} locale="es" onChange={(e) => setFechaNacimiento(e.value)} />
        </div>
        {/* correo */}
        <div className="p-field">
          <label><h4>Correo:</h4></label>
          <InputText
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
            autoFocus
            className={classNames({'p-invalid': OpenForm&&!Correo})} />
          {OpenForm&&!Correo&&<small className="p-invalid">Campo requerido</small>}
        </div>
        {/* Genero */}
        <div className="p-field">
          <label><h4>Genero:</h4></label>
          <InputText
            value={Genero}
            onChange={(e) => setGenero(e.target.value)}
            autoFocus
            className={classNames({'p-invalid': OpenForm&&!Genero})} />
          {OpenForm&&!Genero&&<small className="p-invalid">Campo requerido</small>}
        </div>
        {/* Telefono */}
        <div className="p-field">
          <label><h4>Telefono:</h4></label>
          <InputMask
            mask="(99) 999-99999"
            value={Telefono}
            onChange={(e) => setTelefono(e.target.value)}
            autoFocus
            className={classNames({'p-invalid': OpenForm&&!Telefono})} />
          {OpenForm&&!Telefono&&<small className="p-invalid">Campo requerido</small>}
        </div>
        {/* Celular */}
        <div className="p-field">
          <label><h4>Celular:</h4></label>
          <InputMask
            mask="(99) 999-99999"
            value={Celular}
            onChange={(e) => setCelular(e.target.value)}
            autoFocus
            className={classNames({'p-invalid': OpenForm&&!Celular})} />
          {OpenForm&&!Celular&&<small className="p-invalid">Campo requerido</small>}
        </div>
      </Card>
    </React.Fragment>
  )

}

export default Formulario;