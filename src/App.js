import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

function App() {
  return (
<div>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/cart" element={<CheckoutPage />} />
    <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
  </Route>
</Routes>

</div>
  );
}

export default App;
