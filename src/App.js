import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipePage } from "./pages/recipe-page/recipe-page";
import { HomePage } from "./pages/home-page/home-page";
import { FavouritesPage } from "./pages/favourites-page/favourites-page";
import { NotFoundPage } from "./pages/not-found-page/not-found-page";
import { ContactPage } from "./pages/contact-page/contact-page";
import { Footer } from "./components/footer/footer";
import { TopBar } from "./components/app-bar/app-bar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
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
