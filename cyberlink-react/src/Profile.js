// filepath: src/Profile.js
function Profile() {
  return (
    <div className="profile">
      <img src="/assets/emir.gif" alt="Profile" className="profileimage" />
      <p>
        <span style={{ color: 'var(--cybertext3)', fontSize: 14 }}>
          //UserID: @strydexhot
        </span>
      </p>
      <p style={{ fontSize: 36, color: 'var(--cybertext1)', marginBottom: '2%', marginTop: '2%' }}>
        Эмир Страйдекс<span style={{ fontSize: 14 }}> [STRYDEX]</span>
      </p>
      <div className="moreinfo">
        <p>
          Пол: <span style={{ color: 'var(--cybertext1)' }}>Мужской</span>
        </p>
        <p>
          Род деятельности: <span style={{ color: 'var(--cybertext1)' }}>IT-Сервисы | Музыка</span>
        </p>
        <p>
          Специальности: <span style={{ color: 'var(--cybertext1)' }}>Доктор, Финансист, Web-Разработчик, Музыкант, Предприниматель</span>
        </p>
        <p>
          Особенности: <span style={{ color: 'var(--cybertext1)' }}> Склонность к риску, Креативность, Многогранность, Импульсивность</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;