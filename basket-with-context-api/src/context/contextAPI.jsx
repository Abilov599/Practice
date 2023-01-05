import React, { createContext, useState } from "react";

export const ModeContext = createContext(null);

const ModeProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  const data = {
    productsData,
    setProductsData,
  };

  return <ModeContext.Provider value={data}>{children}</ModeContext.Provider>;
};

export default ModeProvider;
