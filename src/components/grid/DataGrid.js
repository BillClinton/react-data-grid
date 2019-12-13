import React, { createContext, useState, useEffect } from 'react';

import Header from './GridHeaderRow';
import DataRows from './GridDataRows';
import styles from './sass/DataGrid.module.scss';
import GridCard from './GridCard';

export const GridContext = createContext();

const DataGrid = ({ store, columns, infoCard, editForm }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    if (selectedIndex > 0) {
      const el = document.getElementById(`${selectedIndex}-1`);
      setTimeout(() => {
        el.scrollIntoView();
      }, 400);
    }
  }, [selectedIndex]);

  const updateRecord = (id, data) => {
    store.update(id, data);
    setSelectedIndex(-1);
  };

  const config = {
    store,
    columns,
    styles,
    selectedIndex,
    setSelectedIndex,
    editIndex,
    setEditIndex,
    updateRecord
  };

  return (
    <GridContext.Provider value={config}>
      <div className={styles.grid}>
        <Header columns={columns} />
        <div className={styles.gridBody}>
          <DataRows store={store} value={config} />
          <GridCard infoCard={infoCard} editForm={editForm} />
        </div>
        <div className={styles.gridFooter} />
      </div>
    </GridContext.Provider>
  );
};

export default DataGrid;
