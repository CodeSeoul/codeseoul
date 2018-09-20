import styled from "styled-components";
import * as style from "../../variable";

let Header = styled.header`
  font-size: 7vmin;
  background-color: #f77f00;
  height: 12vmin;
  color: white;
  font-family: Roboto, sans-serif;
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 25%, 100% 0%);
  clip-path: polygon(0 0, 0 100%, 100% 25%, 100% 0%);
  padding: 0.5rem 0 0 3rem;
`;

export default Header;
