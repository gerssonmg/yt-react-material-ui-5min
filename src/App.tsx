import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import PricingComponent from './Practitioner/Pricing'
import { createContext, useMemo, useState } from 'react';
import { Toggle } from './Toggle';
import CardComponentReactCSS from './Practitioner/CreditCard/CardUI-React-CSS/CardComponent'
import PaymentFormReactMUI from './Practitioner/CreditCard/CardUI-React-MUI/PaymentForm'
import { Box } from '@mui/material';
import CardReactCSS from './CartaoCredito/CardReactCSS';
import CardReactMUI from './CartaoCreditoMUI/CardReactMUI';
import PrincingComponentMUI from './PricingComponentMUI/PrincingComponentMUI';


export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function App() {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toggle />

        {/* Componentes | Videos START */}
        {/* Card de Preço. Ex: Usado em sites de vendas */}
        <PricingComponent />
        {/* E o mesmo component, mas esse a baixo comentado foi o feito no video */}
        <PrincingComponentMUI />

        <Box display="flex" alignItems="center" flexDirection="column" gap={4} pb={4} px={4} mt={4}>


          {/* Cartão de credito usando ReactJS + CSS*/}
          <CardComponentReactCSS />
          {/* E o mesmo component, mas esse a baixo comentado foi o feito no video */}
          {/* <CardReactCSS /> */}

          {/* Cartão de credito usando ReactJS + MUI*/}
          <PaymentFormReactMUI />
          {/* E o mesmo component, mas esse a baixo comentado foi o feito no video */}
          {/* <CardReactMUI /> */}
          {/* Componentes | Videos FIM*/}
        </Box>


      </ThemeProvider >
    </ColorModeContext.Provider>
  )
}

export default App
