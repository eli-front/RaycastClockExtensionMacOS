import { showHUD } from "@raycast/api";
import { runCommand } from "./helpers";

export default async () => {
  await runCommand({ action: "start-stopwatch" })
  await showHUD(`Started Stopwatch`);
};

