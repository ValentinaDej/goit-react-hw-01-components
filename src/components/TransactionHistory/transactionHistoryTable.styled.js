import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 800px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  & td,
  & th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  & td {
    text-align: center;
    color: grey;
  }
  & tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }
  & tr:hover {
    background-color: #ddd;
  }
  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #429ef5;
    color: white;
  }
`;
