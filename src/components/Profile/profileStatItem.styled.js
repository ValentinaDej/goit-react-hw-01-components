import styled from '@emotion/styled/macro';

export const ProfileStatItem = styled.li`
  display: block;
  width: 110px;
  border-top: 1px solid #cfcbca;
  background-color: #f5f5f5;
  padding: 25px 0px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid #cfcbca;
  }
`;
