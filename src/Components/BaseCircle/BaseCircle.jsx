import styled from "styled-components";

const Circle = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 10px solid #bd81eb;
    transition: all .3s ease-in;
    &:hover{
        border-color: #a348e8;
    }
    &>p{
        padding: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        transition: all .3s ease-in;
        &:hover{
            transform: rotate(360deg);
            font-weight: 500;
        }
    }
`;

export default ({ id, text }) => <>
    <Circle key={id} data-aos="flip-up">
        <p>{text}</p>
    </Circle>
</>