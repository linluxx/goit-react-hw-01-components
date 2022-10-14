import styled from '@emotion/styled';

export const Table = styled.table`
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 400px;
  border: 2px solid black;
  white-space: nowrap;
  background-color: white;
`;

export const TableContent = styled.td`
  text-align: center;
  padding: 8px;
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
`;

export const TableTitle = styled.th`
  text-align: center;
  padding: 8px;
  color: #ffffff;
  background: #4fc3a1;
  &:nth-of-type(odd) {
    color: #ffffff;
    background: #324960;
  }
`;

export const TableTr = styled.tr`
  &:nth-of-type(even) {
    background: #f8f8f8;
  }
`;
