import { TableTitle } from './Transactions.styled';

export function TransactionTitle() {
  return (
    <thead>
      <tr>
        <TableTitle>Type</TableTitle>
        <TableTitle>Amount</TableTitle>
        <TableTitle>Currency</TableTitle>
      </tr>
    </thead>
  );
}
