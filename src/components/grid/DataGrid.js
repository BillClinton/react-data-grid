import React, { createContext, useState } from 'react';

import Header from './GridHeaderRow';
import DataRows from './GridDataRows';
import styles from './sass/DataGrid.module.scss';
import GridCard from './GridCard';

export const GridContext = createContext();

const DataGrid = ({ store, columns, children }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const config = { store, columns, styles, selectedIndex, setSelectedIndex };

  return (
    <GridContext.Provider value={config}>
      <div className={styles.grid}>
        <Header columns={columns} />
        <div className={styles.gridBody}>
          <DataRows store={store} value={config} />
          <GridCard content={children} />
        </div>
        <div className={styles.gridFooter} />
      </div>
    </GridContext.Provider>
  );
};

export default DataGrid;
