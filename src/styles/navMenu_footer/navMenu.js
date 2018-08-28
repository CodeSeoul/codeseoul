import styled from 'styled-components';
import { PrimaryFont, PrimaryColor } from '../variable';
import header from '../../images/header.png';

const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  border-top: 5px solid #bf1e2e;
  background-image: url(${header});
  background-size: 100% 6rem;

  .nav-logo {
    align-self: center;
  }
  img {
    width: 17vw;
    height: 3.5vw;
  }
  div.nav-links {
    display: flex;
    justify-content: space-around;
    margin: 1rem;
    width: 50%;
  }
  div.nav-links a {
    text-decoration: none;
    font-size: 1.2rem;
    font-family: ${PrimaryFont};
    color: black;
  }
`;

export default NavMenuWrapper;
