import styled, { StyledComponent } from "styled-components";

import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";

import useTheme from "@hooks/useTheme";

import HomeButton from "@components/UI/atoms/buttons/HomeButton";

const BottomBar: React.FC & {
  SafeArea: StyledComponent<"div", any, {}, never>;
} = () => {
  const theme = useTheme();

  return (
    <BottomBarContainer>
      <NavList>
        <div>
          <HomeButton />
        </div>

        <MdFavorite color={theme.colors.lightGray} size="1.2rem" />
        <HiShoppingCart color={theme.colors.lightGray} size="1.2rem" />
        <BsBoxSeam color={theme.colors.lightGray} size="1.2rem" />
        <IoPersonCircleSharp color={theme.colors.lightGray} size="1.2rem" />
      </NavList>
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  width: 100%;
  height: 3.5rem;

  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    position: absolute;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 0.25rem;
`;

const SafeArea = styled.div`
  width: 100%;
  height: 8.5rem;
`;

BottomBar.SafeArea = SafeArea;

export default BottomBar;
