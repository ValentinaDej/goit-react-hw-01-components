import styled from '@emotion/styled/macro';

function getRandomHexColor() {
  let randomColour = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase()}`;
  return randomColour;
}

export const StatisticsItem = styled.li`
  width: 82.5px;
  margin: 0;
  padding: 10px 0;
  background-color: ${getRandomHexColor};
`;
