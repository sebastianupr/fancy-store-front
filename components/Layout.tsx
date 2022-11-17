import styled from "styled-components";

import Navbar from "./UI/molecules/Navbar";
import BottomBar from "./UI/molecules/BottomBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutContentContainer>
        <Navbar />
        <main>{children}</main>
      </LayoutContentContainer>
      <BottomBar />
    </>
  );
}

const LayoutContentContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 1rem 5rem 1rem;
  overflow: auto;
`;
