import { useProductsCatalog } from "@graphql/products";

import styled from "styled-components";

import Heading4 from "@components/UI/atoms/headings/Heading4";
import SearchBar from "@components/UI/molecules/SearchProductsBar";
import ListOfProducts from "@components/UI/organisms/products/ListOfProducts";

export default function ProductsCatalog() {
  const { data: products, error, loading } = useProductsCatalog();

  return (
    <ProductsCatalogContainer>
      <SearchBar />

      <ActionsRow>
        <Heading4>Popular</Heading4>
        <p>View all</p>
      </ActionsRow>

      <ListOfProducts isLoading={loading} products={products} />
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
`;
