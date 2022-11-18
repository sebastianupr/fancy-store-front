import { useState, useCallback } from "react";
import { useProductsCatalog } from "@graphql/products";
import { InView } from "react-intersection-observer";

import styled from "styled-components";

import Heading4 from "@components/UI/atoms/headings/Heading4";
import SearchBar from "@components/UI/molecules/SearchProductsBar";
import ListOfProducts from "@components/UI/organisms/products/ListOfProducts";

import type {
  InputChangeEvent,
  FormSubmitEvent,
} from "@shared/types/dom.types";

export default function ProductsCatalog() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const { data: products, loading, error, loadMore } = useProductsCatalog();

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

  return (
    <ProductsCatalogContainer>
      <form onSubmit={handleSearch}>
        <SearchBar onChange={handleChangeSearch} onSearch={handleSearch} />
      </form>

      <ActionsRow>
        <Heading4>Popular</Heading4>
        <p>View all</p>
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
