import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global.ts"
import { TransactionsProvider } from "./contexts/TransactionsContext.tsx";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions/>
      </TransactionsProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
