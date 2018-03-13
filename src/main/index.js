const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

//Check is it development
const isDevelopment = process.env.NODE_ENV !== 'production'

let win;
//Creates electron window
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    //Allows it to run in development mode
    if (isDevelopment) {
        win.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
        win.webContents.openDevTools();
    }
    //Live editing
    else {
        win.loadURL(url.format({
            pathname: path.resolve('index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
