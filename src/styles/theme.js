import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(','),
  },
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
})

export const darkTheme = createTheme(theme, {
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
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
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#212a34",
          "&.Mui-focused": {
            border: "1px solid #fff"
          }
        },
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: "#212a34"
        },
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#fff"
          }
        }
      }
    }
  }
})

export default theme;