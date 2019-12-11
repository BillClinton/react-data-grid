import React, { useContext } from 'react';
import { GridContext } from './DataGrid';
import RefreshButton from './RefreshButton';

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
      console.log('info', col.text, columnStartIndex, col.span);
      if (columnStartIndex < 13) {
        let colSpan = col.span;

        // if cell would overflow available columns, reduce the colspan
        if (colSpan + columnStartIndex > 13) {
          colSpan = 13 - columnStartIndex;
        }

        console.log(colSpan);

        headerCols.push(
          renderHeaderColumn(col.text, columnStartIndex, colSpan)
        );
        columnStartIndex += colSpan;
      }
    });

    console.log('index', columnStartIndex);

    // add empty column if row incomplete
    if (columnStartIndex < 13) {
      let span = 13 - columnStartIndex;
      headerCols.push(renderHeaderColumn('', columnStartIndex, span));
    }

    // add refresh button
    headerCols.push(<RefreshButton />);

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
