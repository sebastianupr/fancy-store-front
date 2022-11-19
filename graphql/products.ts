import { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";

import { translateProductsQuery } from "@shared/translators/products";

import { PAGE_SIZE } from "@shared/constants/pagination";

import type { Product } from "@shared/types/products.types";
import type { ProductsQuery, ProductsQueryVariables } from "./productsTypes";

const GET_PRODUCTS = gql`
  query GetProducts(
    $pageSize: Int!
    $searchKeyword: String
    $nextCursor: String
  ) {
    products(
      pageSize: $pageSize
      searchKeyword: $searchKeyword
      nextCursor: $nextCursor
    ) {
      edges {
        node {
          id
          handle
          title
          description
          totalInventory
          productType
          createdAt
          updatedAt
          featuredImage {
            id
            url
          }
          variants {
            edges {
              node {
                price
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const useProductsCatalog = () => {
  const defaultVariables: ProductsQueryVariables = useMemo(
    () => ({ pageSize: PAGE_SIZE }),
    []
  );

  const { data, fetchMore, refetch, ...rest } = useQuery<
    ProductsQuery,
    ProductsQueryVariables
  >(GET_PRODUCTS, {
    variables: defaultVariables,
    notifyOnNetworkStatusChange: true,
  });

  const products: Product[] = translateProductsQuery(
    data?.products?.edges ?? []
  );

  const loadMore = async ({
    searchKeyword,
  }: Partial<ProductsQueryVariables> = {}) => {
    if (searchKeyword || searchKeyword === "") {
      return refetch({
        ...defaultVariables,
        searchKeyword,
      });
    }

    if (data?.products?.pageInfo?.hasNextPage) {
      return fetchMore({
        variables: {
          ...defaultVariables,
          nextCursor: data?.products?.pageInfo?.endCursor ?? undefined,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => ({
          products: {
            edges: [
              ...(previousQueryResult?.products?.edges ?? []),
              ...fetchMoreResult.products.edges,
            ],
            pageInfo: fetchMoreResult.products.pageInfo,
            __typename: fetchMoreResult.products.__typename,
          },
        }),
      });
    }
  };

  return {
    ...rest,
    data: products,
    loadMore,
  };
};
