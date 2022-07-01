import { createContext, useReducer } from "react";


const initialState = {
    budget: 2000,
    expenses: []
};



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state, expenses: [...state.expenses, action.payload]
            }
        case "RMV_EXPENSE":
            let a = state.expenses.filter(ex => ex.id !== action.payload);

            return {
                ...state, expenses: a
            }
        case "EDIT_BUDGET":
            return {
                ...state, budget: parseInt(action.payload)
            }
        default: return state;
    }

}


export const AppContext = createContext();

export const AppProvider = (props) => {


    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}>
            {props.children}
        </AppContext.Provider>
    )
}