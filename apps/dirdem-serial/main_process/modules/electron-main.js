const { app, BrowserWindow } = require('electron');

let window

function startElectronMainProcess() {
  app.on('ready', () => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (window === null) {
      createWindow()
    }
  })
}

function createWindow() {
   window = new BrowserWindow({
    width: 1000,
    height: 750,
    icon: `${__dirname}/src/assets/logo/dirdem-micro-icon-app.ico`,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    },
  })
  window.loadFile('dist/dirdem-serial/index.html');
  window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })
  window.removeMenu()
}


module.exports = startElectronMainProcess();
