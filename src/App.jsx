import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import DemoPage from './pages/demo_page';
import ThankYou from './components/ThankYou';





const App = () => {
  return (
    
    <div>
      
      <BrowserRouter>
     <Routes>
      <Route path="/demo" element={<DemoPage/>} />
      <Route path="/thank-you" element={<ThankYou/>} />
      {/* <Route path="/example" element={<Header/>} />
      <Route path="/split" element={<Split/>} /> */}
     </Routes>
     </BrowserRouter>
      
        


</div>
  );
}

export default App
