import Services from '../components/Services'
import data from '../utils/dataExtractor'
import { SubTotal } from '../hooks/useTotalHandler'

type BudgetInputProps = {
    total: number;
    webCalc: number;
    updateTotal: (label: keyof SubTotal, price: number, isChecked: boolean) => void;
    webSubTotal: (spec: keyof SubTotal, qty: number) => void;
    isBudgetSubmitted: boolean;
    setBudgetName: (budgetName: string) => void;
    setClientName: (clientName: string) => void;
}

const BudgetInput = ({ total, webCalc, updateTotal, webSubTotal, isBudgetSubmitted, setBudgetName, setClientName }: BudgetInputProps) => {
    return (
        <div className="services">
            {data.map((service =>
                <Services
                    key={service.id}
                    label={`${service.name}`}
                    price={service.price}
                    message={service.title}
                    updateTotal={updateTotal}
                    webSubTotal={webSubTotal}
                    isBudgetSubmitted={isBudgetSubmitted}
                    setBudgetName={setBudgetName}
                    setClientName={setClientName}
                />))}

            <div className="total">Total: {total + webCalc}€</div>
        </div>
    )
}

export default BudgetInput