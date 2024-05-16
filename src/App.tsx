import React from "react";
import Layout from "./components/Layout";
import TransactionPage from "./pages/TransactionPage";
import BlockPage from "./pages/BlocksPage";

function App() {
  return (
    <Layout>
      <>
        <TransactionPage />
        <BlockPage />
      </>
    </Layout>
  );
}

export default App;
