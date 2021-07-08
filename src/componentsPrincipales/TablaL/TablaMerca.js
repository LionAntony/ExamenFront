import React,{useState,useEffect} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Tag} from 'primereact/tag';

const TablaL=({
  Data,
  Columnas,
  setOpenForm,
  DataEdit,
  DeleteForm,
  setDeleteForm
}) => {

  const [GlobalFilter,setGlobalFilter]=useState()

  useEffect(() => {

  },[]);



  const header=(
    <div className="table-header">
      <InputText
        type="search"
        onInput={(e) => setGlobalFilter(e.target.value)}
        placeholder="Buscar..." />
    </div>
  );


  const actionBodyTemplate=(rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => {
            DataEdit(rowData)
            setOpenForm(true)
          }}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => {
            DataEdit(rowData)
            setDeleteForm(true)
          }}
        />
      </>
    );
  }



  return (
    <div className="datatable-crud-demo">
      <div className="card">
        {/* <Toolbar className="p-mb-4"> */}
        {/* {this.leftToolbarTemplate()} */}
        {/* {this.rightToolbarTemplate()} */}
        {/* </Toolbar> */}
        <DataTable
          // ref={(el) => this.dt=el}
          value={Data}
          // selection={this.state.selectedData}
          // onSelectionChange={(e) => this.setState({selectedData: e.value})}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[2,5,10,25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate=" {first} de {last} de {totalRecords} Registros"
          globalFilter={GlobalFilter}
          header={header}>
          {/* <Column selectionMode="multiple" headerStyle={{width: '3rem'}}></Column> */}
          {Columnas.map((option,key) => {
            if(option.field==='stock') {
              return (
                <Column key={key} field={option.field} header={option.header} body={(rowData) => {
                  return (
                    <React.Fragment>
                      {rowData.stock>5? <Tag className="p-mr-2" severity="success" value={rowData.stock}></Tag>:''}
                      {rowData.stock<=5&rowData.stock!==0? <Tag className="p-mr-2" severity="warning" value={rowData.stock}></Tag>:''}
                      {rowData.stock===0? <Tag className="p-mr-2" severity="danger" value={rowData.stock}></Tag>:''}

                    </React.Fragment>
                  );
                }} sortable></Column>
              )
            } else {
              return (
                <Column key={key} field={option.field} header={option.header} sortable></Column>
              )
            }
          }
          )}
          <Column body={actionBodyTemplate}></Column>
        </DataTable>
      </div>

    </div>
  );

}

export default TablaL;
