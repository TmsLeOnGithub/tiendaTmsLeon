import './App.scss';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <NavBar></NavBar>

    <div>
    <ItemListContainer></ItemListContainer>
    </div>
    
    </>
  );
}

export default App;
