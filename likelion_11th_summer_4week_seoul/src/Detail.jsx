import { useLocation, useNavigate } from "react-router";
import { styled } from "styled-components";


const DetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: black;
`;

const Notice = styled.div`
  padding-top: 30px;
  font-size: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  padding: 20px;
  background-color: #78f578;
`;

const DetailDate = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: end;
  padding-right: 20px;
`;

const DetailLocation = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: start;
  padding: 5px 0px 10px 0px;
  color: black;
`;

const DetailSum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 0px 10px 0px;
`;

const DetailAir = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px 10px 0px;
`;

const DetailDegree = styled.div`
  display: flex;
  font-size: 20px;
  padding: 5px 0px 10px 0px;
  width: 200px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  background-color: orange;
  border-radius: 20px;
  font-weight: bold;
`;

const BackButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

// Detail.jsx

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use the useNavigate hook
  const { MSRDT, MSRSTE_NM, MSRRGN_NM, PM10, PM25, IDEX_NM, IDEX_MVL, O3, ARPLT_MAIN } = location.state; // 데이터 비구조화 할당
  
  return (
    <>
    <DetailContainer>
      <CardContainer>
      <DetailDate>측정일: {MSRDT}</DetailDate>
      <DetailLocation>{MSRRGN_NM} | {MSRSTE_NM}</DetailLocation>
      <DetailSum>
        <DetailAir>
        <div>미세먼지: {PM10}</div>
        <div>초미세먼지농도: {PM25}</div>
        <div>통합대기환경지수: {IDEX_MVL}</div>
        <div>오존: {O3}</div>
        <div>지수결정물질: {ARPLT_MAIN}</div>
        </DetailAir>
      <DetailDegree>통합대기환경등급<br></br>{IDEX_NM}</DetailDegree>
      </DetailSum>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
      </CardContainer>
      <Notice>다시 돌아가려면<br></br>Go Back 버튼을 누르세요!</Notice>
    </DetailContainer>
    </>
  );
};

export default Detail;
