import { GITHUB_ACCOUNTS, GithubResponse } from "@/config/constants";
import axios from "axios";

const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors  
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (
  username: string | undefined,
  token: string | undefined
) => {
  const response: GithubResponse = await axios.post(
    GITHUB_USER_ENDPOINT,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: username,
      },
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );

  const status: number = response.status;
  const dataJson = response.data?.data;

  return status > 400 ? { status, data: {} } : { status, data: dataJson.user };
};

export const getContribution = async (type: string) => {
  const account = GITHUB_ACCOUNTS.find(
    (account) => account?.type === type && account?.is_active
  );

  if (!account) throw new Error("Invalid user type");

  const { username, token } = account;
  return await fetchGithubData(username, token);
};
