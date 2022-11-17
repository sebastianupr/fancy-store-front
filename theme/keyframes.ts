import { keyframes } from "styled-components";

export const skeletonKeyframes = keyframes`
0% {
  background-position: -200px 0;
}
100% {
  background-position: calc(200px + 100%) 0;
}
`;