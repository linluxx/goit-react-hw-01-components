import { ProfileStatsList, ProfileStatsItem } from './Profile.styled';
export function ProfileSocial({ stats: { followers, views, likes } }) {
  return (
    <ProfileStatsList>
      <ProfileStatsItem>
        <span>Followers</span>
        <span>{followers}</span>
      </ProfileStatsItem>
      <ProfileStatsItem>
        <span>Views</span>
        <span>{views}</span>
      </ProfileStatsItem>
      <ProfileStatsItem>
        <span>Likes</span>
        <span>{likes}</span>
      </ProfileStatsItem>
    </ProfileStatsList>
  );
}
