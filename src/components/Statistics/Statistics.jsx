import PropTypes from 'prop-types';
import { FormMainStyle } from '../commonCSS/formMainStyle.styled';
import { StatisticsList } from './statisticsList.styled';
import { StatisticsItem } from './statisticsItem.styled';
import { StatisticsName } from './statisticsName.styled';
import { StatisticsLabel } from './statisticsLabel.styled';
import { StatisticsPercent } from './statisticsPercent.styled';

const Statistics = ({ title, stats }) => {
  return (
    <FormMainStyle>
      {title && <StatisticsName>{title.toUpperCase()}</StatisticsName>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <StatisticsLabel>{label}</StatisticsLabel>
              <StatisticsPercent>{percentage}%</StatisticsPercent>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </FormMainStyle>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
