🎟️ Jira Receipt

📄 A Forge-powered app to generate receipt-style summaries of Jira board activity!
Users can input the board name and username to get a clear and concise report of their work metrics.

✨ Features

📊 Dynamic Metrics:

* Total tasks on the board.

* Tasks assigned to the user.

* Tasks in progress.

* Tasks completed.

🖋️ Customizable:
Works with any Jira board, adapting to its specific columns.

🚀 Fast and Intuitive:
Enter the details, click Generate, and get your summary instantly.

📦 Getting Started
⚙️ Prerequisites
Ensure you have the following installed:

* Node.js (version 18.x or higher recommended)
* Forge CLI
* A Jira Cloud account


🛠️ Installation
Clone this repository:
git clone https://github.com/horodylova/jira-receipt
cd jira-receipt

Install dependencies:

bash
npm install

Start the React frontend:
bash
cd static/hello-world
npm start

Run Forge tunnel:
bash
cd ../..
forge tunnel

Deploy and install the app:
bash
forge deploy
forge install

Open your Jira site and navigate to Apps → Jira Receipt.

🚀 Usage
Navigate to your Jira site.
Open Apps → Jira Receipt.
Fill in the following details:
Board Name
User Name
Click Generate to see your receipt-style summary.

🛠️ Development
Running Locally

Start Forge Tunnel:
bash
forge tunnel

Start the React frontend:
bash
cd static/hello-world
npm start

Open your Jira site and test the app in real-time.

🔄 Deploying Updates

Build the React frontend:
bash
npm run build

Deploy the updated app:
bash
forge deploy

👩‍💻 Developer
Name: Svitlana Horodylova
Email: horodylova.sv@gmail.com
LinkedIn: Svitlana Horodylova

🎉 Start generating beautiful Jira receipts today!

