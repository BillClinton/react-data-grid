import React, { useContext } from 'react';
import { GridContext } from './DataGrid';
import GridDataRow from './GridDataRow';

const GridDataRows = () => {
  const { store, styles, selectedIndex, addRef } = useContext(GridContext);
  const wrapStyles = [styles.gridDataWrap];

  if (selectedIndex >= 0) {
    wrapStyles.push(styles.gridDataWrapShrink);
  }

  return store.data.length ? (
    <div className={wrapStyles.join(' ')}>
      <div className={styles.gridData}>
        {store.data.map((rec, idx) => {
          return <GridDataRow key={idx} rec={rec} idx={idx} />;
        })}
      </div>
    </div>
  ) : (
    <span>no rows found</span>
  );
};

export default GridDataRows;
