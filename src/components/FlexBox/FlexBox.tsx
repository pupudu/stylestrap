import { makeComponent } from '../../core';
import { BoxProps } from '../Box';

interface FlexBoxProps extends BoxProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const FlexBox = makeComponent<FlexBoxProps>('FlexBoxProps')
  .styles(props => ({
    display: 'flex',
    padding: props.p,
    paddingTop: props.pt,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingBottom: props.pb,
    margin: props.m,
    marginTop: props.mt,
    marginLeft: props.ml,
    marginRight: props.mr,
    marginBottom: props.mb,
    flexDirection: props.direction,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    height: props.height,
    width: props.width,
  }))
  .create('div');
