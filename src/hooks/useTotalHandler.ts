import { useState, useEffect } from 'react';

type SubTotal = {
    web?: number;
    seo?: number;
    ads?: number;
    numPages?: number;
    numLang?: number;
    webCalc?: number;
};

const useTotalHandler = () => {
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState<SubTotal>({});
    const [webCalc, setWebCalc] = useState(0);
    const [budget, setBudget] = useState<SubTotal[]>([]);

    useEffect(() => {
        // Perform calculations and update DOM here
        const subWebSerCalc = (Math.max(1, subTotal.numPages ?? 0) * Math.max(1, subTotal.numLang ?? 0)) * 30;
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

            // Calculate the total by summing up subTotals
            const calculatedTotal = Object.values(updatedSubTotal).reduce((acc, val) => acc + (val || 0), 0);

            setTotal(calculatedTotal);

            return updatedSubTotal;
        });
    };

    const webSubTotal = (spec: keyof SubTotal, qty: number) => {
        setSubTotal((prev) => {
            return { ...prev, [spec]: qty };
        });
    };

    const budgetHandler = () => {
        const newObj: SubTotal = { ...subTotal, webCalc };
        setBudget((prev) => [...prev, newObj]);
    };

    console.log("budgetHandler: ", budget, webCalc);

    return { total, subTotal, updateTotal, webSubTotal, budgetHandler };
};

export default useTotalHandler;
