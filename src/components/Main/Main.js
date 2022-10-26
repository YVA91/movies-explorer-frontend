import './Main.css';
import Promo from '../Promo/Promo.js'
import AboutProject from '../AboutProject/AboutProject.js'
import Techs from '../Techs/Techs.js'
import AboutMy from '../AboutMy/AboutMy.js'
import Portfolio from '../Portfolio/Portfolio.js'

function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMy />
      <Portfolio />
    </main>
  );
}

export default Main;
