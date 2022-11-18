import * as keyframes from "./keyframes";

const colors = {
  primary: "#ff7c7f",
  background: '#f8f8f8',
  white: "#ffffff",
  black: "#040403",
  solidBlack: "#000000",
  darkGray: "#565657",
  lightGray: "#dbdbdb",
  lightGreen: "#ebf4c5"
}

const breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
}

const borderRadiuses = {
  rounded: '50px',
  medium: '0.5rem',
  xMedium: '0.75rem',
}

const fontStylesCommon = {
  margin: 0
}

const fontStyles = {
  heading3: {
    ...fontStylesCommon,
  },
  heading4: {
    ...fontStylesCommon,
    color: colors.black,
  },
  heading5: {
    ...fontStylesCommon,
    color: colors.black,
  },
  heading6: {
    ...fontStylesCommon,
    color: colors.darkGray
  },
  paragraph: {
    ...fontStylesCommon,
    color: colors.black,
  }
}

const theme = {
  colors,
  breakpoints,
  borderRadiuses,
  keyframes,
  fontStyles,
};

export default theme