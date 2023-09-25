import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import BudgetInput from './BudgetInput';
import useTotalHandler from '../hooks/useTotalHandler';
import ButtonGroup from './ButtonGroup';
import Search from './Search';
// import { BudgetItem } from '../hooks/useTotalHandler';
const Budget = () => {
    const [budgetName, setBudgetName] = useState("");
    const [clientName, setClientName] = useState("");
    const [isBudgetSubmitted, setIsBudgetSubmitted] = useState(false);
    const [sortedBudget, setSortedBudget] = useState([]);
    const [dateOrder, setDateOrder] = useState("asc");
    const { total, subTotal, webCalc, budget, budgetHandler, updateTotal, webSubTotal } = useTotalHandler();
    const [usedArr, setUsedArr] = useState([...budget]);
    const budgetLength = budget.length;
    const sortByTitle = () => {
        const arr = [...budget];
        const sortedBudgetCopy = arr.sort((a, b) => {
            const keyA = Object.keys(a)[0];
            const keyB = Object.keys(b)[0];
            return keyA.localeCompare(keyB);
        });
        setUsedArr(sortedBudgetCopy);
        setSortedBudget(sortedBudgetCopy);
    };
    const sortByDate = () => {
        const arr = [...budget];
        const sortedBudgetCopy = arr.sort((a, b) => {
            const keyA = a[Object.keys(a)[0]].date;
            const keyB = b[Object.keys(b)[0]].date;
            const ascOrder = keyA.localeCompare(keyB);
            const dscOrder = keyB.localeCompare(keyA);
            return dateOrder === "asc" ? ascOrder : dscOrder;
        });
        setUsedArr(sortedBudgetCopy);
        setSortedBudget(sortedBudgetCopy);
    };
    const resetOrder = () => {
        setUsedArr(budget);
    };
    useEffect(() => {
        if (subTotal) {
            setIsBudgetSubmitted(false);
        }
    }, [subTotal]);
    useEffect(() => {
        setUsedArr(budget);
    }, [budget]);
    const handleSearch = (searchText) => {
        const filteredBudget = budget.filter((item) => {
            const title = Object.keys(item)[0];
            return title.toLowerCase().includes(searchText.toLowerCase());
        });
        setUsedArr(filteredBudget);
    };
    return (_jsxs("main", { className: "main-container", children: [_jsxs("div", { className: "budget-form", children: [_jsxs("label", { children: ["Budget title: ", _jsx("input", { type: "text", id: "budget", value: budgetName, onChange: (e) => setBudgetName(e.target.value) })] }), _jsxs("label", { children: ["Client name: ", _jsx("input", { type: "text", id: "client", value: clientName, onChange: (e) => setClientName(e.target.value) })] }), _jsx(BudgetInput, { updateTotal: updateTotal, webSubTotal: webSubTotal, setBudgetName: setBudgetName, setClientName: setClientName, total: total, webCalc: webCalc, isBudgetSubmitted: isBudgetSubmitted }), _jsx("button", { onClick: () => {
                            budgetHandler(budgetName, clientName);
                            setIsBudgetSubmitted(true);
                        }, children: "Submit Budget" })] }), _jsx("div", { className: "budget-dashboard", children: budgetLength > 0 &&
                    _jsxs("div", { className: "budget", children: [_jsx("h3", { children: "Budget Summary" }), _jsxs("div", { className: "filters", children: [_jsx(ButtonGroup, { sortByTitle: sortByTitle, sortByDate: sortByDate, resetOrder: resetOrder, setDateOrder: setDateOrder, dateOrder: dateOrder }), _jsx(Search, { onSearch: handleSearch })] }), usedArr.map((item, index) => (_jsxs("div", { className: "budget-card", children: [_jsx("h3", { children: Object.keys(item)[0] }), _jsxs("ul", { className: "budget-summary", children: [item[Object.keys(item)[0]].web > 0 &&
                                                _jsxs("li", { children: [_jsx("strong", { children: "web:" }), " ", item[Object.keys(item)[0]].web, "\u20AC"] }), _jsx("ul", { children: (item[Object.keys(item)[0]].numLang > 0 || item[Object.keys(item)[0]].numPages > 0) &&
                                                    _jsxs(_Fragment, { children: [_jsxs("li", { children: ["Number of pages: ", item[Object.keys(item)[0]].numPages] }), _jsxs("li", { children: ["Number of languages: ", item[Object.keys(item)[0]].numLang] }), _jsxs("li", { children: ["SubTotal: ", Math.max(1, item[Object.keys(item)[0]].numLang) * Math.max(1, item[Object.keys(item)[0]].numPages) * 30, "\u20AC for ", item[Object.keys(item)[0]].numLang + item[Object.keys(item)[0]].numPages, " extras"] })] }) }), item[Object.keys(item)[0]].seo > 0 &&
                                                _jsxs("li", { children: [_jsx("strong", { children: "seo:" }), " ", item[Object.keys(item)[0]].seo, "\u20AC"] }), item[Object.keys(item)[0]].ads &&
                                                _jsxs("li", { children: [_jsx("strong", { children: "ads:" }), " ", item[Object.keys(item)[0]].ads, "\u20AC"] }), _jsxs("p", { children: [_jsx("strong", { children: "Total:" }), " ", item[Object.keys(item)[0]].budgetElement, "\u20AC"] })] }), _jsxs("div", { className: "extra-info", children: [_jsx("small", { className: "date", children: item[Object.keys(item)[0]].date }), _jsx("small", { className: "date", children: item[Object.keys(item)[0]].clientName })] })] }, index)))] }) })] }));
};
export default Budget;
