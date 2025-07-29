import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;

        font-style: normal;

        font-size: 30px;
        font-weight: 400;
        color: black;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        color: black;
        background-color: white;
      }

      #root {
        width: 100%;
        height: 100%;
        color: black;
        background-color: white;
      }
    `}
  />
);

export default GlobalStyle;
