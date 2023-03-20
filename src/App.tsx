import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../src/themes/globalStyles'
import InitialPage from './pages/InitialPage'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </BrowserRouter>
  )
}
