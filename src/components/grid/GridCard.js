import React, { useContext } from 'react';
import { GridContext } from './DataGrid';
import { ReactComponent as CloseIcon } from '../../icons/times-circle-solid.svg';

const GridCard = ({ content }) => {
  const { styles, selectedIndex, setSelectedIndex } = useContext(GridContext);
  const closeCard = () => setSelectedIndex(-1);
  const cardStyles = [styles.card];

  cardStyles.push(selectedIndex >= 0 ? styles.cardOpen : styles.cardClosed);

  return (
    <div className={cardStyles.join(' ')}>
      <div className={styles.close}>
        <CloseIcon onClick={closeCard} />
      </div>
      {content}
    </div>
  );
};

export default GridCard;
