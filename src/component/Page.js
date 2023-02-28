import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(62.93deg, #26619c 39.5%, #f5bb0a 89.5%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
