import axios, { AxiosResponse } from "axios";

export const fetcher = <T>(url: string): Promise<T> =>
  axios.get<T>(url).then((response: AxiosResponse<T>) => response.data);
