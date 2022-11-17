import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { BsBoxSeam } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";

import styled from "styled-components";
import useTheme from "@hooks/useTheme";

import HomeButton from "@components/UI/atoms/buttons/HomeButton";

export default function BottomBar() {
  const theme = useTheme();

  return (
    <BottomBarContainer>
      <NavList>
        <div>
          <HomeButton />
        </div>

        <MdFavorite color={theme.colors.lightGray} />
        <HiShoppingCart color={theme.colors.lightGray} />
        <BsBoxSeam color={theme.colors.lightGray} />
        <IoPersonCircleSharp color={theme.colors.lightGray} />
      </NavList>
    </BottomBarContainer>
  );
}

const BottomBarContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  width: 100%;
  height: 5rem;

  background-color: ${(props) => props.theme.colors.white};
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding-top: 0.75rem;
`;
