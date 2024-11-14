import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import ProductsProvider from './ProductsContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={routes} />
    </ProductsProvider>
  </StrictMode>,
)