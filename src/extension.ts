import * as vscode from "vscode";
import {
  extensionActivation,
  extensionReset,
  firstTimeActivation
} from "./util";

export async function activate(context: vscode.ExtensionContext) {
  console.log(
    `Congratulations, your extension "${context.extension.packageJSON.displayName}" installed!`
  );
  firstTimeActivation(context);

  const activateCommand = vscode.commands.registerCommand(
    "zpack.activate",
    () => extensionActivation(context, "activate")
  );
  const deactivateCommand = vscode.commands.registerCommand(
    "zpack.deactivate",
    () => extensionActivation(context, "deactivate")
  );
  const resetCommand = vscode.commands.registerCommand("zpack.reset", () =>
    extensionReset(context)
  );
  context.subscriptions.push(activateCommand, deactivateCommand, resetCommand);
}

export function deactivate(context: vscode.ExtensionContext) {
  extensionActivation(context, "deactivate");
}
