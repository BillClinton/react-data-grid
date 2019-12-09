import React, { useContext } from 'react';
import { GridContext } from './DataGrid';

const GridDataRow = ({ rec, idx }) => {
  const { columns, styles, selectedIndex, setSelectedIndex } = useContext(
    GridContext
  );

  const onCellSelected = () => {
    setSelectedIndex(idx !== selectedIndex ? idx : -1);
  };

  const renderDataColumn = (text, start, span) => {
    let cellStyles = [styles.gridDataCell];

    cellStyles.push(styles[`colStart${start}`]);
    cellStyles.push(styles[`colSpan${span}`]);

    if (idx === selectedIndex) {
      cellStyles.push(styles.colSelected);
    }

    return (
      <div
        key={`${idx}-${start}`}
        onClick={onCellSelected}
        className={cellStyles.join(' ')}
      >
        {text}
      </div>
    );
  };

  const getFieldValue = dataIndex => {
    let target = rec;
    let indexArray = dataIndex.split('.');

    while (indexArray.length > 1) {
      target = rec[indexArray[0]];
      indexArray.shift();
    }

    return target[indexArray[0]];
  };

  const renderDataColumns = () => {
    let columnStartIndex = 1;
    let dataCols = [];

    // add columns and increment starting index by the span
    columns.forEach(col => {
      dataCols.push(
        renderDataColumn(
          getFieldValue(col.dataIndex),
          columnStartIndex,
          col.span
        )
      );
      columnStartIndex += col.span;
    });

    // add empty column if row incomplete
    if (columnStartIndex < 13) {
      let span = 13 - columnStartIndex;
      dataCols.push(renderDataColumn(' ', columnStartIndex, span));
    }

    return dataCols;
  };

  return columns.length ? (
    <>{renderDataColumns()}</>
  ) : (
    <span>no valid columns found</span>
  );
};

export default GridDataRow;
