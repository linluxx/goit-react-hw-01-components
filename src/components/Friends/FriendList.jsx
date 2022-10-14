import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsUl } from './Friends.styled';

export function FriendsList({ friends }) {
  return (
    <FriendsUl>
      <FriendListItem friends={friends} />
    </FriendsUl>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
