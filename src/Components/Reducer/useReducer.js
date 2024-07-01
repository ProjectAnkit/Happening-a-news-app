import React,{ useReducer } from "react";

export default (Reducer, actions, initialstate) => {

    const Context = React.createContext()

    const Provider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer, initialstate)
    const Actions = {}
    for(i in actions){
        Actions[i] = actions[i](dispatch);
    }

        return(
            <Context.Provider value={{state,...Actions}}>
                {children}
            </Context.Provider>
        )
    }

    return {Context,Provider}
}