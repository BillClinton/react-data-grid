import React, { useContext } from 'react';
import { UserStore } from '../contexts/UserStore';
import { GridContext } from './grid/DataGrid';
import styles from './UserCard.module.scss';

const UserCard = () => {
  const { store } = useContext(UserStore);
  const { selectedIndex } = useContext(GridContext);

  let rec = store.data[selectedIndex];

  return selectedIndex >= 0 && rec ? (
    <div className={styles.infoCardWrap}>
      <h1 className={styles.cardHeader}>{rec.name}</h1>
      <div className={styles.infoCard}>
        <div className={styles.userSection}>
          <h2>Personal</h2>
          <div>username:</div>
          <div>{rec.username}</div>
          <div>email:</div>
          <div>{rec.email}</div>
          <div>phone:</div>
          <div>{rec.phone}</div>
          <div>website:</div>
          <div>{rec.website}</div>
        </div>
        <div className={styles.addressSection}>
          <h2>Address</h2>
          <div>{rec.address.street}</div>
          <div>{rec.address.suite}</div>
          <div>{rec.address.city}</div>
          <div>{rec.address.zipcode}</div>
        </div>
        <div className={styles.companySection}>
          <h2>Company</h2>
          <div>{rec.company.name}</div>
          <div>{rec.company.catchPhrase}</div>
          <div>{rec.company.bs}</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserCard;
