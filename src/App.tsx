import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Meals from "./pages/Meals";
import Plan from "./pages/Plan";
import Contact from "./pages/Contact";
import EnterDetails from "./pages/EnterDetails";
import PersonalizedPlan from "./pages/PersonalizedPlan";
import FinalizeMeals from "./pages/FinalizeMeals";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Define all routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enter-details" element={<EnterDetails />} />
        <Route path="/personalized-plan" element={<PersonalizedPlan />} />
        <Route path="/finalize-meals" element={<FinalizeMeals />} />

        {/* IMPORTANT: DO NOT place any routes below this. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
