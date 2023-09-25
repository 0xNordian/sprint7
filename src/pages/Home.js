import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Home = () => {
    return (_jsxs("div", { children: [_jsx("h1", { children: "THIS IS THE WELCOME PAGE" }), _jsx("button", { children: _jsx(Link, { to: "budget", children: "Start Budget" }) })] }));
};
export default Home;
