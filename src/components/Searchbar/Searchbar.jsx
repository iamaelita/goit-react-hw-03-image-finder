import PropTypes from 'prop-types';
import { Header } from './Searchbar.styled';

import { MdPlagiarism } from 'react-icons/md';




const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <MdPlagiarism />
        </button>
        <input
          name="searchString"
          type="text"
          autoComplete="off"
          placeholder="Шукати зображення"
        />
      </form>
    </Header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
