import React, { useContext } from 'react';
import { GridContext } from './DataGrid';
import { ReactComponent as CloseIcon } from './icons/times-circle-solid.svg';

const GridCard = ({ infoCard, editForm }) => {
  const { styles, selectedIndex, setSelectedIndex, editIndex } = useContext(
    GridContext
  );
  const closeCard = () => setSelectedIndex(-1);
  const cardStyles = [styles.card];

  cardStyles.push(selectedIndex >= 0 ? styles.cardOpen : styles.cardClosed);

  let contentCard = infoCard;
  if (editIndex > 0) {
    contentCard = editForm;
  }

  return (
    <div className={cardStyles.join(' ')}>
      <div className={styles.close}>
        <CloseIcon onClick={closeCard} />
      </div>
      {contentCard}
    </div>
  );
};

export default GridCard;
