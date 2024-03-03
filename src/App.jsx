import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import AppContextProvider from "./context/AppContextProvider";

// Pages
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Detail from "./pages/Detail/Detail";
import TopAnime from "./pages/Anime/TopAnime";
import SeasonAnime from "./pages/Anime/SeasonAnime";
import SearchAnime from "./pages/Anime/SearchAnime";

export default function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<RootLayout />}>
            <Route path="home" element={<Home />}>
              <Route path="top-anime" element={<TopAnime />} />
              <Route path="winter" element={<SeasonAnime season="winter" />} />
              <Route path="spring" element={<SeasonAnime season="spring" />} />
              <Route path="summer" element={<SeasonAnime season="summer" />} />
              <Route path="fall" element={<SeasonAnime season="fall" />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="search/:keyword" element={<SearchAnime />} />
            <Route path="detail/:mal_id" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}
