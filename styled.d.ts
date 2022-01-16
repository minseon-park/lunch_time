// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  // 우리가 아는 타입지정을 여기서 다해주고 불러서 쓰기

  // ThemeProvider theme에 적용할 타입으로, theme의 속성과 동일하게 작성
  export interface DefaultTheme {
    dark: {
      mainBackground: string;
      // neutral color
      title: string;
      primaryText: string;
      secondaryText: string;
      disable: string;
      border: string;
      divider: string;
      background: string;
      tableHeader: string;
    };
    light: {
      mainBackground: string;
      // neutral color
      title: string;
      primaryText: string;
      secondaryText: string;
      disable: string;
      border: string;
      divider: string;
      background: string;
      tableHeader: string;
      // point-color
      // point-color
    };
    response: {};
  }
}
