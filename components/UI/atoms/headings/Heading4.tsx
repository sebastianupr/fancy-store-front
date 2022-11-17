import styled from "styled-components";

export default function Heading4({ children }: { children: React.ReactNode }) {
  return <H4>{children}</H4>;
}

const H4 = styled.h4`
  margin: 0;
  color: ${(props) => props.theme.colors.black};
`;
