import { useState, useEffect } from 'react';
import BudgetInput from './BudgetInput';
import useTotalHandler from '../hooks/useTotalHandler';
import ButtonGroup from './ButtonGroup';

const Budget = () => {
    const [budgetName, setBudgetName] = useState("");
    const [clientName, setClientName] = useState("");
    const [isBudgetSubmitted, setIsBudgetSubmitted] = useState(false);
    const [sortedBudget, setSortedBudget] = useState([]);
    const [dateOrder, setDateOrder] = useState<"asc" | "dsc">("asc");
    const { total, subTotal, webCalc, budget, budgetHandler, updateTotal, webSubTotal } = useTotalHandler();
    const [usedArr, setUsedArr] = useState<typeof budget | typeof sortedBudget>(budget)
    const budgetLength = budget.length;

    const sortByTitle = () => {
        const arr = [...budget];
    
        const sortedBudgetCopy = arr.sort((a, b) => {
            const keyA = Object.keys(a)[0]; 
            const keyB = Object.keys(b)[0]; 
            return keyA.localeCompare(keyB);
        });
        console.log("title sortedBudgetCopy: ", sortedBudgetCopy)
        setSortedBudget(sortedBudgetCopy);
        setUsedArr(sortedBudget)
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
        
        console.log("date sortedBudgetCopy: ", sortedBudgetCopy)
        setUsedArr(sortedBudget)
        setSortedBudget(sortedBudgetCopy);
    };

    const resetOrder = () => {
        setUsedArr(budget)
    };

    useEffect(() => {
        if (subTotal) {
            setIsBudgetSubmitted(false)
        }
    }, [subTotal])

    useEffect(() => {
        setUsedArr(budget)
    }, [budget])

    return (
        <>
            <label>
                {"Budget title: "}
                <input
                    type="text"
                    id={"budget"}
                    value={budgetName}
                    onChange={(e) => setBudgetName(e.target.value)} />
            </label>
            <label>
                {"Client name: "}
                <input
                    type="text"
                    id={"client"}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)} />
            </label>
            <BudgetInput
                updateTotal={updateTotal}
                webSubTotal={webSubTotal}
                setBudgetName={setBudgetName}
                setClientName={setClientName}
                total={total}
                webCalc={webCalc}
                isBudgetSubmitted={isBudgetSubmitted}
            />
            <button onClick={() => {
                budgetHandler(budgetName, clientName)
                setIsBudgetSubmitted(true)
            }
            }>Submit Budget</button>

            {budgetLength > 0 &&
                <div className="budget">
                    <h3>Budget Summary</h3>
                    <div>
                        <ButtonGroup 
                            sortByTitle={sortByTitle} 
                            sortByDate={sortByDate} 
                            resetOrder={resetOrder} 
                            setDateOrder={setDateOrder}
                            dateOrder={dateOrder}
                        />
                    </div>
                    {usedArr.map((item, index) => (
                        <div className="budget-card" key={index}>
                            <h3>{Object.keys(item)[0]}</h3>
                            <ul className="budget-summary">
                                {item[Object.keys(item)[0]].web > 0 &&
                                    <li>
                                        <strong>web:</strong> {item[Object.keys(item)[0]].web}€
                                    </li>
                                }
                                <ul>
                                    {(item[Object.keys(item)[0]].numLang > 0 || item[Object.keys(item)[0]].numPages > 0) &&
                                        <>
                                            <li>Number of pages: {item[Object.keys(item)[0]].numPages}</li>
                                            <li>Number of languages: {item[Object.keys(item)[0]].numLang}</li>
                                            <li>SubTotal: {Math.max(1, item[Object.keys(item)[0]].numLang) * Math.max(1, item[Object.keys(item)[0]].numPages) * 30}€ for {item[Object.keys(item)[0]].numLang + item[Object.keys(item)[0]].numPages} extras</li>
                                        </>
                                    }
                                </ul>
                                {item[Object.keys(item)[0]].seo > 0 &&
                                    <li>
                                        <strong>seo:</strong> {item[Object.keys(item)[0]].seo}€
                                    </li>
                                }
                                {item[Object.keys(item)[0]].ads &&
                                    <li>
                                        <strong>ads:</strong> {item[Object.keys(item)[0]].ads}€
                                    </li>
                                }
                                <p><strong>Total:</strong> {item[Object.keys(item)[0]].budgetElement}€</p>
                            </ul>
                            <div className="extra-info">
                                <small className="date">{item[Object.keys(item)[0]].date}</small>
                                <small className="date">{item[Object.keys(item)[0]].clientName}</small>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Budget