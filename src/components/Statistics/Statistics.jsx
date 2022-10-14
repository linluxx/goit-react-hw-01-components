import PropTypes from 'prop-types';
import { Section, StatList, Item, Title } from './Statistics.styled';
export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} label={label}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </Item>
        ))}
      </StatList>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
