import * as vscode from "vscode";
import { extractAsKeyValue, GeneralObject } from "./util";
import { defaultSettings } from "./defaultSettings";

const updateUserSettings = async (settings: GeneralObject[]) => {
  settings.forEach(async (setting) => {
    const { key, value } = extractAsKeyValue(setting);
    await vscode.workspace
      .getConfiguration()
      .update(key, value, vscode.ConfigurationTarget.Global);
  });
};
export async function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "Essentials Web Extension Pack (XPack series)" is now active!'
  );
  let disposable = vscode.commands.registerCommand(
    "xpack.updateConfig",
    async () => {
      console.log(JSON.stringify(defaultSettings, null, 1));
      await updateUserSettings(defaultSettings);
      await vscode.window.showInformationMessage(
        "XPack Config has been updated"
      );
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
