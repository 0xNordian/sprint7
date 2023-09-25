import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const ButtonGroup = ({ sortByTitle, sortByDate, resetOrder, setDateOrder, dateOrder }) => {
    const handleDateOrder = () => {
        setDateOrder(dateOrder === 'asc' ? 'desc' : 'asc');
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "btn-grp join join-vertical lg:join-horizontal", children: [_jsx("button", { className: "btn join-item", onClick: sortByTitle, children: "\uD83D\uDD24" }), _jsxs("button", { className: "btn join-item", onClick: () => {
                        sortByDate();
                        handleDateOrder();
                    }, children: ["\uD83D\uDCC5 ", dateOrder === 'asc' ? '⬆️' : '⬇️'] }), _jsx("button", { className: "btn join-item", onClick: resetOrder, children: "\uD83D\uDD04" })] }) }));
};
export default ButtonGroup;
