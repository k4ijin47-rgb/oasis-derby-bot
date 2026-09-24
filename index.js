 const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const DB = "./data.json";

if (!fs.existsSync(DB)) fs.writeFileSync(DB, "{}");

const load = () => JSON.parse(fs.readFileSync(DB));
const save = d => fs.writeFileSync(DB, JSON.stringify(d));

const horses = [
  "サンダー","ルナ","フェニックス","ミスト",
  "オアシス","ギャラクシー","ブレイズ","エクリプス"
];

client.once("ready", () => {
  console.log("🏇 OASIS Derby 起動");
});

client.login(TOKEN);
