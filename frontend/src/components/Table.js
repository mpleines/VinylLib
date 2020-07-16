import React from 'react';
import styled from 'styled-components';

export const StyledTable = styled.table`
  table-layout: fixed;
`;

export const TableHeader = styled.th`
  text-align: left;
`;

export const TableData = styled.td`
  width: 25%;
`

export const TableDataContent = styled.div`
  height: 1.3rem;
  overflow: hidden;
`

export const Table = ({data}) => {
  return (
    <StyledTable>
      {data.map(item => (
        <tr>
          <TableHeader>{item.label}</TableHeader>
          <TableData>
            <TableDataContent>{item.value}</TableDataContent>
          </TableData>
        </tr>
      ))}
    </StyledTable>
  )
}