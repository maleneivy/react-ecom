import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/HomePage";

function App() {
  return (
<div>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<CheckoutPage />} /> {/* Wildcard route at the end */}
  </Route>
</Routes>

</div>
  );
}

export default App;
