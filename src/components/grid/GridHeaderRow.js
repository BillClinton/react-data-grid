import React, { useContext } from 'react';
import { GridContext } from './DataGrid';

const GridHeaderRow = () => {
  const { columns, styles } = useContext(GridContext);

  const renderHeaderColumn = (text, start, span) => {
    let cellStyles = [styles.gridHeaderCell];

    cellStyles.push(styles[`colStart${start}`]);
    cellStyles.push(styles[`colSpan${span}`]);

    return (
      <div key={start} className={cellStyles.join(' ')}>
        {text}
      </div>
    );
  };

  const renderHeaderColumns = () => {
    let columnStartIndex = 1;
    let headerCols = [];

    // add columns and increment starting index by the span
    columns.forEach(col => {
      headerCols.push(renderHeaderColumn(col.text, columnStartIndex, col.span));
      columnStartIndex += col.span;
    });

    // add empty column if row incomplete
    if (columnStartIndex < 14) {
      let span = 14 - columnStartIndex;
      headerCols.push(renderHeaderColumn(' ', columnStartIndex, span));
    }

    return headerCols;
  };

  return columns.length ? (
    <>
      <div className={styles.gridHeader}>{renderHeaderColumns()}</div>
    </>
  ) : (
    <span>no valid columns found</span>
  );
};

export default GridHeaderRow;
