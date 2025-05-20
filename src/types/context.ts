export const TYPE = {
  MODE: "MODE",
  BANNER_TYPE: "BANNER_TYPE",
  BANNER_IMAGE: "BANNER_IMAGE",
  PAGE_INFO: "PAGE_INFO",
} as const;

export const { MODE, BANNER_TYPE, BANNER_IMAGE, PAGE_INFO } = TYPE;

export interface PageInfo {
  pageTitle: string;
  subTitle: string;
  pageName: string;
  scroll_down: boolean;
}

export interface StateType {
  mode: boolean;
  banner_type: string;
  banner_image: string;
  page_info: PageInfo;
}

export type ActionType =
  | { type: typeof MODE; payload: boolean }
  | { type: typeof BANNER_TYPE; payload: string }
  | { type: typeof BANNER_IMAGE; payload: string }
  | { type: typeof PAGE_INFO; payload: PageInfo };

export interface ContextType extends StateType {
  modeChange: (value: boolean) => void;
  banner_type_function: (value: string) => void;
  banner_image_function: (value: string) => void;
  page_info_function: (
    pageTitle: string,
    subTitle: string,
    pageName: string,
    scroll_down?: boolean
  ) => void;
}
