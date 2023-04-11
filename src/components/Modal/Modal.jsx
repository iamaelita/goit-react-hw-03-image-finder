import PropTypes from 'prop-types';
import { ModalOverley } from './Modal.styled';
import { Component } from 'react';




class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }
  closeModal = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <ModalOverley onClick={this.handleClick}>
        <div>
          <img src={this.props.image} alt="" />
        </div>
      </ModalOverley>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
