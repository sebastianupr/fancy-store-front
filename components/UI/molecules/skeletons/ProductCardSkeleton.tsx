import styled from "styled-components";

export default function ProductCardSkeleton() {
  return (
    <CardSkeleton>
      <ProductSkeleton />
    </CardSkeleton>
  );
}

const CardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductSkeleton = styled.div`
  height: 12rem;
  width: 11rem;
  animation: ${(props) => props.theme.keyframes.skeletonKeyframes} 1300ms
    ease-in-out infinite;
  background: #eee 200px 100% no-repeat;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  border-radius: ${(props) => props.theme.borderRadiuses.xMedium};
  margin-bottom: 1.25rem;
`;
