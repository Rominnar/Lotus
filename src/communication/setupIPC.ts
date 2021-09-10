/* eslint-disable import/no-extraneous-dependencies */
import { ipcMain, app } from 'electron';
import ipcTypes from '../common/ipcTypes';

export default function
setupIPC(mainWindow: Electron.BrowserWindow): void {
  ipcMain.on(ipcTypes.EXIT, async () => {
    app.exit();
  });

  ipcMain.on(ipcTypes.DIFF_MAIN_WINDOW, async () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on(ipcTypes.MIN_MAIN_WINDOW, async () => {
    mainWindow.minimize();
  });
}
