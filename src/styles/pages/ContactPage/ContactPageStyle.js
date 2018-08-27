import styled from 'styled-components';
import * as style from "../../variable";

const ContactPageStyle = styled.div`

  header{
      font-size : 3rem;
      min-height : 200px;
      display : flex;
      flex-direction : column;
      justify-content :center;
      align-items : center;
  }
  
  .primary-contact{
      display : flex;
      flex-wrap : wrap;
      justify-content : center;
      *{
          margin : 0 auto;
          padding : 0 50px;
      }
  }

  .social-media ul{
    display : flex;
      flex-wrap : wrap;
      justify-content : center;
      li{
          margin : 0 auto;
      }
  }
`

export default ContactPageStyle;