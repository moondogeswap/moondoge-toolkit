import styled, { DefaultTheme } from "styled-components";
import { space, SpaceProps } from "styled-system";

interface CardDefaultProps extends SpaceProps {
  theme: DefaultTheme;
  type: string;
}


const getStyles = ({ type, theme }: CardDefaultProps) => {
  const { isDark } = theme
  const typeMapStyles: {
    [key: string]: string
  } = {
    default: `box-shadow: 0px 6px 36px rgba(174, 140, 47, 0.24);`,
    defaultYellow: 'background: linear-gradient(180deg, #FFFFFF 0%, #FEF6E3 100%);box-shadow: 0px 6px 36px rgba(174, 140, 47, 0.24);',
    defaultWhite: 'box-shadow: 0px 4px 12px rgba(59, 41, 9, 0.08);',
    primary: 'background: linear-gradient(90deg, #FEF6E3 0%, #FEC23D 100%); box-shadow: 0px 6px 36px rgba(174, 140, 47, 0.24);',
    borderG: 'border: 1px solid #A56A46;',
    success: 'background: linear-gradient(90deg, #E9FFE4 0%, #3DFEF1 100%); box-shadow: 0px 6px 36px rgba(24, 194, 188, 0.24);',
    borderY: 'border:1px solid #FFB000;',
    purple: 'background: linear-gradient(90deg, #FADEFF 0%, #EBA7FF 100%); box-shadow: 0px 6px 36px rgba(207, 32, 226, 0.24);',
    light: isDark ?
      'border: 1px solid #4A3E32; background: linear-gradient(180deg, #514E4A 0%, #201F1E 100%);'
      : 'border: 1px solid #FFE7D8; background: linear-gradient(180deg, #FFFFFF 0%, #FEF6E3 100%);',
    green: 'background: linear-gradient(90deg, #EBFFFC 0%, #EBFF81 100%); box-shadow: 0px 6px 36px rgba(173, 206, 35, 0.24);',
    grey: isDark ? 'background: #231E1A;' : 'background: #FBFAF6;',
    lineSquare: 'border: 1px solid #A56A46;border-radius: 10px;',
    darkGrey: isDark ? 'background: #1C1C1C;' : 'background: #EEEEEE;border-radius: 10px;'
  }
  return typeMapStyles[type]
};

const CardDefault = styled.div<CardDefaultProps>`
  width: 230px;
  min-height:100px ;
  opacity: 1;
  border-radius: 20px;
  margin-bottom :40px;
  overflow: hidden;
  ${getStyles},
  ${space}
`;

CardDefault.defaultProps = {
  type: "default",
  mt: "6px"
};

export default CardDefault;
