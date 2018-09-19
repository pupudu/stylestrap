import PropTypes from 'prop-types';

const colorEnumsPropType = PropTypes.oneOf([
  'primary',
  'secondary',
  'muted',
  'warning',
  'danger'
]);

const sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const explicitPositionPropType = PropTypes.shape({
  left: sizePropType,
  right: sizePropType,
  top: sizePropType,
  bottom: sizePropType
});

const positionPropType = PropTypes.oneOfType([
  PropTypes.number,
  explicitPositionPropType
]);

const getBreakPointPropType = parentPropType =>
  PropTypes.shape({
    base: PropTypes.oneOfType([
      parentPropType,
      getPseudoPropType(parentPropType)
    ]),
    xs: PropTypes.oneOfType([
      parentPropType,
      getPseudoPropType(parentPropType)
    ]),
    sm: PropTypes.oneOfType([
      parentPropType,
      getPseudoPropType(parentPropType)
    ]),
    md: PropTypes.oneOfType([
      parentPropType,
      getPseudoPropType(parentPropType)
    ]),
    lg: PropTypes.oneOfType([parentPropType, getPseudoPropType(parentPropType)])
  });

const getPseudoPropType = parentPropType =>
  PropTypes.oneOfType([
    parentPropType,
    PropTypes.shape({
      base: parentPropType,
      hover: parentPropType,
      active: parentPropType,
      link: parentPropType,
      visited: parentPropType
    })
  ]);

export const rulePropTypes = {
  fontSize: sizePropType,
  fontWeight: PropTypes.number,
  lineHeight: sizePropType,
  padding: getBreakPointPropType(positionPropType),
  margin: getBreakPointPropType(positionPropType),
  color: PropTypes.oneOfType([
    colorEnumsPropType,
    getPseudoPropType(colorEnumsPropType)
  ])
};
