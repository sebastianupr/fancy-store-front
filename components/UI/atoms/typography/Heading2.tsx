import styled from "styled-components";

export default function Heading2({ children }: { children: React.ReactNode }) {
  return <H4>{children}</H4>;
}

const H4 = styled.h4`
  ${(props) => props.theme.fontStyles.heading2};
`;
