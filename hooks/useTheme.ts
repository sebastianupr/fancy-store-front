import { useTheme as useStyledTheme } from "styled-components";
import theme from "@theme";

type Theme = () => typeof theme;

const useTheme: Theme = useStyledTheme as Theme;

export default useTheme