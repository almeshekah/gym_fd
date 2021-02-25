import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.grey};
  
`;

export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  &.active {
    color: ${(props) => props.theme.red} !important;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${(props) => props.theme.red} !important;
`;

export const Description = styled.p`
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const Keyboard = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.price {
      color: ${(props) => props.theme.hamza};
    }
  }
`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 110%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const StyledSearchBar = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 70%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
`;

export const CreateButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: green;
  }
`;

export const BackButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
  margin-top: 2%;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.pink};
  }
`;