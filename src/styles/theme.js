import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
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
  }
});

export const lightTheme = createTheme(theme, {
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
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

export const columnFlexProps = { display: 'flex', flexDirection: 'column' }

export default theme;