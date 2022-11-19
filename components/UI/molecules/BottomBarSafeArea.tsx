import styled from "styled-components";
import useIsSSR from "@hooks/useIsSSR";
import { iOS } from "@shared/utils/device";

export default function BottomBarSafeArea() {
  const isSSR = useIsSSR();
  return !isSSR ? <SafeArea /> : null;
}

const SafeArea = styled.div`
  width: 100%;
  height: ${() => iOS() ? '9rem' : '3.5rem'};
`;