import Services from '../components/Services'
import data from '../utils/dataExtractor'

export type ServicesProps = {
    label: string;
    price: number;
    message: string;
    updateTotal: (label: string, price: number, isChecked: boolean) => void;
    webSubTotal: (spec: string, qty: number) => void;
    isBudgetSubmitted: boolean;
    setBudgetName?: (budgetName: string) => void;
    setClientName?: (clientName: string) => void;
};

const BudgetInput = ({ total, webCalc, updateTotal, webSubTotal, isBudgetSubmitted, setBudgetName, setClientName }: ServicesProps) => {
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