import styled from 'styled-components';
import { withStyles } from '../core/ruleEngine/withStyles';

export const Grid = withStyles('Grid', props => ({
  padding: props.padding,
  margin: props.margin,
  gridTemplateColumns: props.columns,
  gridTemplateRows: props.rows,
  gridGap: props.gap
}))(styled.div`
  display: grid;
  position: relative;
`);
