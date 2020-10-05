import { SearchJiraResponse, DoneJiraTicket } from "@types";
import JiraApi from "jira-client";
import { USER_NAME, PASSWORD, HOST } from "./constants";
import { SEARCH_JIRA_JQL } from "./constants";

export class Jira {
  private client: JiraApi;

  constructor() {
    this.client = new JiraApi({
      protocol: "https",
      host: HOST,
      username: USER_NAME,
      password: PASSWORD,
      apiVersion: "2",
      strictSSL: true,
    });
  }

  /**
   * JQLでチケットを絞り込む
   */
  async getDoneTickets(): Promise<DoneJiraTicket[]> {
    const result = (await this.client.searchJira(
      SEARCH_JIRA_JQL
    )) as SearchJiraResponse;
    return result.issues.map((issue) => {
      return {
        summary: issue.fields.summary,
        description: issue.fields.description,
      };
    });
  }
}
