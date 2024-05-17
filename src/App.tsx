import React from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BlockPage from "./pages/BlockPage";
import TransactionPage from "./pages/TransactionPage";
import Footer from "./components/Footer";
import { TestimonialCards } from "./components/TestimonialCards";
function App() {
  return (
    <div className="bg-globalblack">
      <HomePage />
      <TestimonialCards />
      <TransactionPage />
      <BlockPage />
      <Footer />
    </div>
  );
}

export default App;
