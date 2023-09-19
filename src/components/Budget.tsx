import { useState, useEffect } from 'react';
import BudgetInput from './BudgetInput';
import useTotalHandler from '../hooks/useTotalHandler';

const Budget = () => {
    const [budgetName, setBudgetName] = useState("");
    const [isBudgetSubmitted, setIsBudgetSubmitted] = useState(false);
    const { total, subTotal, webCalc, budget, budgetHandler, updateTotal, webSubTotal } = useTotalHandler();
    const budgetLength = budget.length;

    useEffect(() => {
        if(subTotal) {
            setIsBudgetSubmitted(false)
        }
    }, [subTotal])

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
            <BudgetInput
                updateTotal={updateTotal}
                webSubTotal={webSubTotal}
                setBudgetName={setBudgetName}
                total={total}
                webCalc={webCalc}
                isBudgetSubmitted={isBudgetSubmitted}
            />
            <button onClick={() => {
                budgetHandler(budgetName)
                setIsBudgetSubmitted(true)
            }
            }>Submit Budget</button>

            {budgetLength > 0 &&
                <div className="budget">
                    <h3>Budget Summary</h3>
                    {budget.map((item, index) => (
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
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Budget