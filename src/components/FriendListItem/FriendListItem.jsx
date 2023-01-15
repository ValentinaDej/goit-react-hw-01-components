import PropTypes from 'prop-types';
import { FriendListItemCard } from './friendListItemCard.styled';
import { FriendStatus } from './friendStatus.styled';
import { FriendAvatar } from './friendAvatar.styled';
import { FriendName } from './friendName.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemCard>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemCard>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
