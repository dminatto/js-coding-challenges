const prompt = require("prompt-sync")();

const challenges = {
  1: require("./challenge1-sum"),
  2: require("./challenge2-fibonacci"),
  3: require("./challenge3-billing-analysis"),
  4: require("./challenge4-state-percentage"),
  5: require("./challenge5-string-reverse"),
};

function showMenu() {
  console.log("\n=== JavaScript Coding Challenges ===");
  console.log("1. Sum Calculator");
  console.log("2. Fibonacci Checker");
  console.log("3. Revenue Analysis");
  console.log("4. State Revenue Distribution");
  console.log("5. String Reversal");
  console.log("0. Exit");
  console.log("================================\n");
}

function runChallenge() {
  let running = true;

  while (running) {
    showMenu();
    const choice = prompt("Select a challenge (0-5): ");

    if (choice === "0") {
      console.log("Goodbye!");
      running = false;
      continue;
    }

    if (challenges[choice]) {
      console.log(`\nRunning Challenge ${choice}...\n`);
      challenges[choice]();
      prompt("\nPress Enter to continue...");
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
}

if (require.main === module) {
  runChallenge();
}
