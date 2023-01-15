import PropTypes from 'prop-types';
import { FormMainStyle } from '../commonCSS/formMainStyle.styled';
import { ProfileAvatar } from './profileAvatar.styled';
import { ProfileName } from './profileName.styled';
import { ProfileTag } from './profileTag.styled';
import { ProfileLocation } from './profileLocation.styled';
import { ProfileStatList } from './profileStatList.styled';
import { ProfileStatItem } from './profileStatItem.styled';
import { ProfileLabel } from './profileLabel.styled';
import { ProfileQuant } from './profileQuant.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <FormMainStyle as="div">
      <div>
        <ProfileAvatar src={avatar} alt={{ username }} />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </div>

      <ProfileStatList>
        <ProfileStatItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuant>{followers}</ProfileQuant>
        </ProfileStatItem>
        <ProfileStatItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuant>{views}</ProfileQuant>
        </ProfileStatItem>
        <ProfileStatItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuant>{likes}</ProfileQuant>
        </ProfileStatItem>
      </ProfileStatList>
    </FormMainStyle>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
