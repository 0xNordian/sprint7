import { useState } from 'react';

type SubTotal = {
    web: number;
    seo: number;
    ads: number;
};

const useTotalHandler = () => {
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState<SubTotal[]>([]);

    const updateTotal = (label: string, price: number) => {
        const service = document.querySelector(label) as HTMLInputElement;

        setSubTotal((prevSubTotal) => {
            let updatedSubTotal: SubTotal[];

            if (service.checked) {
                const newSubTotalEntry: SubTotal = { [label]: price } as SubTotal;
                updatedSubTotal = [...prevSubTotal, newSubTotalEntry];
            } else {
                updatedSubTotal = prevSubTotal.filter((entry) => Object.keys(entry)[0] !== label);
            }

            // Calculate the total by summing up subTotals
            const calculatedTotal = updatedSubTotal.reduce((acc, entry) => acc + Object.values(entry)[0], 0);
            setTotal(calculatedTotal);

            return updatedSubTotal;
        });
    };

    const webSubTotal = (spec: string, qty: number ) => {
        console.log('webSubTotal: ', spec, qty);
    }

    return { total, subTotal, updateTotal, webSubTotal };
};

export default useTotalHandler;