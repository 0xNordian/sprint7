import { useState } from 'react';

type SubTotal = {
    web: number;
    seo: number;
    ads: number;
}

const useTotalHandler = () => {
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState<SubTotal[]>([]);

    const updateTotal = (label: string, price: number) => { 
        const service = document.querySelector(label) as HTMLInputElement;

        if (service.checked) {
            const newSubTotalEntry: SubTotal = { [label]: price } as SubTotal;
            
            setSubTotal((prevSubTotal) => [...prevSubTotal, newSubTotalEntry]);
            setTotal((prevTotal) => prevTotal + price);
        } else {
            setSubTotal((prevSubTotal) => prevSubTotal.filter((entry) => Object.keys(entry)[0] !== label));
            setTotal((prevTotal) => prevTotal - price);
        }
    };

    return { total, subTotal, updateTotal };
};

export default useTotalHandler;