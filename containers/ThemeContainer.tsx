import { Nunito_Sans } from "@next/font/google";
import { ThemeProvider } from "styled-components";
import theme from "@theme";

const nunito = Nunito_Sans({
  weight: ["800", "900"],
});

export default function ThemeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <style jsx global>{`
        html,body {
          padding: 0;
          margin: 0;
          font-family: ${nunito.style.fontFamily};
      `}</style>

    </>
  );
}
