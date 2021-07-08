import React,{useState,useEffect,useRef} from 'react';
import Contenedor,{Alert} from '../componentsPrincipales/Alert.jsx'
import {Toolbar} from 'primereact/toolbar';
import {Dialog} from 'primereact/dialog';
import Formulario from './components/formulario.js'
import Fetch from '../componentsPrincipales/Fetch/FetchN.js'

import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';


const AdminEmpleados=() => {
  const [Data,setData]=useState([])
  const [OpenForm,setOpenForm]=useState(false)

  const [Idcat_empleados,setIdcat_empleados]=useState(false)
  const [Nombre,setNombre]=useState('')
  const [ApellidoP,setApellidoP]=useState('')
  const [ApellidoM,setApellidoM]=useState('')
  const [FechaNacimiento,setFechaNacimiento]=useState('')
  const [Correo,setCorreo]=useState('')
  const [Genero,setGenero]=useState('')
  const [Telefono,setTelefono]=useState('')
  const [Celular,setCelular]=useState('')
  const [FechaIngreso,setFechaIngreso]=useState('')
  const [Departamento,setDepartamento]=useState('')

  const [DeleteForm,setDeleteForm]=useState(false)

  const cols=[{field: 'idcat_empleados',header: 'id'},
  {field: 'nombre',header: 'Nombre'},
  {field: 'apellidoP',header: 'pellido P'},
  {field: 'apellidoM',header: 'pellido M'},
  {field: 'nombreEmpresa',header: 'Empresa'},
  {field: 'nombreDepartamento',header: 'Departamento'}];



  useEffect(() => {
    funget();
  },[]);

  const funget=() => {
    Fetch('empleados/')
      .then(response => {
        setData(response.data)
      }).catch(err => {
        console.log(err);
        Alert('warn',err);
      });
  }

  const DataEdit=(rowData) => {
    console.info(rowData)

    console.info(rowData.fechaNacimiento.substr(0,10))
    console.info(rowData.fechaIngreso.substr(0,10))

    // if(rowData.idcat_clientes)
    setIdcat_empleados(rowData.idcat_empleados)
    setNombre(rowData.nombre)
    setApellidoP(rowData.apellidoP)
    setApellidoM(rowData.apellidoM)
    setFechaNacimiento((rowData.fechaNacimiento.substr(0,10)))
    setCorreo(rowData.correo)
    setGenero(rowData.genero)
    setTelefono(rowData.telefono)
    setCelular(rowData.celular)
    setFechaIngreso((rowData.fechaIngreso.substr(0,10)))
    setDepartamento(rowData.idcat_departamento)
  }

  const clearData=() => {
    setIdcat_empleados(false)
    setNombre()
    setApellidoP()
    setApellidoM()
    setFechaNacimiento()
    setCorreo()
    setGenero()
    setTelefono()
    setCelular()
    setFechaIngreso()
    setDepartamento()
  }

  const validSaveUpdate=() => {
    if(Idcat_empleados) {
      return true;
    } else {
      return false;
    }
  }

  const saveDataEdit=() => {
    if(validSaveUpdate()) {
      funUpdate();
      funget();
      setOpenForm(false);
      clearData();
    } else {
      funInsert();
      funget();
      setOpenForm(false);
      clearData();
    }
  }

  const formatoFecha=(fecha) => {
    const response=`${fecha.getFullYear().toString()}-${(fecha.getMonth()+1).toString().padStart(2,'0')}-${(fecha.getDate()).toString().padStart(2,'0')}`

    console.log(fecha.getFullYear().toString())
    console.log((fecha.getMonth()+1).toString().padStart(2,'0'))
    console.log((fecha.getDate()).toString().padStart(2,'0'))
    return response
  }

  const funInsert=() => {
    let err=0
    const hoy=new Date()

    let formData=new FormData();
    formData.append("nombre",Nombre);
    formData.append("apellidoP",ApellidoP);
    formData.append("apellidoM",ApellidoM);
    if(FechaNacimiento!==undefined) {formData.append("fechaNacimiento",formatoFecha(FechaNacimiento))} else {err++;}
    formData.append("correo",Correo);
    if(Genero!==undefined) {formData.append("genero",Genero);} else {err++;}
    if(Telefono!==undefined) {formData.append("telefono",Telefono.replace(/[()]/gi,'').replace(/-/gi,'').replace(/[ ]/gi,''));} else {err++;}
    if(Celular!==undefined) {formData.append("celular",Celular.replace(/[()]/gi,'').replace(/-/gi,'').replace(/[ ]/gi,''));} else {err++;}
    if(Departamento!==undefined) {formData.append("departamento",Departamento.code)} else {err++;}
    formData.append("fechaIngreso",formatoFecha(hoy))

    if(err===0) {
      Fetch(`empleados`,{
        method: "POST",
        body: formData
      }).then(response => {
        if(response.status) {
          Alert('success','Nuevo Empleado Registrado!!!');
          clearData()
          funget()
        } else {
          Alert('warn',response.err);
        }
      }).catch(err => {
        console.log(err);
        Alert('warn',err);
      });
    } else {
      Alert('warn','Completa los datos requeridos');
    }

  };

  const funUpdate=() => {
    let err=0
    let formData=new FormData();
    formData.append("id",Idcat_empleados);
    formData.append("nombre",Nombre);
    formData.append("apellidoP",ApellidoP);
    formData.append("apellidoM",ApellidoM);
    if(FechaNacimiento!==undefined) {formData.append("fechaNacimiento",formatoFecha(FechaNacimiento))} else {err++;}
    formData.append("correo",Correo);
    if(Genero!==undefined) {formData.append("genero",Genero);} else {err++;}
    if(Telefono!==undefined) {formData.append("telefono",Telefono.replace(/[()]/gi,'').replace(/-/gi,'').replace(/[ ]/gi,''));} else {err++;}
    if(Celular!==undefined) {formData.append("celular",Celular.replace(/[()]/gi,'').replace(/-/gi,'').replace(/[ ]/gi,''));} else {err++;}
    if(Departamento!==undefined) {formData.append("departamento",Departamento.code)} else {err++;}

    if(err===0) {
      Fetch(`empleados`,{
        method: "patch",
        body: formData
      }).then(response => {
        if(response.status) {
          Alert('success','Informacion Actualizada!!!');
          funget()
        }
      }).catch(err => {
        console.log(err);
        Alert('warn',err);
      });
    } else {
      Alert('warn','Completa los datos requeridos');
    }

  };

  const funDeleted=() => {
    Fetch(`empleados/${Idcat_empleados}`,{
      method: "DELETE"
    }).then(response => {
      if(response.status) {
        Alert('success','Registro Eliminado!!!');
        funget()
        setOpenForm(false);
      }
    }).catch(err => {
      console.log(err);
      Alert('warn',err);
    });
  };

  const exportColumns=cols.map(col => ({title: col.header,dataKey: col.field}));
  const [globalFilter,setGlobalFilter]=useState('');
  const dt=useRef(null);
  const exportCSV=(selectionOnly) => {
    dt.current.exportCSV({selectionOnly});
  }
  const exportPdf=() => {
    import('jspdf').then(jsPDF => {
      import('jspdf-autotable').then(() => {
        const doc=new jsPDF.default(0,0);
        doc.autoTable(exportColumns,Data[0]);
        doc.save('Empleados.pdf');
      })
    })
  }
  const exportExcel=() => {
    import('xlsx').then(xlsx => {
      const worksheet=xlsx.utils.json_to_sheet(Data[0]);
      const workbook={Sheets: {'data': worksheet},SheetNames: ['data']};
      const excelBuffer=xlsx.write(workbook,{bookType: 'xlsx',type: 'array'});
      saveAsExcelFile(excelBuffer,'empleados');
    });
  }
  const saveAsExcelFile=(buffer,fileName) => {
    import('file-saver').then(FileSaver => {
      let EXCEL_TYPE='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION='.xlsx';
      const data=new Blob([buffer],{
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data,fileName+'_export_'+new Date().getTime()+EXCEL_EXTENSION);
    });
  }
  const reset=() => {
    setGlobalFilter('');
    dt.current.reset();
  }

  const DialogFooter=(
    <React.Fragment>
      <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={() => {clearData(); setOpenForm(false);}} />
      {Idcat_empleados? <Button label="Eliminar" icon="pi-trash" className="p-button-text" onClick={() => funDeleted()} />:''}
      <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={() => saveDataEdit()} />
    </React.Fragment>
  );

  const deleteDialogFooter=(
    <React.Fragment>
      <Button label="No" icon="pi pi-times" className="p-button-text" onClick={() => {setDeleteForm(false)}} />
      <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={() => {funDeleted(); funget(); setDeleteForm(false);}} />
    </React.Fragment>
  );

  const leftContents=(
    <React.Fragment>
      <Button label="Nuevo" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={() => {clearData(); setOpenForm(true)}} />
    </React.Fragment>
  )

  const header=(
    <div className="table-header">
      <Button type="button" icon="pi pi-file-o" onClick={() => exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
      <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" />
      <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" />
      <Button type="button" label="Clear" className="p-button-outlined" icon="pi pi-filter-slash" onClick={reset} />
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
      </span>
    </div>
  );

  return (
    <React.Fragment>
      <Contenedor />
      <div className="datatable-crud-demo">
        <div className="card">
          <Toolbar left={leftContents} />
        </div>
      </div>

      <DataTable header={header} ref={dt} globalFilter={globalFilter} value={Data[0]} rows={10} paginator selectionMode="single"
        scrollable
        resizableColumns columnResizeMode="fit"
        onSelectionChange={(e) => {
          console.log(e.value)
          clearData();
          DataEdit(e.value)
          setOpenForm(true)
        }}>
        {cols.map((col,index) => <Column key={index} field={col.field} header={col.header} />)}
      </DataTable>

      <Dialog
        visible={OpenForm}
        style={{width: '60%'}}
        header="Empleados"
        modal
        className="p-fluid"
        footer={DialogFooter}
        onHide={() => {setOpenForm(false)}}>

        <Formulario
          Idcat_empleados={Idcat_empleados} setIdcat_empleados={setIdcat_empleados}
          Nombre={Nombre} setNombre={setNombre}
          ApellidoP={ApellidoP} setApellidoP={setApellidoP}
          ApellidoM={ApellidoM} setApellidoM={setApellidoM}
          FechaNacimiento={FechaNacimiento} setFechaNacimiento={setFechaNacimiento}
          Correo={Correo} setCorreo={setCorreo}
          Genero={Genero} setGenero={setGenero}
          Telefono={Telefono} setTelefono={setTelefono}
          Celular={Celular} setCelular={setCelular}
          FechaIngreso={FechaIngreso} setFechaIngreso={setFechaIngreso}
          Departamento={Departamento} setDepartamento={setDepartamento}
        />
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

export default AdminEmpleados;


