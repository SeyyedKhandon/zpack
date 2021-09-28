import { GeneralObject } from "./util";

export const defaultSettings = [
  { "files.autoSave": "afterDelay" },
  { "explorer.compactFolders": false },
  { "projectManager.openInNewWindowWhenClickingInStatusBar": true },
  { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  { "editor.formatOnSave": true },
  { "cSpell.userWords": [] },
  { "eslint.alwaysShowStatus": true },
  {
    "eslint.codeAction.showDocumentation": {
      enable: true,
    },
  },
  { "eslint.lintTask.enable": true },
  { "errorLens.statusBarColorsEnabled": true },
  { "errorLens.statusBarMessageEnabled": true },
  { "errorLens.statusBarMessageType": "closestProblem" },
  { "errorLens.followCursor": "closestProblem" },
  { "errorLens.gutterIconsEnabled": true },
  { "errorLens.scrollbarHackEnabled": true },
  { "errorLens.fontStyleItalic": true },
  { "workbench.colorTheme": "One Dark Pro" },
  { "workbench.iconTheme": "material-icon-theme" },
  { "editor.fontFamily": "Fira Code" },
  { "editor.fontLigatures": true },
] as GeneralObject[];
