// filepath: src/App.js
import './style.css';
import Profile from './Profile';
import Links from './Links';
import Details from './Details';

function App() {
  return (
    
    <div>
      <div className="container">
        <span style={{ color: 'var(--cybertext3)', fontSize: 14 }}>
          ОБЪЕКТ ИЗ БАЗЫ ДАННЫХ НЕТРАННЕРОВ №1.240.666.013
        </span>
        <br />
        <span style={{ color: 'var(--cybertext3)', fontSize: 14 }}>
          /root/ncorp/runners/XIII/SS-class/
        </span>
        <div className="containerchild">
          <Profile />
          <Links />
          <p>
            <span style={{ color: 'var(--cybertext3)', fontSize: 14 }}>
              ВНИМАНИЕ! Досье содержит данные на нетраннера высшего класса. Просмотр файлов может вызвать нейрозависимость от качественного кода и нестандартного контента. <br></br>Входи на свой страх и риск, choom!
            </span>
          </p>
          <p style={{ marginTop: '14px', borderTop: '1px dashed var(--cybertext3)', paddingTop: '8px' }}>
            <span style={{ color: 'var(--cybertext3)', fontSize: 11 }}>
              *Meta и дочерние компании запрещены на территории Российской Федерации
            </span>
          </p>
        </div>
      </div>
      <Details />
    </div>
  );
}

export default App;