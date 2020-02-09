import React from 'react';
import MaterialTable from 'material-table';


export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nombres', field: 'name' },
      { title: 'Apellidos', field: 'surname' },
      { title: 'Año Nacimiento', field: 'birthYear', type: 'numeric' },
      {
        title: 'Lugar Nacimiento',
        field: 'birthCity',
        lookup: { 34: 'Cartagena de Indias', 63: 'Ciénaga de Oro' },
      },
    ],
    data: [
      { name: 'Jose Mario', surname: 'Mestra Ponce', birthYear: 1998, birthCity: 63 },
      {
        name: 'Maria Alejandra',
        surname: 'Mestra Ponce',
        birthYear: 1995,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Lista de Usuarios"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
