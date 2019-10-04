import { makeComponent, SS } from '../../core';

export interface BoxProps extends SS.Div {
  p?: string | any;
  pt?: string | any;
  pl?: string | any;
  pr?: string | any;
  pb?: string | any;
  m?: string | any;
  mt?: string | any;
  ml?: string | any;
  mr?: string | any;
  mb?: string | any;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  overflow?: string;
}

export const Box = makeComponent<BoxProps>('Box')
  .styles(props => ({
    display: props.display,
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
    height: props.height,
    maxHeight: props.maxHeight,
    minHeight: props.minHeight,
    width: props.width,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    overflow: props.overflow,
  }))
  .create('div');
