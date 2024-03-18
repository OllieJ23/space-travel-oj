import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --dark-blue: #0b0d17;
  --pale-blue: #d0d6f9;
  --white: #ffffff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
   
}

body {
    background-color: var(--dark-blue);
  color: var(--white);
font-family: "Barlow Condensed";
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;



}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

h1 {
    font-family: "Bellefair";
    font-size: 15rem;
    font-weight: 500;
}

h2{
      font-family: "Bellefair";
    font-size: 10rem;
}

h3{
      font-family: "Bellefair";
    font-size: 5.6rem;
}

h4{
      font-family: "Bellefair";
    font-size: 3.2rem;
}

h5{
 font-family: "Barlow Condensed";
 font-size: 28px;
 letter-spacing: 4.75px;
 font-weight: 400;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
