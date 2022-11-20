import { useState, useCallback } from "react";
import { InView } from "react-intersection-observer";
import styled from "styled-components";

import SearchBar from "@components/UI/molecules/SearchProductsBar";
import ListOfProducts from "@components/UI/organisms/products/ListOfProducts";
import Heading4 from "@components/UI/atoms/typography/Heading4";
import Paragraph from "@components/UI/atoms/typography/Paragraph";

import { useProductsCatalog } from "@graphql/products";

import useTheme from "@hooks/useTheme";

import type {
  InputChangeEvent,
  FormSubmitEvent,
} from "@shared/types/domTypes";

export default function ProductsCatalog() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const { data: products, loading, loadMore } = useProductsCatalog();

  const handleChangeSearch = useCallback((evt: InputChangeEvent) => {
    setSearchKeyword(evt.target.value ?? "");
  }, []);

  const handleSearch = (evt?: FormSubmitEvent) => {
    evt?.preventDefault();
    loadMore({ searchKeyword });
  };

  const handleViewChange = (inView: boolean) => {
    if (inView && products) loadMore();
  };

  const theme = useTheme();

  return (
    <ProductsCatalogContainer>
      <form onSubmit={handleSearch}>
        <SearchBar onChange={handleChangeSearch} onSearch={handleSearch} />
      </form>

      <ActionsRow>
        <Heading4>Popular</Heading4>
        <Paragraph color={theme.colors.lightGray}>View all</Paragraph>
      </ActionsRow>

      <ListOfProducts
        isLoading={loading && products.length === 0}
        products={products}
      />

      <InView onChange={handleViewChange} />
    </ProductsCatalogContainer>
  );
}

const ProductsCatalogContainer = styled.div`
  width: 100%;
`;

const ActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.25rem 0;
`;
