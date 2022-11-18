import styled from "styled-components";
import Image from "next/image";

import type { Product } from "@shared/types/products.types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { title, image, price } = product;
  return (
    <CardContainer color="">
      {image?.url ? (
        <Image
          src={image.url}
          alt={`${title} - image`}
          width={75}
          height={75}
        />
      ) : null}

      <ProductInfo>
        <h5>{title}</h5>
        <h6>{price}</h6>
      </ProductInfo>
    </CardContainer>
  );
}

const CardContainer = styled.div<{ color: "" }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  max-width: 10rem;
  height: 9rem;
  margin-bottom: 1.1rem;
  background-color: ${(props) => props.theme.colors.lightGreen};

  border-radius: ${(props) => props.theme.borderRadiuses.xMedium};
  cursor: pointer;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5,
  h6 {
    margin: 0;
  }

  h5 {
    color: ${(props) => props.theme.colors.black};
  }
  h6 {
    color: ${(props) => props.theme.colors.darkGray};
  }
`;
