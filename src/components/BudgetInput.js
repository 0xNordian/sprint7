import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Services from '../components/Services';
import data from '../utils/dataExtractor';
const BudgetInput = ({ total, webCalc, updateTotal, webSubTotal, isBudgetSubmitted, setBudgetName, setClientName }) => {
    return (_jsxs("div", { className: "services", children: [data.map((service => _jsx(Services, { label: `${service.name}`, price: service.price, message: service.title, updateTotal: updateTotal, webSubTotal: webSubTotal, isBudgetSubmitted: isBudgetSubmitted, setBudgetName: setBudgetName, setClientName: setClientName }, service.id))), _jsxs("div", { className: "total", children: ["Total: ", total + webCalc, "\u20AC"] })] }));
};
export default BudgetInput;
