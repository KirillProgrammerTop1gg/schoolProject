import styled from "styled-components";
import InfoCard from "../InfoCard/InfoCard";

const Title = styled.h2`
    font-size: 32px;
`;
const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: 30px auto;
    padding: 0 30px;
`;

export default ({ biography }) => <>
    <Title data-aos="fade-down">Більш подробна інформація:</Title>
    <Cards>
        {biography.map((infoObj, idx) => <>
            <InfoCard id={idx} info={infoObj} />
        </>)}
    </Cards>
</>