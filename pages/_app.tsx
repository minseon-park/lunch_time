import type { AppProps } from "next/app";
import '../styles/globals.css';

import styled, { ThemeProvider } from "styled-components";

import Toggle from "../component/atom/Toggle";
import { useDarkMode } from "../hooks/useDarkMode";
import { light, dark } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === "light" ? { mode: light }: { mode: dark };
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Background>
        <Component {...pageProps} />;
        <Toggle themeMode={themeMode} toggleTheme = {toggleTheme}/>
      </Background>
    </ThemeProvider>
  </>
  );
}

const Background = styled.div`
  background-color: ${({ theme }) => theme.mode.mainBackground};
`;


export default MyApp;