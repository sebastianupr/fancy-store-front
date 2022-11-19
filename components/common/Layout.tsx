import styled from "styled-components";

import Navbar from "@components/UI/molecules/Navbar";
import BottomBar from "@components/UI/molecules/BottomBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutContentContainer data-test-id="layout-container">
        <Navbar />
        {children}
        <BottomBar.SafeArea />
      </LayoutContentContainer>
      <BottomBar />
    </>
  );
}

const LayoutContentContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 1rem;
  overflow: auto;
`;
