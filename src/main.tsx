import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChakraProvider} from "@chakra-ui/react";
import "@fontsource/kantumruy/300.css";
import "@fontsource/kantumruy/400.css";
import "@fontsource/kantumruy/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import camjumTheme from "./styles/theme.ts";



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={camjumTheme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)
