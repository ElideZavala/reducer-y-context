import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialStore } from "./storeReducer";

const StoreContext = createContext();

const StoreProvider = (
  { children } // Mandamos un value que consumiran los demas componentes.
) => (
  <StoreContext.Provider value={useReducer(storeReducer, initialStore)}>
    {children}
  </StoreContext.Provider>
);

// Accedemos al primer valor del store.
const useStore = () => useContext(StoreContext)[0];

// Accedemos al segundo valor del store.
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default StoreProvider;
