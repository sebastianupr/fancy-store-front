import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import useTheme from "@hooks/useTheme";

export default function ShoppingCartButton() {
  const theme = useTheme();
  return (
    <ShoppingCartContainer>
      <MdShoppingCart color={theme.colors.primary} />
    </ShoppingCartContainer>
  );
}

const ShoppingCartContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.25rem;
  height: 2.25rem;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadiuses.rounded};
`;
