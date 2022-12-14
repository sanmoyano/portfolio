import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import client from "./apollo/client";
import App from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <ApolloProvider client={client}> */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
        {/* </ApolloProvider> */}
    </React.StrictMode>,
);
