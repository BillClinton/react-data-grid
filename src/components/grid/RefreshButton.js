import React, { useContext } from 'react';
import { GridContext } from './DataGrid';
import { ReactComponent as RefreshIcon } from './icons/sync-alt-solid.svg';

const RefreshButton = () => {
  const { store, styles } = useContext(GridContext);

  const onReloadClick = () => {
    if (!store.isLoading) {
      store.read();
    }
  };

  return (
    <div className={styles.refreshButton}>
      {store.isLoading ? (
        <RefreshIcon className={styles.rotate} />
      ) : (
        <RefreshIcon onClick={onReloadClick} />
      )}
    </div>
  );
};

export default RefreshButton;
