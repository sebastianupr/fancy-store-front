import Image from "next/image";
import styled from "styled-components";

import Heading5 from "@components/UI/atoms/typography/Heading5";
import Heading6 from "@components/UI/atoms/typography/Heading6";

import type { Product } from "@shared/types/products.types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { title, image, price } = product;
  return (
    <CardContainer>
      {image?.url ? (
        <Image
          src={image.url}
          alt={`${title} - image`}
          width={75}
          height={75}
        />
      ) : null}

      <ProductInfo>
        <Heading5>{title}</Heading5>
        <Heading6>{price}</Heading6>
      </ProductInfo>
    </CardContainer>
  );
}

const CardContainer = styled.div<{ color?: "" }>`
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
`;
