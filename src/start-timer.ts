import { showHUD } from "@raycast/api";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);
export async function startTimer(durationMinutes: number) {
  await execFileAsync("shortcuts", ["run", "Start Timer", "-i", durationMinutes.toString()]);
  await showHUD(`Started ${durationMinutes} minute timer`);
}
