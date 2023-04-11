import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #f7f28d;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    button {
      display: inline-block;
      /* font-size: 0;
      line-height: 0; */
      width: 48px;
      height: 48px;
      border: 0;
      background-color: inherit;
      color: #5f407d;
      opacity: 0.6;
      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      outline: none;
      span {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        clip-path: inset(50%);
        border: 0;
      }
      svg {
        display: block;
        height: 100%;
        width: 100%;
      }
      :hover {
        opacity: 1;
      }
    }
    input {
      display: inline-block;
      width: 100%;
      font: inherit;
      font-size: 18px;
      line-height: 1.5;
      border: none;
      outline: none;
      padding-left: 7px;
      padding-right: 4px;

      :placeholder {
        font: inherit;
        font-size: 18px;
      }
    }
  }
`;

export const SearchForm = styled.form``;
