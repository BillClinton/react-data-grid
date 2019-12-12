import React, { useContext } from 'react';
import { GridContext } from './DataGrid';
import ActionColumn from './ActionColumn';

const GridDataRow = ({ rec, idx }) => {
  const {
    columns,
    styles,
    selectedIndex,
    setSelectedIndex,
    setEditIndex
  } = useContext(GridContext);

  const onCellSelected = () => {
    setSelectedIndex(idx !== selectedIndex ? idx : -1);
    setEditIndex(-1);
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
        id={`${idx}-${start}`}
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
      if (columnStartIndex < 13) {
        let colSpan = col.span;

        // if cell would overflow available columns, reduce the colspan
        if (colSpan + columnStartIndex > 13) {
          colSpan = 13 - columnStartIndex;
        }

        dataCols.push(
          renderDataColumn(
            getFieldValue(col.dataIndex),
            columnStartIndex,
            colSpan
          )
        );
      }
      columnStartIndex += col.span;
    });

    // add empty column if row incomplete
    if (columnStartIndex < 13) {
      let fillSpan = 13 - columnStartIndex;
      dataCols.push(renderDataColumn(' ', columnStartIndex, fillSpan));
    }

    // add the action column
    dataCols.push(<ActionColumn idx={idx} key="action-column" />);

    return dataCols;
  };

  return columns.length ? (
    <>{renderDataColumns()}</>
  ) : (
    <span>no valid columns found</span>
  );
};

export default GridDataRow;
