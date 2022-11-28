import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./component/Base";
import Invoice from "./pages/Invoice";
import InvoiceDetail from "./pages/InvoiceDetail";

function App() {
  return (
    <Router>
      <Base />
      <Routes>
        <Route exact path="/" element={<Invoice />} />
        <Route exact path="/invoice-detail/:id" element={<InvoiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
