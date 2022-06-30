import React, { createContext, useReducer } from "react"
import Reducer from "./Reducer"

const initialState = {
  user: [],
  token: localStorage.getItem('token') === null ? {} : json.parse(localStorage.getItem('token'))
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children, headers }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  function selectPatient(id) {
    dispatch({
      type: "SELECT_PATIENT",
      payload: id,
    })
  }

  return (
    <GlobalContext.Provider
      value={
        {
          user:state.user,
          token:state.token,
          selectPatient

        }
      }
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
