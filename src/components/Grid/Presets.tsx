import React from 'react';
import { Grid, Cell, Styled, Box, FlexBox } from '../../';
import { ColoredDiv } from '../../docs/Presets';
import { useColorMode } from 'theme-ui';

const areas = `
  "HEAD HEAD"
  "SIDE BODY"
  "SIDE FOOT"
`;

const commonProps = {
  as: ColoredDiv,
  height: 'initial',
  $css: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export function GridArea() {
  return (
    <Grid columns="1fr 4fr" rows="1fr 3fr 1fr" height="200px" gap="xs" areas={areas}>
      <Cell {...commonProps} color="primary" area="HEAD">
        HEAD
      </Cell>
      <Cell {...commonProps} color="success" area="SIDE">
        SIDE
      </Cell>
      <Cell {...commonProps} color="warning" area="BODY">
        BODY
      </Cell>
      <Cell {...commonProps} color="danger" area="FOOT">
        FOOT
      </Cell>
    </Grid>
  );
}

const spacedCss = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px dashed black',
  fontSize: '16px',
  height: '150px',
};

const SpacedDiv = props => {
  const [mode] = useColorMode();
  return (
    <Box
      {...props}
      $css={{
        ...spacedCss,
        ...props.$css,
        borderLeftWidth: props.skip ? 0 : '3px',
        borderLeftColor: 'info',
        borderRightWidth: props.skip ? 0 : '3px',
        borderRightColor: 'info',
        borderTopWidth: props.skipY ? 0 : '3px',
        borderTopColor: 'danger',
        borderBottomWidth: props.skipY ? 0 : '3px',
        borderBottomColor: 'danger',
        color: mode === 'dark' ? '#FFF' : '#000',
      }}
    />
  );
};

const BigSpan = props => <Styled {...props} $css={{ ...props.$css }} as="span" />;

export function GridLines() {
  return (
    <div>
      <Grid columns="3">
        <SpacedDiv />
        <SpacedDiv skip $css={{ justifyContent: 'center' }}>
          <FlexBox height="100%" justifyContent="space-between" direction="column">
            <BigSpan $css={{ textAlign: 'center' }}>
              <div>⇧</div>
              <div>1 (or -4)</div>
            </BigSpan>
          </FlexBox>
        </SpacedDiv>
        <SpacedDiv />
      </Grid>
      <Grid columns="3">
        <SpacedDiv skipY>
          <BigSpan>⇦1 (or -4)</BigSpan>
          <BigSpan />
        </SpacedDiv>
        <SpacedDiv skip skipY>
          <BigSpan>⇦2 (or -3)</BigSpan>
          <FlexBox height="100%" justifyContent="space-between" direction="column">
            <BigSpan $css={{ textAlign: 'center' }}>
              <div>⇧</div>
              <div>2 (or -3)</div>
            </BigSpan>
            <BigSpan $css={{ textAlign: 'center' }}>
              <div>3 (or -2)</div>
              <div>⇩</div>
            </BigSpan>
          </FlexBox>
          <BigSpan>3 (or -2)⇨</BigSpan>
        </SpacedDiv>
        <SpacedDiv skipY>
          <BigSpan />
          <BigSpan>4 (or -1)⇨</BigSpan>
        </SpacedDiv>
      </Grid>
      <Grid columns="3">
        <SpacedDiv />
        <SpacedDiv skip $css={{ justifyContent: 'center' }}>
          <FlexBox height="100%" justifyContent="flex-end" direction="column">
            <BigSpan $css={{ textAlign: 'center' }}>
              <div>4 (or -1)</div>
              <div>⇩</div>
            </BigSpan>
          </FlexBox>
        </SpacedDiv>
        <SpacedDiv />
      </Grid>
    </div>
  );
}

export function HorizontalGridLines() {
  return (
    <div>
      <Grid columns="3">
        <SpacedDiv />
        <SpacedDiv skip />
        <SpacedDiv />
      </Grid>
      <Grid columns="3">
        <SpacedDiv>
          <BigSpan>⇦1 (or -4)</BigSpan>
          <BigSpan />
        </SpacedDiv>
        <SpacedDiv skip>
          <BigSpan>⇦2 (or -3)</BigSpan>
          <BigSpan>3 (or -2)⇨</BigSpan>
        </SpacedDiv>
        <SpacedDiv>
          <BigSpan />
          <BigSpan>4 (or -1)⇨</BigSpan>
        </SpacedDiv>
      </Grid>
      <Grid columns="3">
        <SpacedDiv />
        <SpacedDiv skip />
        <SpacedDiv />
      </Grid>
    </div>
  );
}

const Word = ({ color, ...props }: any) => {
  return <Box {...props} $css={{ background: color }} as="span" display="inline" />;
};

export const WordTemplate = () => {
  return (
    <Grid $css={{ fontFamily: 'monospace', fontSize: '16px' }}>
      <div>
        "<Word color="#c7e2ff">HEAD</Word> <Word color="#c7e2ff">HEAD</Word>"
      </div>
      <div>
        "<Word color="#dee8c8">SIDE</Word> <Word color="#ffc9b6">BODY</Word>"
      </div>
      <div>
        "<Word color="#dee8c8">SIDE</Word> <Word color="#eac0e4">FOOT</Word>"
      </div>
    </Grid>
  );
};
