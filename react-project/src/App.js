import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Nav from './nav/nav';
import Page from './page.js/page';
import Food from './food/food';
import Parent from './parent';

function App() {
  return (
     <div>
    {/* <Header />
    <Nav/> */}
    <Page />
    {/* <Food /> */}
    <Parent />
    </div>
  )
}

export default App;
