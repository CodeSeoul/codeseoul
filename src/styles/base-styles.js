import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { PrimaryFont } from './variable'

const baseStyles = () => injectGlobal`
  ${reset}

  html {
    height : 100vh;
  }

  body {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: ${PrimaryFont};
    height : 100% !important;
    #root{
      height : 100%;
    }
    .primary-layout{
      height : 100%;
    }
    main{
      min-height : 100vh;
    }
  }
`

export default baseStyles