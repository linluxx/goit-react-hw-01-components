import PropTypes from 'prop-types';
import { ProfileInfo } from './ProfileInfo';
import { ProfileSocial } from './ProfileSocial';

export function Profile({ user: { avatar, username, tag, location, stats } }) {
  return (
    <div className="profile">
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileSocial stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
