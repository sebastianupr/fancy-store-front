import styled from "styled-components";
import ShoppingCartButton from "@components/UI/atoms/buttons/ShoppingCartButton";

export default function Navbar() {
  return (
    <NavBarContainer>
      <NavBarHeading>Home</NavBarHeading>

      <ShoppingCartButton />
    </NavBarContainer>
  );
}

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavBarHeading = styled.h2`
  align-self: center;
`;
