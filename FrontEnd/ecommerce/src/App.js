import {BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="products" element={<Products/>}/>
<Route path="products/:productId" element={<SingleProduct/>}/>
<Route path="posts" element={<Posts/>}/>
<Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;