export type ProductsQuery = {
  products: {
    edges: Node[];
    __typename: "Products";
  };
};

export type Node = {
  node: {
    id: string;
    handle: string;
    description: string;
    featuredImage: FeaturedImage | null;
    productType: string | null;
    title: string;
    totalInventory: 0;
    variants: Variants;
    createdAt: string
    updatedAt: string;
  }
  __typename: "Node";
};

export type FeaturedImage = {
  id: string;
  url: string;
  __typename: "FeaturedImage";
};

export type Variants = {
  edges: {
    node: {
      price: string;
      __typename: "VariantNode"
    },
    __typename: "VariantEdge"
  }[]
}
