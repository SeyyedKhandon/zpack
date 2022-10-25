import * as vscode from "vscode";
const showDialog = vscode.window.showInformationMessage;

export function extensionActivation(
  context: vscode.ExtensionContext,
  state: "activate" | "deactivate" = "activate"
) {
  const tpack = vscode.extensions.getExtension("SeyyedKhandon.tpack");
  const gpack = vscode.extensions.getExtension("SeyyedKhandon.gpack");
  const fpack = vscode.extensions.getExtension("SeyyedKhandon.fpack");
  const qpack = vscode.extensions.getExtension("SeyyedKhandon.qpack");
  const epack = vscode.extensions.getExtension("SeyyedKhandon.epack");
  if (!tpack || !gpack || !fpack || !qpack || !epack)
    return showDialog(
      "Some Extensions(tpack or gpack, fpack, qpack,epack) are missing!"
    );
  tpack.activate().then(() => {
    vscode.commands.executeCommand(`tpack.${state}`);
  });
  gpack.activate().then(() => {
    vscode.commands.executeCommand(`gpack.${state}`);
  });
  fpack.activate().then(() => {
    vscode.commands.executeCommand(`fpack.${state}`);
  });
  qpack.activate().then(() => {
    vscode.commands.executeCommand(`qpack.${state}`);
  });
  epack.activate().then(() => {
    vscode.commands.executeCommand(`epack.${state}`);
  });
  showDialog(`${context.extension.packageJSON.displayName} is ${state}d!`);
  // if(state==="deactivate")
  // context.globalState.update(context.extension.id, undefined);
}

export function firstTimeActivation(context: vscode.ExtensionContext) {
  const version = context.extension.packageJSON.version ?? "1.0.0";
  const previousVersion = context.globalState.get(context.extension.id);
  if (previousVersion === version) return;

  extensionActivation(context);
  context.globalState.update(context.extension.id, version);
}
