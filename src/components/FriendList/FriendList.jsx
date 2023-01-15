import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendListMain } from './friendListMain.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListMain>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendListMain>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
export default FriendList;
