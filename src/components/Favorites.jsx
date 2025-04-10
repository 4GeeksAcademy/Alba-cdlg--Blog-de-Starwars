// Para añadir los favoritos y poder eliminar de la lista. 

import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    //Función para añadir favoritos
    const addFavorite = (item) => {
        if (!favorites.find(fav => fav.id === item.id)) {
            setFavorites([...favorites, item]);
        }
    };

    //Función para eliminar de favoritos
    const removeFavorite = (item) => {
        setFavorites(favorites.filter(fav => fav.id !== item.id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite}}>
            {children}            
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);