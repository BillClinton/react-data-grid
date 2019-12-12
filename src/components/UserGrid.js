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
