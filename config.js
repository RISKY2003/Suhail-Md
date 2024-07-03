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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348117295067";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_09_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdPRXFFNGtHdHhNcG1MdXlRcGs3ekR0Y2RLRXE3bndha0xBNXlLNkFQNW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODExNzI5NTA2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTdFM0Q5QzIyNTlDQUQxM0Y4NTNGMkUxMTc5OTNFNTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDE1NzU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODExNzI5NTA2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUI1MkE0Q0VDM0JCRDg4NUNEMkM5RDIyNUJCMjA1M0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDE1NzU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODExNzI5NTA2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDhCMjQ0QTQ0OERFRUVERDUzNjAwNzdFRTdDMDc3NDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDE1NzU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODExNzI5NTA2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMERBMThBNzhCNDlFNEIyMDNDRDZDQUY1OTRDNEQzMDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDE1NzU5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm4wSEN0bnFKUmFXUTUzeG92WUk0aVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWEyNjY1NzItZTVjZC00MDQzLWFmZjMtYzZmNDk4YTJhM2ZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMTQzLFxuICAgICAgNDksXG4gICAgICAyMTUsXG4gICAgICAxNTEsXG4gICAgICAxOTAsXG4gICAgICA2MixcbiAgICAgIDE4NCxcbiAgICAgIDQxLFxuICAgICAgMjUsXG4gICAgICAxMzksXG4gICAgICAyMDAsXG4gICAgICAxMTYsXG4gICAgICAzMCxcbiAgICAgIDUyLFxuICAgICAgMjgsXG4gICAgICA5MCxcbiAgICAgIDExMyxcbiAgICAgIDUwLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMjE4LFxuICAgICAgMSxcbiAgICAgIDQ4LFxuICAgICAgMTE0LFxuICAgICAgMjEyLFxuICAgICAgMzMsXG4gICAgICAxNixcbiAgICAgIDM0LFxuICAgICAgMTA2LFxuICAgICAgMTIxLFxuICAgICAgNzgsXG4gICAgICAyNSxcbiAgICAgIDE2NyxcbiAgICAgIDEwNCxcbiAgICAgIDEwOCxcbiAgICAgIDIyNCxcbiAgICAgIDE5MixcbiAgICAgIDE4NCxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVRWU1AzRlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTcyOTUwNjc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA3OTg0NTg3ODY2MzUyOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiR0JBREVCT1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tVGc4TUdFSVczbGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaGJEakNYRUZYQ0hHazJhQkZuRUc0b2dyVDI2dEJaOTJWcVdJL0EwdWlXdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJWG5xVHg0QkVxVC9RM2ZuSnUzL1IzUmhsYk0yUExET1lmKzM0V0hzcUlWbnlJZEwvVmdoR0dwQ3NNWXlsL3lPZml6TGN4dTc2T2lVZHpRQmhObVhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqdUNiYzRjTkpFUGFWaWdNT013UGFVQ3YwY1RiZDc3UjYxVmNMbytuTDFRdWx1d01yc0UzRlE0cEdZWitKdjcvSElIUXRtQzlGcFE3ZWdOcG5xQkRBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTE3Mjk1MDY3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAxNTc1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtqUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2pSLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGRMdzh1ak1lWXRhVWMzRXN6YmMwK290aCs5QjhBY1VINWdRQ09Ka2dmMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUxMTczNTkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
