import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import useTheme from "@hooks/useTheme";

import type { ButtonProps } from "@shared/types/domTypes";

export default function HomeButton({ onClick }: ButtonProps) {
  const theme = useTheme();
  return (
    <HomeButtonContainer onClick={onClick}>
      <HomeButtonRounded>
        <AiFillHome color={theme.colors.white} size="1.15rem" />
      </HomeButtonRounded>
    </HomeButtonContainer>
  );
}

const HomeButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -0.8rem;
  left: 1rem;

  height: 3.7rem;
  width: 3.7rem;

  border-radius: ${(props) => props.theme.borderRadiuses.rounded};
  background-color: ${(props) => props.theme.colors.white};
`;

const HomeButtonRounded = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadiuses.rounded};
`;
