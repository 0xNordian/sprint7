import { useState, useEffect } from 'react';

type SubTotal = {
    web?: number;
    seo?: number;
    ads?: number;
    numPages?: number;
    numLang?: number;
    webCalc?: number;
};

type BudgetItem = {
    [title: string]: SubTotal;
};

const useTotalHandler = () => {
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState<SubTotal>({});
    const [webCalc, setWebCalc] = useState(0);
    const [budget, setBudget] = useState<BudgetItem[]>([]);

    useEffect(() => {
        const isNumPagesEmpty = typeof subTotal.numPages === 'undefined' || subTotal.numPages === 0;
        const isNumLangEmpty = typeof subTotal.numLang === 'undefined' || subTotal.numLang === 0;
        const subWebSerCalc = isNumPagesEmpty && isNumLangEmpty ? 0 : (Math.max(1, subTotal.numPages ?? 0) * Math.max(1, subTotal.numLang ?? 0)) * 30;

        setWebCalc(subWebSerCalc);
    }, [subTotal]);

    const updateTotal = (
        label: keyof SubTotal,
        price: number,
        isChecked: boolean
    ) => {
        setSubTotal((prevSubTotal) => {
            const updatedSubTotal = { ...prevSubTotal };
            if (isChecked) {
                updatedSubTotal[label] = price;
            } else {
                delete updatedSubTotal[label];
            }
            const keysToExclude = ['numLang', 'numPages'];
            const calculatedTotal = Object.values(updatedSubTotal)
                .filter(key => !keysToExclude.includes(key))
                .reduce((acc, val) => acc + (val || 0), 0);

            setTotal(calculatedTotal);

            return updatedSubTotal;
        });
    };

    const webSubTotal = (spec: keyof SubTotal, qty: number) => {
        setSubTotal((prev) => {
            return { ...prev, [spec]: qty };
        });
    };

    const budgetHandler = (title: string) => {
        const budgetTotal = total + webCalc;
        const newItem = {
            [title]: { ...subTotal, webCalc, budgetElement: budgetTotal }
        };
        setBudget((prev) => [...prev, newItem]);
        // setSubTotal({});
    };

    return { total, subTotal, budget, webCalc, updateTotal, webSubTotal, budgetHandler };
};

export default useTotalHandler;
