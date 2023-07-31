import { BodySection, DataTable, HeadSection, HeadText, HomeContainer, TableTd, TableTh } from "./components/BodyStyle";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router";


const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // State 작성------------------------------------------------
  const [weatherData, setWeatherData] = useState([]);
  const {VITE_APP_API_KEY} = import.meta.env;

  // Function 작성---------------------------------------------
  const fetchData = async() => {
    try {
      const response = await axios.get(`http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/25/`);
      setWeatherData(response.data.RealtimeCityAir.row);
    } catch (error) {
      console.log("데이터를 불러오는 데 실패했습니다");
    }

  };

  // OPEN API 비동기로 불러와 State에 저장하기

  // ComponentDidMount-----------------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = weatherData.sort((a,b) => a.PM10 - b.pM10).slice(0,3);
  console.log(sortedData);

    // 통합대기환경등급에 따라 글씨색 변경 함수
    const getTextColor = (grade) => {
      switch (grade) {
        case '좋음':
          return 'green';
        case '나쁨':
          return 'red';
        case '점검 중':
          return '-';
        default:
          return 'white';
      }
    };  
  
  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <DataTable>
          <thead>
            <tr>
              <TableTh>측정일</TableTh>
              <TableTh>측정소</TableTh>
              <TableTh>미세먼지</TableTh>
              <TableTh>미세먼지농도</TableTh>
              <TableTh>통합대기환경등급</TableTh>
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((lion, idx) => (
                <tr key={idx} style={{ backgroundColor: lion.MSRSTE_NM === '은평구' ? 'orange' : '' }} onClick={() => navigate(`/detail/${lion.MSRSTE_NM}`, { state: lion })}>
                <TableTd>{lion.MSRDT}</TableTd>
                <TableTd
                  onClick={() => navigate(`/detail/${lion.MSRSTE_NM}`)}>
                  {lion.MSRSTE_NM}
                </TableTd>
                <TableTd style={{ color: sortedData.includes(lion) ? 'yellow' : '' }}>{lion.PM10}</TableTd>
                <TableTd>{lion.PM25}</TableTd>
                <TableTd style={{ color: getTextColor(lion.IDEX_NM) }}>{lion.IDEX_NM}</TableTd>
                <TableTd>{lion.IDEX_MVL}</TableTd>
              </tr>
            ))}
          </tbody>

        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;