import styled from 'styled-components';
export const ButtonWrapepr = styled.div`


  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  button {
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #5e5e5d;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    border-radius: 25px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    :hover,
    :focus {
      background-color: #5f407d;
    }
  }
`;
