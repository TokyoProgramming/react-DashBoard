import './App.css';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sideBar/SideBar';
import Home from './pages/home/Home';
import FeaturedInf from './components/featuredInf/FeaturedInf';
import Chart from './components/charts/Chart';
import WidgetSm from './components/widgetSm/WidgetSm';
import WidgetLa from './components/widgetLa/WidgetLa';

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">
          <Home />
          <FeaturedInf />
          <Chart />
          <div className="widget">
            <WidgetSm />
            <WidgetLa />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
