import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  color?: string;
};

export default function Paragraph({ children, color }: Props) {
  return <P color={color}>{children}</P>;
}

const P = styled.p<{ color?: string }>`
  ${({ theme, color }) => {
    const {
      fontStyles: { paragraph },
    } = theme;

    return {
      ...paragraph,
      color: color ?? paragraph.color,
    };
  }}
`;
