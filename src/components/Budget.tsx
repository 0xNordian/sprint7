import { useState } from 'react';
import BudgetInput from './BudgetInput';
import useTotalHandler from '../hooks/useTotalHandler';

const Budget = () => {
    const [budgetName, setBudgetName] = useState("");
    const { total, webCalc, budget, budgetHandler, updateTotal, webSubTotal } = useTotalHandler();
    const budgetLength = budget.length;

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
                total={total}
                webCalc={webCalc}
            />
            <button onClick={() => budgetHandler(budgetName)}>Submit Budget</button>

            {budgetLength > 0 &&
                <div className="budget">
                    <h3>Budget Summary</h3>
                    {budget.map((item, index) => (
                        <div className="budget-card" key={index}>
                            <h3>{Object.keys(item)[0]}</h3>
                            <ul className="budget-summary">
                                <li>
                                    <strong>web:</strong> {item[Object.keys(item)[0]].web}
                                </li>
                                <ul>
                                    <li>Number of pages: {item[Object.keys(item)[0]].numPages}</li>
                                    <li>Number of languages: {item[Object.keys(item)[0]].numLang}</li>
                                </ul>
                                <li>
                                    <strong>seo:</strong> {item[Object.keys(item)[0]].seo}
                                </li>
                                <li>
                                    <strong>ads:</strong> {item[Object.keys(item)[0]].ads}
                                </li>
                                <p><strong>Total:</strong> {item[Object.keys(item)[0]].budgetElement}</p>
                            </ul>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Budget