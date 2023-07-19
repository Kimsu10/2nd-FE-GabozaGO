import { styled, createGlobalStyle } from 'styled-components';
import Comment from '../Review/Comment';

// import Review from '../Review/Review';

const ProductDetail = () => {
  return (
    <ProductDetailBody>
      <ProductBox>
        <ItemBox>
          <MainImage src="images/img2.jpg" alt="itemImage" />
          <ItemDescriptionBox>
            <ItemName>제주도 크루저여행</ItemName>
            <ItemDescription>
              <Tag> 제주도</Tag>
              &nbsp;| &nbsp;
              <Tag> 유람선</Tag>
            </ItemDescription>
            <Description>제주도에서 울릉도까지 초호화 크루즈여행</Description>
            <Rating>
              <Description>만족도 : ㅇㅇ 점</Description>
              &nbsp;★★★★☆
            </Rating>
            <RowDiv>
              <LikeButton>찜</LikeButton>
              <LikeButton>공유하기</LikeButton>
              <LikeButton>예약하기</LikeButton>
            </RowDiv>
          </ItemDescriptionBox>
          <DetailText>
            <CompanyText>(주)뱃사공</CompanyText>
            <CompanyText>000-0000-0000</CompanyText>
            <CompanyText>제주도 읍면리 크루저마을</CompanyText>
            <CompanyText>1000원</CompanyText>
          </DetailText>
        </ItemBox>
        {/*<Review /> */}
      </ProductBox>
      <Comment />
    </ProductDetailBody>
  );
};

export default ProductDetail;

const ProductDetailBody = styled.div`
  background: #f0f0f3;
`;

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  background-color: white;
  margin-top: 1.5em;
  box-shadow: 1px 1px 3px #d8d8d8;
  border-bottom: 1px solid #f0f0f0;
`;

const ItemDescriptionBox = styled.div`
  padding-left: 1em;
  width: 35em;
  height: 20em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const MainImage = styled.img`
  width: 35em;
  height: 23em;
  border-radius: 1em;
  margin-bottom: 1em;
`;

const ItemName = styled.h1`
  text-align: center;
`;

const ItemDescription = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Tag = styled.h5`
  font-size: 1.2em;
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.1em;
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35em;
  height: 7em;
  margin: 1em 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const LikeButton = styled.button`
  margin: 1em;
  border: none;
  width: 8em;
  height: 3em;
  border-radius: 0.9em;
  background-color: ${props => props.theme.mainColor};
  color: white;
  font-size: 1.2em;
`;

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1em;
  width: 32em;
  height: 9em;
  line-height: 120%;
  text-align: center;
  background-color: white;
  box-shadow: 1px 1px 3px #d8d8d8;
  border-bottom: 1px solid #f0f0f0;
  justify-content: center;
`;

const CompanyText = styled.h5`
  font-weight: 600;
`;