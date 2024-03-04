/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const RedirectContext = createContext({});
const FirstTimeContext = createContext({});

function redirectReducer(state, action) {
  if (action.type === "enableRedirect") {
    return {
      ...state,
      redirect: true,
    };
  }
  if (action.type === "disableRedirect") {
    return {
      ...state,
      redirect: false,
    };
  }
}

function firstTimeReducer(state, action) {
  if (action.type === "firstTimeEnd") {
    return {
      ...state,
      firstTime: false,
    };
  }
}

const redirectInitVal = { redirect: true };
const firstTimeInitVal = { firstTime: true };

export const useRedirectContext = () => useContext(RedirectContext);
export const useFirstTimeContext = () => useContext(FirstTimeContext);

export function OtherContextProvider({ children }) {
  const [redirectState, dispatchRedirect] = useReducer(
    redirectReducer,
    redirectInitVal,
  );
  const [firstTimeState, dispatchFirstTime] = useReducer(
    firstTimeReducer,
    firstTimeInitVal,
  );
  const redirectContextValue = {
    state: redirectState,
    dispatch: dispatchRedirect,
  };
  const firstTimeContextValue = {
    state: firstTimeState,
    dispatch: dispatchFirstTime,
  };

  return (
    <RedirectContext.Provider value={redirectContextValue}>
      <FirstTimeContext.Provider value={firstTimeContextValue}>
        {children}
      </FirstTimeContext.Provider>
    </RedirectContext.Provider>
  );
}
