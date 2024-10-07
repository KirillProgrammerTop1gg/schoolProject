import './App.css';
import styled from 'styled-components';
import BaseInfo from './Components/BaseInfo/BaseInfo';
import Infos from './Components/Infos/Infos';
import biography from "./Data/biography.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Title = styled.h1`
  font-size: 48px;
`;
const Author = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
`;

function App() {
  return (
    <div className="App">
      <Title data-aos="fade-down">Герой Гектор: Герой Трої і символ трагедії</Title>
      <BaseInfo infos={[
        'Гектор — старший син царя Пріама, головний захисник Трої.',
        'Він був найсильнішим воїном Трої, відомий шляхетністю.',
        'Гектор загинув у знаменитому двобої з Ахіллесом.',
        'Дуже любив свою дружину Андромаху та сина Астіанакса.',
        'Боровся за Трою і свій народ, а не за власну славу.',
        'Його смерть символізує загибель Трої.',
      ]} />
      <Infos biography={biography} />
      <Author>Горбунов Кірілл, 2024 рік, доповідь про героя Гектора</Author>
    </div>
  );
}

export default App;
