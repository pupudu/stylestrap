import React from 'react';
import { Th } from '../Table';

export const deriveTableWidth = columns => {
  if (columns.find(column => !column.width)) return;
  return `calc(${columns.map(({ width }) => width).join(' + ')})`;
};

export const injectProps = (children, props) => {
  return React.Children.map(children, (child: any) => {
    if (child) {
      return React.cloneElement(child, {
        ...props,
        ...child.props,
      });
    }
    return child;
  });
};

export const DarkHeading = props => <Th {...props} color="dark" />;
