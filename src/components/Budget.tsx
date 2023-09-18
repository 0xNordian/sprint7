import { useState } from 'react';

const Budget = ({budget, budgetHandler}) => {
    const [budgetName, setBudgetName] = useState("");

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
            <button onClick={() => budgetHandler(budgetName)}>Submit Budget</button>
            <div className="budget">
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
        </>
    )
}

export default Budget