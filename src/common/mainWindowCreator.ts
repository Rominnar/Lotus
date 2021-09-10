/* eslint-disable import/no-extraneous-dependencies */
import { protocol, BrowserWindow } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
import setupIPC from '../communication/setupIPC';
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
]);

export default class MainWindow {
    private static mainWindow: MainWindow | null;

    public static windowInstance: Electron.BrowserWindow | null;

    private static async createWindow() {
      // Create the browser window.
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {

          // Use pluginOptions.nodeIntegration, leave this alone
          // for more info See
          // nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration
          nodeIntegration: (process.env
            .ELECTRON_NODE_INTEGRATION as unknown) as boolean,
          contextIsolation: false,
          enableRemoteModule: true,

        },
      });

      this.windowInstance = win;

      if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await win.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}main` as string);
        if (!process.env.IS_TEST) win.webContents.openDevTools();
      } else {
        createProtocol('app');
        // Load the index.html when not in development
        win.loadURL('app://./main/main.html');
        // shell.openExternal('app://./index.html')
      }

      setupIPC(win);
    }

    public static getInstance():MainWindow {
      if (!this.mainWindow) {
        return this.createWindow();
      }
      return this.mainWindow;
    }
}
