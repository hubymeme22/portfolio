import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
