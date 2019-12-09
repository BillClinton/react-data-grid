import React, { useContext } from 'react';
import { UserStore } from '../contexts/UserStore';
import { GridContext } from './grid/DataGrid';

const UserCard = () => {
  const { store } = useContext(UserStore);
  const { selectedIndex } = useContext(GridContext);

  console.log(selectedIndex);

  let rec = store.data[selectedIndex];

  return (
    <div>
      {selectedIndex >= 0 && (
        <>
          <div>
            <div>{rec.name}</div>
            <div>{rec.username}</div>
            <div>{rec.email}</div>
            <div>{rec.phone}</div>
            <div>{rec.website}</div>
            <div>{rec.address.street}</div>
            <div>{rec.address.suite}</div>
            <div>{rec.address.city}</div>
            <div>{rec.address.zipcode}</div>
          </div>
          <div>
            <div>{rec.company.name}</div>
            <div>{rec.company.catchphrase}</div>
            <div>{rec.company.bs}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
