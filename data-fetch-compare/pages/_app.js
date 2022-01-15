// import "../styles/globals.css";
// import { ApiProvider } from "./apiContext";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ApiProvider>
//       <Component {...pageProps} />
//     </ApiProvider>
//   );
// }

// export default MyApp;

import React, { useState, useEffect } from "react";

export const ApiContext = React.createContext();

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <ApiContext.Provider value={data}>
      <ApiData />
    </ApiContext.Provider>
  );
}

function ApiData() {
  const value = React.useContext(ApiContext);

  return <h1>{value?.id}</h1>;
}
