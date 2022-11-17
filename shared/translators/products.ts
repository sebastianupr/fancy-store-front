import type { Node } from "@graphql/products.types"
import type { Product } from "@shared/types/products.types"
import { formatFiat } from "@shared/utils/currency"

export const translateProductsQuery = (productNodes: Node[]): Product[] => {
  return productNodes.map(({ node }) => {
    const [{ node: { price } }] = node.variants.edges;

    return {
      id: node.id,
      handle: node.handle,
      title: node.title,
      description: node.description,
      image: node.featuredImage
        ? {
          id: node.featuredImage.id,
          url: node.featuredImage.url,
        }
        : null,
      productType: node.productType ?? null,
      totalInventory: node.totalInventory ?? 0,
      price: formatFiat(price),
      createdAt: node.createdAt,
      updatedAt:  node.updatedAt,
    }
  })
}