
import './App.css';
import Header from './component/header/Header';
import CountDown from './component/countdown/CountDown';
import Footer from './component/footer/Footer'


function App() {
  return (
    <div>
      <Header/>
      <CountDown date={'1444-09-01'} />
      <Footer/>
    </div>
  );
}


export default App;
