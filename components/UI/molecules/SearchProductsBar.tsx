import styled from "styled-components";

import SearchInput from "@components/UI/atoms/inputs/SearchInput";
import FiltersButton from "../atoms/buttons/FiltersButton";

export default function SearchBar() {

  return (
    <SearchBarContainer>
      <SearchInput name="search" />
      <FiltersButton />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  place-items: center;
`;
