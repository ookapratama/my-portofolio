import { GITHUB_ACCOUNTS, CalendarResponse } from "@/config/constants";

type GithubGraphQLResponse = {
  data: { user: CalendarResponse | null };
};

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
            contributionLevel
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (
  username: string | undefined,
  token: string | undefined,
) => {
  const response = await fetch(GITHUB_USER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      query: GITHUB_USER_QUERY,
      variables: {
        username: username,
      },
    }),
  });

  const status: number = response.status;
  const responseJson: GithubGraphQLResponse | undefined = await response
    .json()
    .catch(() => undefined);
  const dataJson = responseJson?.data;

  return status >= 400
    ? { status, data: {} }
    : { status, data: dataJson?.user ?? {} };
};

export const getContribution = async (type: string) => {
  const account = GITHUB_ACCOUNTS.find(
    (account) => account?.type === type && account?.is_active,
  );

  if (!account) throw new Error("Invalid user type");

  const { username, token } = account;
  return await fetchGithubData(username, token);
};
