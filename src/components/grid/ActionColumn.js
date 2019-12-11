import React, { useContext, useState, useEffect } from 'react';
import { ReactComponent as ActionsIcon } from './icons/ellipsis-v-solid.svg';
import { ReactComponent as EditIcon } from './icons/pen-square-solid.svg';
import { ReactComponent as DeleteIcon } from './icons/minus-circle-solid.svg';
import { ReactComponent as CloseIcon } from './icons/times-circle-solid.svg';
import { GridContext } from './DataGrid';
import styles from './sass/ActionColumn.module.scss';

const ActionColumn = ({ idx }) => {
  const { store, selectedIndex, setSelectedIndex } = useContext(GridContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (idx !== selectedIndex) {
      setOpen(false);
    }
  }, [selectedIndex, idx]);

  const onOpenIconClick = () => {
    if (!open) {
      setSelectedIndex(idx);
      setOpen(true);
    }
  };

  const onCloseIconClick = () => {
    setOpen(false);
    setSelectedIndex(-1);
  };

  const onDeleteClick = () => {
    store.destroy(idx);
    setSelectedIndex(-1);
  };

  const barStyles = [styles.bar];
  barStyles.push(open ? styles.barOpen : styles.barClosed);

  return (
    <div className={styles.actions}>
      <ActionsIcon className={styles.open} onClick={onOpenIconClick} />
      <div className={barStyles.join(' ')}>
        <div className={styles.buttonWrap}>
          <button className={styles.edit}>
            <EditIcon />
            edit
          </button>
          <button className={styles.delete} onClick={onDeleteClick}>
            <DeleteIcon />
            delete
          </button>
        </div>
        <div className={styles.actionBarClose}>
          <CloseIcon onClick={onCloseIconClick} />
        </div>
      </div>
    </div>
  );
};

export default ActionColumn;
