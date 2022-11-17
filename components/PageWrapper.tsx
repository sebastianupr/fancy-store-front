import styled from "styled-components";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppWrapperContainer>
      <AppWrapperContent>{children}</AppWrapperContent>
    </AppWrapperContainer>
  );
}

const AppWrapperContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: grid;
    place-content: center;
  }
`;

const AppWrapperContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  background-color: ${(props) => props.theme.colors.background};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 92.5vh;
    max-height: 45rem;
    width: 25rem;

    border-radius: 1rem;
    overflow: hidden;

    box-shadow: -4px 3px 40px -4px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: -4px 3px 40px -4px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: -4px 3px 40px -4px rgba(0, 0, 0, 0.35);
  }
`;
