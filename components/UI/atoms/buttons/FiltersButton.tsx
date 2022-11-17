import styled from "styled-components";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import useTheme from "@hooks/useTheme";

export default function FiltersButton() {
  const theme = useTheme();

  return (
    <ButtonContainer>
      <TbAdjustmentsHorizontal color={theme.colors.white} size="1.5rem" />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;

  width: min-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
`;