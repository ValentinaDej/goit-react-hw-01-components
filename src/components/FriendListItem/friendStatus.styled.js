import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  margin-right: 15px;
`;
