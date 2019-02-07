import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.span`
  font-weight: ${props => props.fontWeight ? props.fontWeight : props.theme.text.fontWeight};
  font-style: ${props => props.italic ? 'italic' : null};
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : props.theme.text.fontSize};
  color: ${props => props.color ? props.color : props.theme.text.color};
  text-align: ${props => props.textAlign ? props.textAlign : null};
  line-height: ${props => props.lineHeight ? props.lineHeight : null};
`;

Text.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number
  ]),
  fontWeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  italic: PropTypes.bool,
  color: PropTypes.string,
  lineHeight: PropTypes.number
};

Text.defaultProps = {};

export default withTheme(Text);
