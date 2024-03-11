import { useState, useEffect } from 'react';
import React from 'react';
import Header from "./components/Header";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function MyApp({ Component, pageProps }) {
  const [isConnected, setIsConnected] = useState(false);
  const [token, setToken] = useState("");

  const params = { isConnected, token };

  const setConnected = (value) => { setIsConnected(value) };

  return (
    <>
      <Header isConnected={isConnected} token={token}/>
      <FullContext.Provider value={params}>
        <Component setConnected={setConnected} setToken={setToken} {...pageProps} />
      </FullContext.Provider>
    </>
  );
}
export const FullContext = React.createContext({});

export default MyApp;