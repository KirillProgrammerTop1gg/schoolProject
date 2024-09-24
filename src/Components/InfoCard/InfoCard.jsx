import styled from "styled-components";

const Container = styled.li`
    display: flex;
    gap: 200px;
    justify-content: space-between;
    height: 400px;
`;
const Card = styled.div`
    border-radius: 10px;
    background: #a4ed8c;
    padding: 15px;
`;
const TitlePar = styled.h3`
    text-align: left;
    font-size: 30px;
`;
const TextPar = styled.p`
    text-align: left;
    margin-top: 10px;
    font-size: 20px;
`;
const Photo = styled.img`
    height: 100%;
    border-radius: 15px;
`;

export default ({ id, info }) => <>
    <Container key={id}>
        {info.id%2 === 0 && <div>
            <Photo src={info.img} data-aos="zoom-in" alt="img"  data-aos-duration="650" />
        </div>}
        <Card data-aos={`fade-${info.id%2!==0 ? 'left' : 'right'}`} key={id*2+1} data-aos-duration="500">
            <TitlePar data-aos="fade-down" data-aos-duration="750">{info.id}. {info.title}</TitlePar>
            {info.text.map(par => <TextPar data-aos="zoom-out-up" data-aos-duration="750">{par}</TextPar>)}
        </Card>
        {info.id%2 !== 0 && <div>
            <Photo data-aos="zoom-in" src={info.img} alt="img"  data-aos-duration="650" />
        </div>}
    </Container>
</>