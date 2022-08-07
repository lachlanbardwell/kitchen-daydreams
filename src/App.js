import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipePage } from "./pages/recipe-page/recipe-page";
// import { RecipeDetail } from "./components/recipe-detail/recipe-detail";
import { HomePage } from "./pages/home-page/home-page";
import { NotFoundPage } from "./pages/not-found-page/not-found-page";
import { ContactPage } from "./pages/contact-page/contact-page";
import { Footer } from "./components/footer/footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/recipes" element={<RecipePage />}>
            {/* <Route path=":recipe" element={<RecipeDetail />}></Route> */}
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
