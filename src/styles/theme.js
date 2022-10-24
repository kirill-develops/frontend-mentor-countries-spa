import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& > fieldset": {
            borderColor: 'rgba(0,0,0,0)'
          }
        }
      }
    }
  }
});

export const lightTheme = createTheme(theme, {
  palette: {
    type: 'light',
    primary: {
      main: '#191b1c',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f9f9f9',
    },
    text: {
      primary: '#191b1c',
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff"
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff"
        }
      }
    }
  }
})

export const darkTheme = createTheme(theme, {
  palette: {
    type: 'dark',
    primary: {
      main: '#feffff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#192229',
      paper: '#212a34',
    },
    text: {
      primary: '#feffff',
      secondary: '#feffff',
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: "#212a34"
        },
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& > svg": {
            color: "rgba(255,255,255,0.54)"
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#212a34',
        }
      }
    }
  }
})

export const columnFlexProps = { display: 'flex', flexDirection: 'column' };

export const mainStyleProps = {
  backgroundColor: 'background.default',
  flexGrow: 1,
  height: "100%"
}

export const countryPageFontProps = {
  fontSize: 16
}

export const descriptorFontProps = {
  ...countryPageFontProps,
  fontWeight: 600,
}

export default theme;