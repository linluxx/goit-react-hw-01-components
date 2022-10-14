import { FriendListItem } from './FriendListItem';

export function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
}
