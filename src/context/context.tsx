"use client";

import { ActionType, BANNER_IMAGE, BANNER_TYPE, ContextType, MODE, PAGE_INFO, StateType } from "@/types/context";
import { createContext, useCallback, useReducer, ReactNode } from "react";


// Buat context dengan tipe awal null
const context = createContext<ContextType | null>(null);
// Reducer function
const reducer = (state: StateType, action: ActionType): StateType => {
  const { type, payload } = action;
  switch (type) {
    case MODE:
      return { ...state, mode: payload };
    case BANNER_TYPE:
      return { ...state, banner_type: payload };
    case BANNER_IMAGE:
      return { ...state, banner_image: payload };
    case PAGE_INFO:
      return { ...state, page_info: payload };
    default:
      return state;
  }
};

// Props untuk komponen StateProvider
interface StateProviderProps {
  children: ReactNode;
}

// Komponen Provider
const StateProvider = (props: StateProviderProps) => {
  const initialState: StateType = {
    mode: false,
    banner_image: "/img/banner.jpg",
    banner_type: "",
    page_info: {
      pageTitle: "",
      subTitle: "",
      pageName: "",
      scroll_down: true,
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const modeChange = useCallback((value: boolean) => {
    dispatch({ type: MODE, payload: value });
  }, []);

  const banner_type_function = useCallback((value: string) => {
    dispatch({ type: BANNER_TYPE, payload: value });
  }, []);

  const banner_image_function = useCallback((value: string) => {
    dispatch({ type: BANNER_IMAGE, payload: value });
  }, []);

  const page_info_function = useCallback(
    (
      pageTitle: string,
      subTitle: string,
      pageName: string,
      scroll_down: boolean = true
    ) => {
      dispatch({
        type: PAGE_INFO,
        payload: { pageTitle, subTitle, pageName, scroll_down },
      });
    },
    []
  );

  const { mode, banner_type, banner_image, page_info } = state;

  return (
    <context.Provider
      value={{
        mode,
        modeChange,
        banner_type,
        banner_type_function,
        banner_image,
        banner_image_function,
        page_info,
        page_info_function,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default StateProvider;
export { context };
