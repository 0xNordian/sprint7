import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//?Pages
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Budget from './pages/BudgetPage';
const router = createBrowserRouter(createRoutesFromElements(_jsxs(Route, { path: "/", element: _jsx(RootLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "budget", element: _jsx(Budget, {}) })] })));
function App() {
    return (_jsx(RouterProvider, { router: router }));
}
export default App;
