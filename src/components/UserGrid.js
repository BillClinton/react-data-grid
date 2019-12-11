import React, { useContext } from 'react';
import { UserStore } from '../contexts/UserStore';
import DataGrid from './grid/DataGrid';
import UserCard from './UserCard';

const UserGrid = () => {
  const { store } = useContext(UserStore);

  const columns = [
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
      span: 1
    }
  ];

  return (
    <DataGrid store={store} columns={columns}>
      <UserCard />
    </DataGrid>
  );
};

export default UserGrid;
