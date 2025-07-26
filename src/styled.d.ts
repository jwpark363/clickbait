import 'styled-components';

interface IStyle{
    style1: string,
    style2: string,
    style3: string,
    style4: string,
    style5: string,
    style6: string,
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderColor: IStyle;
    backgroundColor:IStyle;
    color: IStyle;
  }
}