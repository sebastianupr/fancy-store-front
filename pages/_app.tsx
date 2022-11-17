import StoreContainer from "@containers/StoreContainer";
import ApolloContainer from "@containers/ApolloContainer";
import ThemeContainer from "@containers/ThemeContainer";

import "@theme/globals.css";
import type { AppProps } from "next/app";

type PageComponent = AppProps["Component"] & {
  getLayout: (component: React.ReactNode) => JSX.Element;
};

type Props = AppProps & {
  Component: PageComponent;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StoreContainer>
      <ApolloContainer>
        <ThemeContainer>
          {getLayout(<Component {...pageProps} />)}
        </ThemeContainer>
      </ApolloContainer>
    </StoreContainer>
  );
}
