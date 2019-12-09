import React, { useContext } from 'react';
import { UserStore } from '../contexts/UserStore';
import DataGrid from './grid/DataGrid';

const UserGrid = () => {
  const { store } = useContext(UserStore);

  return (
    <DataGrid
      store={store}
      columns={[
        {
          text: 'Name',
          dataIndex: 'name',
          span: 3
        },
        {
          text: 'Email',
          dataIndex: 'email',
          span: 4
        },
        {
          text: 'Company',
          dataIndex: 'company.name',
          span: 3
        },
        {
          text: 'City',
          dataIndex: 'address.city',
          span: 2
        }
      ]}
    >
      <div>Card content goes here</div>
    </DataGrid>
  );
};

export default UserGrid;
