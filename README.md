## react-data-grid

A scrolling data grid built with React Hooks and Context API.

Grid files are located in [src/components/grid](https://github.com/BillClinton/react-data-grid/tree/master/src/components/grid).

This is not intended as a basic template rather than a reusable module to handle all cases.

demo using [JSONPlaceholder] API(https://jsonplaceholder.typicode.com/): https://billclinton.github.io/react-data-grid/

### props

- `store` - expected to provide a `data` array, an `isLoading` boolean and `create, read, update, destroy` functions.
- `columns` - array of column definition objects specifying:
  - `text` - value used for column header text
  - `dataIndex` - name of record property
  - `span` - number of columns to span based on a 12 column CSS grid layout
- `infoCard` - component to be displayed when a record is selected
- `editForm` - component to be displayed when editing form

### Example Usage

```
import React, { useContext } from 'react';
import { UserStore } from '../contexts/UserStore';
import DataGrid from './grid/DataGrid';
import UserCard from './UserCard';
import EditForm from './EditForm';

const UserGrid = () => {
  const { store } = useContext(UserStore);

  const columns = [
    {
      text: 'Name',
      dataIndex: 'name',
      span: 3
    },
    {
      text: 'Phone',
      dataIndex: 'phone',
      span: 3
    },
    {
      text: 'Email',
      dataIndex: 'email',
      span: 3
    },
    {
      text: 'Company',
      dataIndex: 'company.name',
      span: 3
    }
  ];

  return (
    <DataGrid
      store={store}
      columns={columns}
      infoCard={<UserCard />}
      editForm={<EditForm />}
    ></DataGrid>
  );
};

export default UserGrid;
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

SVG icons from Font Awesome. [license](https://fontawesome.com/license)
