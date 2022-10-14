import { TransactionTitle } from './TransactionTitle';

export function TransactionHistory({ transactions }) {
  console.log(transactions);
  return (
    <table className="transaction-history">
      <TransactionTitle />
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
