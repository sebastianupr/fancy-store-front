import styled from "styled-components";

export default function Heading5({ children }: { children: React.ReactNode }) {
  return <H5>{children}</H5>;
}

const H5 = styled.h5`
  margin: 0;
  color: ${(props) => props.theme.colors.black};
`;
