import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import type { InputProps } from "@shared/types/dom.types";

export default function SearchInput({ name, onChange }: InputProps) {
  return (
    <SearchInputContainer>
      <Input name={name} onChange={onChange} placeholder="Search..." />
      <Icon>
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
`;
