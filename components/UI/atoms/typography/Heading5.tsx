import styled from "styled-components";

export default function Heading5({ children }: { children: React.ReactNode }) {
  return <H5>{children}</H5>;
}

const H5 = styled.h5`
  ${(props) => props.theme.fontStyles.heading5};
`;
