import React from 'react';

const BORDER = '1px solid var(--semantic-line-solid-neutral)';
const HEAD_CELL = { padding: '8px 0px 8px 20px', height: 44, verticalAlign: 'middle', border: 'none', borderBottom: BORDER, textAlign: 'left', fontSize: 13, lineHeight: '18px', letterSpacing: '0.0194em', fontWeight: 600, color: 'var(--semantic-label-neutral)' };
const CELL = { padding: '16px 0px 16px 20px', height: 44, verticalAlign: 'middle', border: 'none', borderBottom: BORDER, textAlign: 'left', fontSize: 16, lineHeight: '24px', letterSpacing: '0.0057em', fontWeight: 400, color: 'var(--semantic-label-normal)' };

function Row({ columns, row, interaction, onClick, lastRow }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const overlay = interaction ? (press ? 0.12 : hover ? 0.05 : 0) : 0;
  return (
    <tr
      tabIndex={interaction ? 0 : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        cursor: interaction ? 'pointer' : undefined,
        backgroundColor: `color-mix(in srgb, var(--semantic-label-normal) ${overlay * 100}%, transparent)`,
        transition: 'background ease 0.2s',
      }}
    >
      {columns.map((col, i) => (
        <td
          key={col.key}
          style={{
            ...CELL,
            textAlign: col.align || CELL.textAlign,
            width: col.width,
            paddingRight: i === columns.length - 1 ? 20 : 0,
            borderBottom: lastRow ? 'none' : CELL.borderBottom,
          }}
        >
          {typeof col.render === 'function' ? col.render(row) : row[col.key]}
        </td>
      ))}
    </tr>
  );
}

/** Bordered data table: 12px radius, one hairline frame, a `fill.alternative` sticky head. */
export function Table({ columns = [], rows = [], interaction = false, onRowClick, pagination, maxHeight, style, ...rest }) {
  return (
    <div
      data-wds="table"
      {...rest}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        overflow: 'hidden',
        border: BORDER,
        ...style,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto', maxHeight }}>
        <table style={{ display: 'table', margin: 0, padding: 0, borderCollapse: 'separate', borderSpacing: 0, border: 'none', width: '100%', position: 'relative' }}>
          <thead style={{ display: 'table-header-group', position: 'sticky', top: 0, zIndex: 1, border: 'none', backgroundColor: 'var(--semantic-fill-alternative)' }}>
            <tr style={{ display: 'table-row' }}>
              {columns.map((col, i) => (
                <th
                  key={col.key}
                  scope="col"
                  style={{
                    ...HEAD_CELL,
                    textAlign: col.align || HEAD_CELL.textAlign,
                    width: col.width,
                    paddingRight: i === columns.length - 1 ? 20 : 0,
                    borderBottom: rows.length ? HEAD_CELL.borderBottom : 'none',
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ display: 'table-row-group', border: 'none' }}>
            {rows.map((row, i) => (
              <Row
                key={row.id != null ? row.id : i}
                columns={columns}
                row={row}
                interaction={interaction}
                lastRow={i === rows.length - 1}
                onClick={interaction && onRowClick ? () => onRowClick(row) : undefined}
              />
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div data-role="table-pagination" style={{ display: 'flex', justifyContent: 'center', padding: '16px 20px', borderTop: BORDER }}>
          {pagination}
        </div>
      )}
    </div>
  );
}
