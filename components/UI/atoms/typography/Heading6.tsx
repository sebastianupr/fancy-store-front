import styled from "styled-components";

export default function Heading6({ children }: { children: React.ReactNode }) {
  return <H6>{children}</H6>;
}

const H6 = styled.h6`
  ${(props) => props.theme.fontStyles.heading6};
`;
