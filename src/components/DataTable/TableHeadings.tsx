import React from 'react';
import { Th, THead, Tr } from '../Table';

export const TableHeadings = ({ columns, Heading, ...rest }) => {
  if (!columns.some(({ title }) => !!title)) {
    return null;
  }
  return (
    <THead {...rest}>
      <Tr>
        {columns.map((column, index) => {
          const Component = column.Heading || Heading || Th;
          return (
            <Component
              key={index}
              {...column.props}
              style={{ minWidth: column.width, maxWidth: column.width }}
            >
              {column.title}
            </Component>
          );
        })}
      </Tr>
    </THead>
  );
};
