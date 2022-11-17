import { Provider } from "react-redux";
import store from "@store";

export default function StoreContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
