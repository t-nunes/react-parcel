import { css } from "styled-components";
import { darken } from "polished";
import { colors } from "/theme";

export const buttonColors = ({ color: colorName }) => {
  if (!colorName && colors.includes(colorName)) return null;
  const color = colors[colorName];

  return css`
    background: ${color};

    :hover {
      background: ${darken(0.1, color)};
    }
  `;
};
