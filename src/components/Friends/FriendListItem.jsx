import {
  FriendsItem,
  FriendsStat,
  FriendsAvatar,
  FriendsName,
} from './Friends.styled';
export function FriendListItem({ friends }) {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <FriendsItem key={id}>
      <FriendsStat isOnline={isOnline}>{isOnline}</FriendsStat>
      <FriendsAvatar src={avatar} alt={name} width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  ));
}
