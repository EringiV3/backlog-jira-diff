import { BacklogTicket, DoneJiraTicket } from "@types";

/**
 * JIRAチケットのサマリーや説明欄に、未完了バックログチケットの課題番号が含まれているものだけに絞り込みます
 * @param backlogTickets
 * @param jiraTickets
 */
export function filterUndoneBacklogTickets(
  backlogTickets: BacklogTicket[],
  jiraTickets: DoneJiraTicket[]
): BacklogTicket[] {
  const diff = backlogTickets.filter((backlogTicket) => {
    for (let index = 0; index < jiraTickets.length; index++) {
      const targetTicket = jiraTickets[index];
      if (
        targetTicket.summary.includes(backlogTicket.issueKey) ||
        targetTicket.description?.includes(backlogTicket.issueKey)
      ) {
        return true;
      }
    }
  });
  return diff;
}
