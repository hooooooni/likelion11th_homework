import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style"; // You might want to import styled components here
import { useDebounce } from "../../hooks/useDebounce";

function SearchPage() {
    const location = useLocation(); // Rename useLocation() to location
    console.log("location: ", location); // It's good to console.log the location for debugging purposes
    const useQuery = () => {
        return new URLSearchParams(location.search); // Use location instead of useLocation()
    };
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);

    let query = useQuery();

    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            );
            setSearchResult(request.data.results);
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    //검색 결과 렌더링 함수
    // 검색 결과 렌더링 함수
    const renderSearchResults = () => {
        return searchResult.length > 0 ? (
            <S.SearchContainer>
                {searchResult.map((movie) => {
                    if (
                        movie.backdrop_path !== null &&
                        movie.media_type !== "person"
                    ) {
                        const movieImageUrl =
                            "https://image.tmdb.org/t/p/w500" +
                            movie.backdrop_path;
                        return (
                            <S.Movie key={movie.id}>
                                <S.MovieColumnPoster
                                    onClick={() => navigate(`/${movie.id}`)}
                                >
                                    <S.MoviePoster
                                        src={movieImageUrl}
                                        alt="movie"
                                    />
                                </S.MovieColumnPoster>
                            </S.Movie>
                        );
                    }
                })}
            </S.SearchContainer>
        ) : (
            <S.NoResults>
                <S.NoResultTextWrapper>
                    `찾고자하는 검색어${debouncedSearchTerm}에 맞는 영화가 없습니다.`
                </S.NoResultTextWrapper>
            </S.NoResults>
        );
    };

    return <S.SearchContent>{renderSearchResults()}</S.SearchContent>;
}

export default SearchPage;
