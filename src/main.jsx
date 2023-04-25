import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
// import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { ParallaxProvider } from "react-scroll-parallax"

// import client from "./apollo/client"
import App from "./Routes/App"
import theme from "./Styles/theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </ParallaxProvider>
    {/* </ApolloProvider> */}
  </React.StrictMode>,
)
