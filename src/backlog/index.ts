// 未完了状態の課題一覧をプロジェクトごとに取得
import { BacklogGetIssuesResponse, BacklogTicket } from "@types";
import "isomorphic-form-data";
import "isomorphic-fetch";
import * as es6promise from "es6-promise";
import * as backlogjs from "backlog-js";
import {
  TARGET_PROJECT_ID_LIST,
  SPACE_HOST,
  API_KEY,
  ISSUE_STATUS_UNDONE,
} from "./constants";

es6promise.polyfill();

export class Backlog {
  private client: backlogjs.Backlog;
  private targetProjectIds: number[];
  private undoneStatusIds: number[];

  constructor() {
    this.client = new backlogjs.Backlog({ host: SPACE_HOST, apiKey: API_KEY });
    this.targetProjectIds = TARGET_PROJECT_ID_LIST;
    this.undoneStatusIds = ISSUE_STATUS_UNDONE;
  }

  /**
   * targetProjectIdsに指定されたプロジェクトごとの未完了のチケットを取得します
   */
  async getUndoneTicketsIssueKey(): Promise<BacklogTicket[]> {
    const undoneTickets: BacklogGetIssuesResponse[][] = await Promise.all(
      this.targetProjectIds.map(
        async (projectId) =>
          (await this.client.getIssues({
            projectId: [projectId],
            keyword: "",
            statusId: this.undoneStatusIds,
            count: 100,
          })) as BacklogGetIssuesResponse[]
      )
    );
    return undoneTickets.flat().map((ticket) => {
      return {
        issueKey: ticket.issueKey,
        summary: ticket.summary,
        url: `https://${SPACE_HOST}/view/${ticket.issueKey}`,
      };
    });
  }
}
