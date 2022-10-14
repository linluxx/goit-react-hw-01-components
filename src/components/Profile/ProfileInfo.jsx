import { ProfileDescription, ProfileAvatar, Text } from './Profile.styled';
export function ProfileInfo({ avatar, username, tag, location }) {
  return (
    <ProfileDescription>
      <ProfileAvatar src={avatar} alt="User avatar" />
      <Text>{username}</Text>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </ProfileDescription>
  );
}
