export type BacklogGetIssuesResponse = {
  issueKey: string;
  [key: string]: any;
};

export type SearchJiraResponse = {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: JiraIssue[];
};

export type BacklogTicket = {
  issueKey: string;
  summary: string;
  url: string;
};

export type DoneJiraTicket = Pick<JiraIssueFiealds, "summary" | "description">;

export type JiraIssue = {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: JiraIssueFiealds;
};

export type JiraIssueFiealds = {
  summary: string;
  description: string | null;
  [key: string]: any;
};
