import PropTypes from 'prop-types';
import { ButtonWrapepr } from './Button.styled';

const Button = ({ loadMore }) => (
  <ButtonWrapepr>
    <button type="botton" onClick={loadMore}>
      Завантажити більше зображень
    </button>
  </ButtonWrapepr>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
