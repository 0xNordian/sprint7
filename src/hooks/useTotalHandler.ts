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
        const isNumPagesEmpty = typeof subTotal.numPages === 'undefined' || subTotal.numPages === 0;
        const isNumLangEmpty = typeof subTotal.numLang === 'undefined' || subTotal.numLang === 0;

        const subWebSerCalc = isNumPagesEmpty && isNumLangEmpty ? 0 : (Math.max(1, subTotal.numPages ?? 0) * Math.max(1, subTotal.numLang ?? 0)) * 30;

        setWebCalc(subWebSerCalc);
        console.log("total: ", total, "webCalc: ", webCalc)
    }, [subTotal]);

    // useEffect(() => {
    //     // This useEffect will trigger when webCalc changes
    //     setTotal((prevTotal) => prevTotal + webCalc);
    //     console.log("total: ", total, "webCalc: ", webCalc)
    // }, [webCalc]);

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
        const budgetTotal = total + webCalc;
        const newObj: SubTotal = { ...subTotal, webCalc, budgetTotal };
        // console.log("newTotal: ", newTotal)
        setBudget((prev) => [...prev, newObj]);
    };

    console.log("budgetHandler: ", budget, webCalc);

    return { total, subTotal, webCalc, updateTotal, webSubTotal, budgetHandler };
};

export default useTotalHandler;
