import { ThemeProvider } from "styled-components"
import { GlobalStyle} from '../src/styles/global'
import { theme} from '../src/styles/themes/theme'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story/>
      <GlobalStyle/>
    </ThemeProvider>
  )
]