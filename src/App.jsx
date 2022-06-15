import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import ListNews from "./components/ListNews/ListNews"
import Header from './components/Header/Header';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <GlobalProvider>
      <Header />
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<ListNews />} />        
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
      </GlobalProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
