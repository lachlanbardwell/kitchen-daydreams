import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipePage } from "./pages/recipe-page/recipe-page";
import { RecipeDetail } from "./components/recipe-detail/recipe-detail";
import { HomePage } from "./pages/home-page/home-page";
import { NotFoundPage } from "./pages/not-found-page/not-found-page";
import { ContactPage } from "./pages/contact-page/contact-page";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/recipes" element={<RecipePage />}>
            <Route path=":recipe" element={<RecipeDetail />}></Route>
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
