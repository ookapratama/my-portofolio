import { fetchGithubData } from "@/app/api/dashboard/github";
import {
  GITHUB_ACCOUNTS,
  GithubContributions,
  GithubResponse,
} from "@/config/constants";
import { create } from "zustand";

type AccountStore = {
  username: string | undefined;
  token: string | undefined;
};

type GithubData = {
  status: number;
  data: GithubContributions;
};

type GithubStore = {
  status: number;
  error: string | undefined;
  loading: boolean;
  account: AccountStore;
  data: GithubData | {};
  getContribution: (type: string) => void;
};

export const githubStore = create<GithubStore>((set, get) => ({
  data: {},
  loading: false,
  status: 0,
  error: "",
  account: { username: "", token: "" },
  getContribution: async (type) => {
    set({ loading: true });

    const account = GITHUB_ACCOUNTS.find(
      (account) => account?.type === type && account?.is_active
    );

    if (!account) throw new Error("Invalid user type");

    const { username, token } = account;

    set({ account: { username: username, token: token } });

    try {
      const data = await fetchGithubData(
        get().account.username,
        get().account.token
      );
      set({ data: data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));
