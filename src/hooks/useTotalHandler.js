import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
const useTotalHandler = () => {
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState({});
    const [webCalc, setWebCalc] = useState(0);
    const [budget, setBudget] = useLocalStorage('budget', []);
    const [budgetItemNumber, setBudgetItemNumber] = useState(1);
    useEffect(() => {
        const isNumPagesEmpty = typeof subTotal.numPages === 'undefined' || subTotal.numPages === 0;
        const isNumLangEmpty = typeof subTotal.numLang === 'undefined' || subTotal.numLang === 0;
        const subWebSerCalc = isNumPagesEmpty && isNumLangEmpty ? 0 : (Math.max(1, subTotal.numPages ?? 0) * Math.max(1, subTotal.numLang ?? 0)) * 30;
        setWebCalc(subWebSerCalc);
    }, [subTotal]);
    const updateTotal = (label, price, isChecked) => {
        setSubTotal((prevSubTotal) => {
            const updatedSubTotal = { ...prevSubTotal };
            if (isChecked) {
                updatedSubTotal[label] = price;
            }
            else {
                delete updatedSubTotal[label];
            }
            const keysToExclude = ['numLang', 'numPages'];
            const calculatedTotal = Object.values(updatedSubTotal)
                // .filter(key => !keysToExclude.includes(key))
                .reduce((acc, val) => acc + (val || 0), 0);
            setTotal(calculatedTotal);
            return updatedSubTotal;
        });
    };
    const webSubTotal = (spec, qty) => {
        setSubTotal((prev) => {
            return { ...prev, [spec]: qty };
        });
    };
    const budgetItemNumberHandler = () => {
        setBudgetItemNumber((prev) => prev + 1);
    };
    console.log("budget: ", budget);
    const budgetHandler = (title, clientName) => {
        budgetItemNumberHandler();
        const date = new Date().toLocaleString();
        const budgetTotal = total + webCalc;
        const newItem = {
            [title]: { ...subTotal, webCalc, budgetElement: budgetTotal, clientName: clientName, date: date, budgetItemNumber: budgetItemNumber }
        };
        const updatedBudget = [...budget, newItem];
        setBudget(updatedBudget);
        localStorage.setItem('budget', JSON.stringify(updatedBudget));
        cleanForm();
    };
    const cleanForm = () => {
        setSubTotal({});
        setTotal(0);
    };
    return { total, subTotal, budget, webCalc, updateTotal, webSubTotal, budgetHandler, setBudget };
};
export default useTotalHandler;
