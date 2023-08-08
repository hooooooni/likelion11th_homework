import { useEffect, useState } from "react";
import axios from "../../api/axios";
import MovieModal from "../MovieModal/MovieModal";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";;
import {
    RowContainer, RowPosters, RowPoster, RowTitle
} from './Styled';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function Row({ isLarge, title, id, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    //modal이 열린 상태 저장
    const [modalOpen, setModalOpen] = useState(false);
    // 선택한 영화를 저장
    const [movieSelected, setMovieSelected] = useState({});

    // 영화를 선택하면 해당 영화의 정보를 가진 모달창을 열기 위함
    const handleClick = (movie) => {
      setModalOpen(true);
      setMovieSelected(movie);
    }

    useEffect(() => {
      fetchMovieData();
    }, [fetchUrl]);
    
    //비동기 함수
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

  return (
    <>
    {modalOpen && (
      <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> //컴포넌트 가져오기
    )}
      <RowContainer>
        <RowTitle>{title}</RowTitle>
        <Swiper
          slidesPerView={title === "NETFLIX ORIGINALS" ? 13 : 6}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="Swiper"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <RowPoster
                isLarge={isLarge ? "true" : "false"}
                src={`https://image.tmdb.org/t/p/original/${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </RowContainer>
    </>
  )
}