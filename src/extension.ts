import * as vscode from "vscode";
import { extensionActivation, firstTimeActivation } from "./util";

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
  context.subscriptions.push(activateCommand, deactivateCommand);
}

export function deactivate(context: vscode.ExtensionContext) {
  extensionActivation(context, "deactivate");
}
