const path = require("path");
const rootDir = process.cwd();

module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "electron_test",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        port: 5555,
        loggerPort: 5556,
        mainConfig: path.join(rootDir, "config/webpack.main.config.js"),
        renderer: {
          config: path.join(rootDir, "config/webpack.renderer.config.js"),
          entryPoints: [
            {
              html: path.join(rootDir, "src/renderer/index.html"),
              js: path.join(rootDir, "src/renderer/index.tsx"),
              rhmr: "react-hot-loader/patch",
              name: "main_window",
            },
          ],
        },
      },
    ],
  ],
};
