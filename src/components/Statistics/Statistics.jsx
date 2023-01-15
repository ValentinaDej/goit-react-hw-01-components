import PropTypes from 'prop-types';
import { StatisticsForm } from './statisticsForm.styled';
import { StatisticsList } from './statisticsList.styled';
import { StatisticsItem } from './statisticsItem.styled';
import { StatisticsLabel } from './statisticsLabel.styled';
import { StatisticsPercent } from './statisticsPercent.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsForm>
      {title && <h2 className="title">{title.toUpperCase()}</h2>}
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
    </StatisticsForm>
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
