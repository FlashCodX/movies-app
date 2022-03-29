import {
  Card,
  Title,
  ImageContainer,
  Image,
  Overlay,
  CardInfo,
  Plot,
} from "../MovieCard/CardStyles";

export const MovieCard = ({ movie }: any) => (
  <Card className="movie_card">
    <ImageContainer>
      <Image src={movie.info.image_url} alt="" />
      <Overlay className="overlay" />
    </ImageContainer>
    <CardInfo>
      <Title>{movie.title}</Title>
      <Plot>{movie.info.plot}</Plot>
    </CardInfo>
  </Card>
);
