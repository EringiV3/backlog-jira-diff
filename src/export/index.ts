import { BacklogTicket } from "@types";
import fs from "fs";
import moment from "moment";

/**
 * 結果をファイルに出力します
 * @param tickets
 */
export function exportResult(tickets: BacklogTicket[]): void {
  fs.writeFile(
    `dist/${getFileName()}.json`,
    JSON.stringify(tickets, null, 2),
    (err: any) => {
      if (err) throw err;
      console.log("正常に書き込みが完了しました");
    }
  );
}

/**
 * ファイル名を取得します
 */
function getFileName(): string {
  return moment().format("YYYYMMDDHHMMSS");
}
