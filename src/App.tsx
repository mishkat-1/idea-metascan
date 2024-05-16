import React from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BlockPage from "./pages/BlockPage";
import TransactionPage from "./pages/TransactionPage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-globalblack">
      <HomePage />
      <TransactionPage />
      <BlockPage />
      <Footer />
    </div>
  );
}

export default App;
