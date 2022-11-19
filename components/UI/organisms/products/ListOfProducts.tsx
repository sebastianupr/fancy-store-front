import { useMemo } from "react";
import styled from "styled-components";

import ProductCard from "@components/UI/molecules/ProductCard";
import ProductCardSkeleton from "@components/UI/molecules/skeletons/ProductCardSkeleton";

import type { Product } from "@shared/types/products.types";

type Props = {
  isLoading: boolean;
  products: Product[];
};

export default function ListOfProducts({
  isLoading = false,
  products = [],
}: Props) {
  const renderSkeletons = useMemo(
    () => [1, 2, 3, 4].map((item) => <ProductCardSkeleton key={item} />),
    []
  );

  return (
    <ListContainer data-test-id="products-list">
      {isLoading
        ? renderSkeletons
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
  grid-column-gap: 0.4rem;
  width: 100%;
`;
