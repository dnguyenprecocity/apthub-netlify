const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (_, res) => {
  res.send("Hello World");
});

router.get("/.well-known/apple-app-site-association", (_, res) => {
  res.json({
    applinks: {
      applinks: {
        apps: [],
        details: [{ appID: "89P5VX46N4.com.precocity.dmras", paths: ["*"] }],
      },
    },
  });
});

router.get("/.well-known/assetlinks.json", (_, res) => {
  res.send([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.precocity.dmras",
        sha256_cert_fingerprints: [
          "0D:A9:D8:55:E7:88:8F:B4:CE:99:C4:71:37:27:46:1E:8B:08:3D:B4:4A:0A:C9:46:97:D2:39:E0:86:25:62:08",
          "82:DC:55:01:53:BA:0A:7B:FD:02:CB:3A:69:52:CD:88:5A:51:FC:4B:AF:9C:AD:C8:A7:42:8D:A6:17:BC:DC:CD",
          "CF:63:46:B6:77:87:A2:38:76:1F:C6:09:38:70:B5:CC:B2:B0:16:CE:F5:0F:89:19:D9:AE:96:08:FC:06:F6:66",
        ],
      },
    },
  ]);
});

app.use("/", router);
// app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
