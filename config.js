const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349114053098";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_47_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDg2LFxuICAgICAgICA4OCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaSk9NS2MxN0VKaEs0a2p6bDdWV2EwODFDdmJOa0FWM2doeSs4QjJ5Qnl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMTQwNTMwOThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ2QkY1NEE3MjkyRjUxQkE2QUJFNTUzMkFEMEVCN0UyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkzMTYzOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2ZU9sWEItV1RnbW5lS3ZTZG1EYlRBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1YmQ5MjgxLWNmYWMtNDJkMi04NDI4LTBjZDgyZDUyZDI0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAzMSxcbiAgICAgIDY1LFxuICAgICAgMzMsXG4gICAgICAxMDEsXG4gICAgICAxNTYsXG4gICAgICAyMzYsXG4gICAgICAyMDAsXG4gICAgICA4MyxcbiAgICAgIDE3MSxcbiAgICAgIDE5NyxcbiAgICAgIDgyLFxuICAgICAgNzcsXG4gICAgICAxLFxuICAgICAgNjQsXG4gICAgICAxNzksXG4gICAgICAxMTcsXG4gICAgICAyNDgsXG4gICAgICAyMTYsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICA1OSxcbiAgICAgIDIwMSxcbiAgICAgIDEyNSxcbiAgICAgIDE5MSxcbiAgICAgIDU1LFxuICAgICAgMjAzLFxuICAgICAgODAsXG4gICAgICA2NCxcbiAgICAgIDMwLFxuICAgICAgNDAsXG4gICAgICAyMjgsXG4gICAgICAxMjcsXG4gICAgICAyMDMsXG4gICAgICAxMjEsXG4gICAgICAwLFxuICAgICAgNDYsXG4gICAgICAxOTcsXG4gICAgICAxNjcsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5QU5WTUdQNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNDA1MzA5ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTU4OTQ2MjkyODIwMDU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwlqOYQXJpeWlrZSDwn6ea8J+Pv+KAjeKZgu+4j/CflqTwlqOYXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1BvOHZNRUVPNmxrTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKUEMxQTV6bzdkK2tjeEk0UkRtbFJnUnF0SXZ1Zkx6TmFZWi9EYmw4c0ZnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVwaFRzU284ZGhiWERISmZtSm5DNFdTNkZjc0h3MG44Uktmc1ZkRlZJS3JtTjdDSExFa05Eakgrd1Ruc2lKWnlGTkorN1BFeE9EdE5xdnR5YzgzQUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZKTFZjYWFVSFJERHB6QzdnODVwSG1OTXJ2cVl5aHpwaFEwMmtGYzZNbWU5aHdYdS8zTlE2UldEcjlNY0NaVXY3cU5YTWVIVXB2alpVaXZrQjBXUUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTQwNTMwOTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkzMTYzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJTalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlNqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ0pucUJYTzBSR0kvZHl3TkkwZUUyeVVlQ05BS3dCU0dlbytPY2lBRW0wST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzE2Nzk1NDkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5MzE2Mzc0NzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
