import './App.scss';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CustomProvider from './context/CartContext';
import { collection } from 'firebase/firestore';

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <NavBar></NavBar>

          <Routes>
            <Route exact path='/' element={<ItemListContainer />}>
            </Route>
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer />}>
            </Route>

            <Route exact path='/itemDetail/:idItem' element={<ItemDetailContainer />}>
            </Route>

            <Route exact path='/cart' element={<Cart />}>
            </Route>
          </Routes>

        </CustomProvider>
       </BrowserRouter>
    </>
  );
}

//const app= initializeApp(firebaseConfig);
//const db= getFirestore (app)

//console.log(db)

export default App;



