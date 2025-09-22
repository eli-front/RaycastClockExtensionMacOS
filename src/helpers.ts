import { showHUD } from "@raycast/api";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

type Action = "start-timer" | "start-stopwatch" | "stop-stopwatch";

export async function runCommand(command: { action: Action } & Record<string, string | number>) {
  const formatted = Object.entries(command).map(([key, value]) => `${key}=${value}`).join("&")
  await execFileAsync("shortcuts", ["run", "Raycast Clock", "-i", formatted]);
}


export async function startTimer(durationMinutes: number) {
  await runCommand({ action: "start-timer", duration: durationMinutes })
  await showHUD(`Started ${durationMinutes} minute timer`);
}
