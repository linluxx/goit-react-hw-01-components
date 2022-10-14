import PropTypes from 'prop-types';
import { TransactionTitle } from './TransactionTitle';
import { Table, TableContent, TableTr } from './Transactions.styled';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TransactionTitle />
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableTr key={id}>
            <TableContent>{type}</TableContent>
            <TableContent>{amount}</TableContent>
            <TableContent>{currency}</TableContent>
          </TableTr>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
