import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import BankingLogin from "./pages/login";
import TransactionHistory from "./pages/transaction-history";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";

function App() {
  
  return (
    <MantineProvider theme={{}}>
    
      <Notifications w={300} position="top-left" limit={1} />
      <Router>
        <Routes>
          <Route path="/" element={<BankingLogin />} />
          <Route path="/transaction-history" element={<TransactionHistory/>} />
        </Routes>
      </Router>

 </MantineProvider>
  );
}

export default App;






