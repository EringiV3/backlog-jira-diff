// jiraのスペースやプロジェクト等に依存する定数の定義

export const USER_NAME: string = process.env.JIRA_USER_NAME || "";
export const PASSWORD: string = process.env.JIRA_PASSWORD || "";
export const HOST: string = process.env.JIRA_HOST || "";

// JIRAチケットを絞り込むJQLを記述します
export const SEARCH_JIRA_JQL: string = "";
