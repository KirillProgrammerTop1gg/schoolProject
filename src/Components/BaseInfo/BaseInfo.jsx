import styled from "styled-components";
import BaseCircle from "../BaseCircle/BaseCircle";

const Title = styled.h2`
    font-size: 32px;
`;
const Circles = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: 30px auto;
    padding: 0 15px;
`;

export default ({ infos }) => <>
    <Title data-aos="zoom-in">Основна інформація про Луку:</Title>
    <Circles>
        {infos.map((info, idx) => <BaseCircle id={idx} text={info} />)}
    </Circles>
</>