import React from 'react';
import style from "styled-components";

const FootStyle = style.div `
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #909f86a7;
  border: 2px solid grey;
  font-size: 11px;
  padding-left: 7%
`;

const Footer = () => {
  return(
    <FootStyle>
      <p>&copy; 2020 - Keturah Howard, Jamison Cozart, Zakkrey Short, Stephanie Podolak</p>
    </FootStyle>
  )
}

export default Footer;