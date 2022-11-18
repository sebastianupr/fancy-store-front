import styled from "styled-components";

import SearchInput from "@components/UI/atoms/inputs/SearchInput";
import FiltersButton from "../atoms/buttons/FiltersButton";
import { InputProps } from "@shared/types/dom.types";

type SearchBarProps = {
  onSearch: () => void;
  onChange: InputProps["onChange"];
};

export default function SearchBar({ onChange, onSearch }: SearchBarProps) {
  return (
    <SearchBarContainer>
      <SearchInput
        name="searchKeyword"
        onChange={onChange}
        onSearch={onSearch}
      />
      <FiltersButton />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  place-items: center;
`;
