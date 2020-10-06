import dotenv from "dotenv";
dotenv.config();
import { Backlog } from "./backlog/index";
import { Jira } from "./jira/index";
import { filterUndoneBacklogTickets } from "./utils/index";
import { exportResult } from "./export/index";
import { BacklogTicket, DoneJiraTicket } from "@types";

async function main() {
  const backlog: Backlog = new Backlog();
  const undoneBacklogTickets: BacklogTicket[] = await backlog.getUndoneTickets();

  const jira: Jira = new Jira();
  const doneJiraTickets: DoneJiraTicket[] = await jira.getDoneTickets();

  const diffTickets: BacklogTicket[] = filterUndoneBacklogTickets(
    undoneBacklogTickets,
    doneJiraTickets
  );

  exportResult(diffTickets);
}

main();
