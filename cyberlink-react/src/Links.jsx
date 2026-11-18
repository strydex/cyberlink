// filepath: src/Links.js
function Links() {
  const handleMusicClick = (e) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      e.preventDefault();
      const appUrl = 'yandexmusic://artist/8920838';
      const webUrl = 'https://music.yandex.ru/artist/8920838';
      window.location.href = appUrl;
      setTimeout(() => {
        window.location.href = webUrl;
      }, 1500);
    }
  };

  return (
    <div className="links">
      <a href="https://strydex.is-a.dev/">[IT-портфолио]</a>
      <a href="https://github.com/strydex">[GitHub]</a>
      <a href="https://music.yandex.ru/artist/8920838" onClick={handleMusicClick}>
        [Страничка исполнителя STRYDEX | Yandex.Music]
      </a>
      <a href="https://t.me/netrunner_sx">[TG-канал по IT "Бегущий в сети"]</a>
      <a href="https://t.me/millionstrydex">[TG-канал по Крипте]</a>
      <a href="https://t.me/strydeeboy">[Личный TG-канал]</a>
      <a href="https://tiktok.com/@strydexhot">[TikTok]</a>
      <a href="https://instagr.am/strydexhot">[Instagram*]</a>
    </div>
  );
}

export default Links;