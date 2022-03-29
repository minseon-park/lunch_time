import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: {
      mainBackground: string;
      primaryText: string;
      secondaryText: string;
      background: string;
      themeIcon: string;
      border: string;
      divider: string;
    };
  }
}

