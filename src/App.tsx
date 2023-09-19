import './App.css';
// import useTotalHandler from './hooks/useTotalHandler';
// import Budget from './components/Budget';
// import Services from './components/Services';
// import data from './utils/dataExtractor'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//?Pages
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home'
import Budget from './pages/Budget'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="budget" element={<Budget />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
    // <>
    //   <h2>¿Qué quieres hacer?</h2>
    //   <div className="services">
    //     <Budget />
    //   </div>
    // </>
  );
}

export default App;