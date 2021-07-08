import React,{useState,useEffect} from 'react';
import Contenedor,{Alert} from '../componentsPrincipales/Alert.jsx'
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import TablaL from '../componentsPrincipales/TablaL/Tabla.js'
import Fetch from '../componentsPrincipales/Fetch/FetchN.js'
import Formulario from './components/formulario.js'


const AdminUser=() => {
  const [Data,setData]=useState([])
  const [OpenForm,setOpenForm]=useState(false)
  const [Idcat_usuario,setIdcat_usuario]=useState(false)
  const [Nombre,setNombre]=useState()
  const [ApellidoP,setApellidoP]=useState()
  const [ApellidoM,setApellidoM]=useState()
  const [Correo,setCorreo]=useState()
  const [Pass,setPass]=useState()
  const [Status,setStatus]=useState()
  const [DeleteForm,setDeleteForm]=useState(false)

  const [Columnas]=useState([
    {field: "idcat_usuario",header: "id"},
    {field: "nombre",header: "Nombre"},
    {field: "apellidoP",header: "ApellidoP"},
    {field: "apellidoM",header: "ApellidoM"},
    {field: "correo",header: "Correo"},
    {field: "status",header: "Status"},
  ])

  useEffect(() => {
    funget();
  },[]);

  const clearData=() => {
    setIdcat_usuario(false)
    setNombre()
    setApellidoP()
    setApellidoM()
    setCorreo()
    setPass()
    setStatus(0)
  }

  const validSaveUpdate=() => {
    if(Idcat_usuario) {
      return true;
    } else {
      return false;
    }
  }

  const funget=() => {
    Fetch('usuarios')
      .then(response => {
        setData(response.data[0])
      }).catch(err => {
        console.log(err);
        Alert('warn',err);
      });
  }

  const saveDataEdit=() => {
    if(validSaveUpdate()) {
      funUpdate();
      setOpenForm(false);
      clearData();
    } else {
      funInsert();
      setOpenForm(false);
      clearData();
    }
  }

  const funInsert=() => {
    let formData=new FormData();
    if(
      Nombre!==undefined&&
      ApellidoP!==undefined&&
      ApellidoM!==undefined&&
      Correo!==undefined&&
      Pass!==undefined
    ) {
      formData.append("nombre",Nombre);
      formData.append("apellidoP",ApellidoP);
      formData.append("apellidoM",ApellidoM);
      formData.append("correo",Correo);
      formData.append("password",Pass);
      formData.append("status",1);
      Fetch(`usuarios`,{
        method: "POST",
        body: formData
      }).then(response => {
        if(response.status) {
          funget();
          Alert('success','Nuevo Usuario Registrado');
          clearData()
        } else {
          Alert('warn','Por favor verificar los datos.');
        }
      }).catch(err => {
        console.log(err);
        Alert('warn',err);
      });
    } else {
      Alert('warn','Por favor verificar los datos.');
    }
  };


  const funUpdate=() => {
    if(
      Idcat_usuario!==undefined
    ) {
      let formData=new FormData();
      formData.append("id",Idcat_usuario);

      if(Nombre!==undefined)
        formData.append("nombre",Nombre);
      if(ApellidoP!==undefined)
        formData.append("apellidoP",ApellidoP);
      if(ApellidoM!==undefined)
        formData.append("apellidoM",ApellidoM);
      if(Correo!==undefined)
        formData.append("correo",Correo);
      if(Pass!==undefined)
        formData.append("password",Pass);
      if(Status!==undefined)
        formData.append("status",Status)




      Fetch(`usuarios`,{
        method: "patch",
        body: formData
      }).then(response => {
        if(response.status) {
          funget();
          Alert('success','Informacion Actualizada');
        } else {
          Alert('warn',"Hubo un error en tu información. Por favor verificar.")
        }
      }).catch(err => {
        console.log(err);
        Alert('warn',"Hubo un error en tu información. Por favor verificar.")
      });
    }
  };

  const funDeleted=() => {
    if(Idcat_usuario!==undefined) {
      Fetch(`usuarios/${Idcat_usuario}`,{
        method: "DELETE"
      }).then(response => {
        if(response.status) {
          funget();
          Alert('success','Registro Eliminado!!!');
        }
      }).catch(err => {
        console.log(err);
        Alert('warn',err);
      });
    }
  };

  const DialogFooter=(
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={() => {
          clearData()
          setOpenForm(false)
        }
        }
      />
      <Button
        label="Guardar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => saveDataEdit()}
      />
    </>
  );

  const deleteDialogFooter=(
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={() => {setDeleteForm(false)}}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => {
          funDeleted()
          funget()
          setDeleteForm(false)
        }}
      />
    </>
  );


  const DataEdit=(rowData) => {
    if(rowData.idcat_usuario)
      setIdcat_usuario(rowData.idcat_usuario)
    setNombre(rowData.nombre)
    setApellidoP(rowData.apellidoP)
    setApellidoM(rowData.apellidoM)
    setCorreo(rowData.correo)
    setPass()
    setStatus(rowData.status)
  }


  const leftContents=(
    <React.Fragment>
      <Button
        label="Nuevo"
        icon="pi pi-plus"
        className="p-button-success p-mr-2"
        onClick={() => {
          clearData();
          setOpenForm(true)
        }
        }
      />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Contenedor />
      <div className="datatable-crud-demo">
        <div className="card">
          <Toolbar left={leftContents} />
        </div>
      </div>


      <TablaL
        Data={Data}
        Columnas={Columnas}
        OpenForm={OpenForm}
        setOpenForm={setOpenForm}
        DataEdit={DataEdit}
        DeleteForm={DeleteForm}
        setDeleteForm={setDeleteForm}
      />

      <Dialog
        visible={OpenForm}
        style={{width: '50%'}}
        header="Clientes"
        modal
        className="p-fluid"
        footer={DialogFooter}
        onHide={() => {setOpenForm(false)}}>
        {/* <Panel header="Producto"> */}
        {/* Campo de clave */}
        {/* <div className="p-grid"> */}
        {OpenForm? (
          <Formulario
            Idcat_usuario={Idcat_usuario} setIdcat_usuario={setIdcat_usuario}
            Nombre={Nombre} setNombre={setNombre}
            ApellidoP={ApellidoP} setApellidoP={setApellidoP}
            ApellidoM={ApellidoM} setApellidoM={setApellidoM}
            Correo={Correo} setCorreo={setCorreo}
            Pass={Pass} setPass={setPass}
            OpenForm={OpenForm} setOpenForm={setOpenForm}
            Status={Status} setStatus={setStatus}
          />):''}
        {/* </div> */}
        {/* </Panel> */}
      </Dialog>

      <Dialog
        visible={DeleteForm}
        style={{width: '50%'}}
        header="Confirm"
        modal
        footer={deleteDialogFooter}
        onHide={() => {setDeleteForm(false)}}>
        <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle p-mr-3" style={{fontSize: '2rem'}} />
          {DataEdit&&<span>Estas seguro de eliminar registro?</span>}
        </div>
      </Dialog>

    </React.Fragment>
  );


}


export default AdminUser;

