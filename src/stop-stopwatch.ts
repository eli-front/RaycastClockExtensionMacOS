import { showHUD } from "@raycast/api";
import { runCommand } from "./helpers";

export default async () => {
  await runCommand({ action: "stop-stopwatch" })
  await showHUD(`Stopped Stopwatch`);
}
