import styled from "styled-components";
import colors from "../../design";

export default function Footer() {
  return <FooterStyled>Copyright 2024 Wealth Health</FooterStyled>;
}

const FooterStyled = styled.footer`
  display: none;
  justify-content: center;
  padding: 1em 0 2em;
  border-top: 2px solid ${colors.grey700};
`;