// backlogのスペースやプロジェクト等に依存する定数の定義

// 検索の対象とするプロジェクトIDを指定する
export const TARGET_PROJECT_ID_LIST: number[] = [];

// 未完了ステータスID
export const ISSUE_STATUS_UNDONE = [1, 2, 3];

// 'xxx.backlog.jp' or 'xxx.backlogtool.com' or 'your package host'
export const SPACE_HOST: string = process.env.BACKLOG_SPACE_HOST || "";
export const API_KEY: string = process.env.BACKLOG_API_KEY || "";
