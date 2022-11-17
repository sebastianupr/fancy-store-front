import { gql, useQuery } from "@apollo/client";

import { translateProductsQuery } from "@shared/translators/products";

import type { Product } from "@shared/types/products.types";
import type { ProductsQuery } from "./products.types";

const GET_PRODUCTS = gql`
  query GetsProducts {
    products {
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
    }
  }
`;

export const useProductsCatalog = () => {
  const { data, ...rest } = useQuery<ProductsQuery>(GET_PRODUCTS);
  console.log('data', data)
  const products: Product[] = translateProductsQuery((data?.products?.edges ?? []))

  return {
    ...rest,
    data: products
  }
};
