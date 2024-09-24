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
      <Title data-aos="fade-down">Євангеліст Лука Життя, досягнення та спадщина</Title>
      <BaseInfo infos={['Лука народився в I столітті н. е. в Антіохії (сучасна Туреччина).',
        'Здобув освіту лікаря, про що згадується в Посланні апостола Павла.',
        'Не був свідком життя Ісуса, але навернувся в християнство після його вознесіння.',
        'Написав Євангеліє від Луки та Діяння апостолів, що є важливими для Нового Заповіту.',
        'Тісно співпрацював з апостолом Павлом і супроводжував його в місіонерських подорожах.',
        'Помер у віці 84 років у Греції, шанується як святий і перший іконописець Богоматері.',]} />
      <Infos biography={biography} />
      <Author>Горбунов Кірілл, 2024 рік, доповідь про Євангеліста</Author>
    </div>
  );
}

export default App;
