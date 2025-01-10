import chalk from "chalk";
import alert, { configure } from "../src/index.js";

async function runTests() {
  // Test default alerts
  alert();
  alert({ type: "success", message: "Success test" });
  alert({ type: "info", message: "Info test" });
  alert({ type: "warning", message: "Warning test" });
  alert({ type: "error", message: "Error test" });

  // Test custom configuration
  configure({
    symbols: {
      success: "🎉",
      info: "📢",
    },
  });

  // Test styled alerts
  alert({
    type: "success",
    message: "Custom style test",
    style: {
      symbol: "⭐",
      color: chalk.hex("#FF69B4"),
    },
  });
}

runTests();
