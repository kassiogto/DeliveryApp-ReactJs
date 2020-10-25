import styled from 'styled-components';

export const Container = styled.div`
  background-color: #123713;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
`;

export const Logo = styled.img`
  width: auto;
  height: 70px;
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: ${props=>props.active ? 300 : 0}px;
  height: 50px;
  padding: 0 0 0 50px;
  background-color: #FFF;
  background-image: url('/assets/search.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  cursor: ${props=>props.active ? 'text' : 'pointer'};
  font-size: 15px;
  transition: ease-in-out .4s all;
`;
