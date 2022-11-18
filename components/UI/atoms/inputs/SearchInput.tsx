import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import type { InputProps, FormSubmitEvent } from "@shared/types/dom.types";

type Props = {
  onSearch: () => void;
} & InputProps;

export default function SearchInput({ name, onChange, type, onSearch }: Props) {
  return (
    <SearchInputContainer>
      <Input
        name={name}
        onChange={onChange}
        placeholder="Search..."
        type={type}
      />
      <Icon onClick={() => onSearch?.()}>
        <FiSearch />
      </Icon>
    </SearchInputContainer>
  );
}

const SearchInputContainer = styled.div`
  width: 100%;

  position: relative;
`;

const Input = styled.input<InputProps>`
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.75rem 1.2rem;
`;

const Icon = styled.span`
  position: absolute;
  top: 0.72rem;
  right: 0.75rem;
  cursor: pointer;
`;
