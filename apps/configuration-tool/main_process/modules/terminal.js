const { ipcMain } = require('electron');
const pty = require("node-pty");
const os = require("os");
const shell = os.platform() === "win32" ? "powershell.exe" : "bash";

function loadTerminal(mainWindow) {
    const ptyProcess = pty.spawn(shell, [], {
        name: "dirdem-terminal",
        cwd: process.env.HOME,
        env: process.env
    });

    ptyProcess.on('data', data => {
        mainWindow.webContents.send("incomingTerminalData", data);
        console.log("Data sent");
    });

    ipcMain.on("sendTerminalData", (event, key) => {
        ptyProcess.write(key);
    });
}

module.exports = { loadTerminal: loadTerminal }
