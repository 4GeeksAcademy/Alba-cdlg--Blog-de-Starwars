// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { FavoritesProvider } from "./components/FavoritesContext";


export const router = createBrowserRouter(
  createRoutesFromElements(
      <FavoritesProvider> {/* Wrap all your routes with the FavoritesProvider */}
          <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
              {/* Nested Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/single/:theId" element={<Single />} />
              <Route path="/demo" element={<Demo />} />
          </Route>
      </FavoritesProvider>
  )
);