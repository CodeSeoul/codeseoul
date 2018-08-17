import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { PrimaryFont } from './variable'

const baseStyles = () => injectGlobal`
  ${reset}

  body {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: ${PrimaryFont}
  }
`

export default baseStyles