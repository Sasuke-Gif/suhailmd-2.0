const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349032330582";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_19_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuckJYbE55bldjaG12Y3pxS1ZWM2cyd3IxRnd5NjFsaW9USlNabjF6dmpnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzIzMzA1ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY1RThFNEUxOERERDY1N0IxNDA1MTdENjFEQkNEOTgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTE3MjM1NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOeVRkeEhFOVJUQ294Q1Z3YXdDZmlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2Mjk0MjJhLTRlOWEtNDE4Yy05NzgxLTJiMTMyZTNjNzk5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICA2MyxcbiAgICAgIDQsXG4gICAgICAxOTYsXG4gICAgICAxMzksXG4gICAgICAxOSxcbiAgICAgIDIzMyxcbiAgICAgIDIxMSxcbiAgICAgIDk3LFxuICAgICAgMTIwLFxuICAgICAgMzgsXG4gICAgICAxNTEsXG4gICAgICA3NyxcbiAgICAgIDI1NCxcbiAgICAgIDE5MixcbiAgICAgIDU4LFxuICAgICAgNDQsXG4gICAgICA5OSxcbiAgICAgIDI0MyxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDI0MSxcbiAgICAgIDE4NSxcbiAgICAgIDk1LFxuICAgICAgMTU1LFxuICAgICAgMTY2LFxuICAgICAgNjEsXG4gICAgICAyMzAsXG4gICAgICAyMzAsXG4gICAgICAyMzcsXG4gICAgICAyMjMsXG4gICAgICAyNDksXG4gICAgICAxNTcsXG4gICAgICA4MixcbiAgICAgIDk3LFxuICAgICAgMTY2LFxuICAgICAgMTg5LFxuICAgICAgMTQ5LFxuICAgICAgMjA3LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjkzSzcxWTM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMyMzMwNTgyOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTc3NDc5OTg4MDM3MjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRzRoYmNCRVBuQnNyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlU2cXFlMVVxWHBTNWVtS29ITVJpOVFQa0VKYndYUWR6QS9TRWdrb0FTeWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieUxhM1NVbGVVQUR1RFRVeDYzYUZSVGZkUjJxdnRWU09FZ1lsZGI1WUJiTDVaeXdERjFxaGZIenkxdzZVVFNHSEs4RHI5MUZMZmhwVGw4REVIVGlHQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3FvMFY0aHF4YnViTHJoTWtMeEo2bFZIRmJ6dEt0cnVhSUJYd1JPYjZCTE5HV1pZdFdzdHIrUCtueHhNNEhRcXp1blVxYTBWMW5QSlNkclFFY2Y1REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMjMzMDU4MjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUxNzIzNTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbndcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBudy5qc29uIjogIntcImtleURhdGFcIjpcIlZtY1RYemN1U1l0b0FDNm9EZFZGR3g2NHZQMVNabGdSa1NRaDJSU1NNNWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzgzODY4MDE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM1MTcyMzMxMjM1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
