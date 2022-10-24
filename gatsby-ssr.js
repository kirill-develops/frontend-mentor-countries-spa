import React from "react";
import { darkTheme, lightTheme } from "./src/styles/theme";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    return 'light';  
  }

  const colorMode = getInitialColorMode();
  const root = document.body;
  root.style.setProperty(
    'color',
    colorMode === 'light'
      ? '${lightTheme.palette.text.primary}'
      : '${darkTheme.palette.text.primary}'
  );
  root.style.setProperty(
    'background-color',
    colorMode === 'light'
      ? '${lightTheme.palette.background.default}'
      : '${darkTheme.palette.background.default}'
  );
  root.style.setProperty('--initial-color-mode', colorMode);
})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};