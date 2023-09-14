import { useState, useEffect } from 'react';

type SubTotal = {
    web?: number;
    seo?: number;
    ads?: number;
    numPages?: number;
    numLang?: number;
};

const useTotalHandler = () => {
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState<SubTotal>({});
    const [webCalc, setWebCalc] = useState(0);

    const updateTotal = (label: keyof SubTotal, price: number, isChecked: boolean) => {
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
        setSubTotal((prev) => ({ ...prev, [spec]: qty }));
        webTotal();
    }

    const webTotal = () => {
        setWebCalc(() => {
            return Math.max(1, subTotal.numPages) * Math.max(1, subTotal.numLang) * 30;
        });
    }

    useEffect(() => {
        console.log("webCalc:", webCalc)
    }, [subTotal]);

    return { total, subTotal, updateTotal, webSubTotal };
};

export default useTotalHandler;


// import { useState } from 'react';

// type SubTotal = {
//     web: number;
//     seo: number;
//     ads: number;
// };

// const useTotalHandler = () => {
//     const [total, setTotal] = useState(0);
//     const [subTotal, setSubTotal] = useState<SubTotal[]>([]);

//     const updateTotal = (label: string, price: number) => {
//         const service = document.querySelector(label) as HTMLInputElement;

//         setSubTotal((prevSubTotal) => {
//             let updatedSubTotal: SubTotal[];

//             if (service.checked) {
//                 const newSubTotalEntry: SubTotal = { [label]: price } as SubTotal;
//                 updatedSubTotal = [...prevSubTotal, newSubTotalEntry];
//             } else {
//                 updatedSubTotal = prevSubTotal.filter((entry) => Object.keys(entry)[0] !== label);
//             }

//             // Calculate the total by summing up subTotals
//             const calculatedTotal = updatedSubTotal.reduce((acc, entry) => acc + Object.values(entry)[0], 0);
//             setTotal(calculatedTotal);

//             return updatedSubTotal;
//         });
//     };

//     const webSubTotal = (spec: string, qty: number ) => {
//         console.log('webSubTotal: ', spec, qty);
//     }

//     return { total, subTotal, updateTotal, webSubTotal };
// };

// export default useTotalHandler;