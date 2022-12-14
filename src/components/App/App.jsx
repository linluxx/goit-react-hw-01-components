import user from '../../DataJson/user.json';
import data from '../../DataJson/data.json';
import friends from '../../DataJson/friends.json';
import transactions from '../../DataJson/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendsList } from '../Friends/FriendList';
import { TransactionHistory } from '../Transactions/TransactionHistory';
import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
