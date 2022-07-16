import log4js = require("log4js");

export default class LoggerHelper {
  public static initialize(): void {
    log4js.configure({
      appenders: { info: { type: "file", filename: "info.log" } },
      categories: { default: { appenders: ["info"], level: "info" } },
    });

    log4js.getLogger("cheese");
  }
}
