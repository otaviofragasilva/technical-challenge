import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import * as S from "./styles";

interface CardProps {
  title: string;
  rating: number;
  imageUrl: string;
  releaseDate: string;
}

export const Card = ({ title, rating, imageUrl, releaseDate }: CardProps) => {
  const truncated = Math.floor(Number(rating) * 10) / 10;
  const starPercent = (truncated / 10) * 100;
  const isPositiveRating = rating > 6.0 ? true : false;

  dayjs.locale("pt-br");
  const formattedDate = dayjs(releaseDate).format("D [de] MMM [de] YYYY");

  return (
    <S.Container>
      <S.Image src={import.meta.env.VITE_API_IMAGE_URL + imageUrl} />

      <S.InfosContainer>
        <S.Title>{title}</S.Title>

        <S.BottomInfo>
          <S.ReleaseDate>{`Data: ${formattedDate}`}</S.ReleaseDate>

          <S.Rating>
            {truncated}
            <S.StarsWrapper>
              <S.EmptyStars>★★★★★</S.EmptyStars>
              <S.FullStars
                $width={starPercent}
                $positiveRating={isPositiveRating}
              >
                ★★★★★
              </S.FullStars>
            </S.StarsWrapper>
          </S.Rating>
        </S.BottomInfo>
      </S.InfosContainer>
    </S.Container>
  );
};
