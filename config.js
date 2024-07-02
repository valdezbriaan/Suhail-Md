const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="brayanmlawa0917@gmail.com"
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


global.devs = "255655990092" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255655990092";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_10_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM3LFxuICAgICAgICA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDk4LFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDczLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRtNXpCUEl2Z1BsR3hUcUd6dzJiNHVVaEpYUW5SeGMwYktmLy9BVzVnVEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9tSUJWNW9nUlZHaThwR0NJR09xTEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTU1N2E0NjItMmE0Mi00ZWIyLWE0MGEtZjBlNDMyNWVkNjFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTEsXG4gICAgICAyNTIsXG4gICAgICAxNixcbiAgICAgIDIyMSxcbiAgICAgIDIzNSxcbiAgICAgIDE0NixcbiAgICAgIDE1MixcbiAgICAgIDI1MixcbiAgICAgIDE5NyxcbiAgICAgIDIzLFxuICAgICAgMTQxLFxuICAgICAgMjMxLFxuICAgICAgMTI4LFxuICAgICAgODQsXG4gICAgICA3NSxcbiAgICAgIDE4NSxcbiAgICAgIDIzMCxcbiAgICAgIDMyLFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDc5LFxuICAgICAgMTA1LFxuICAgICAgMTk0LFxuICAgICAgMjQ5LFxuICAgICAgODksXG4gICAgICAxNixcbiAgICAgIDI1NSxcbiAgICAgIDEwNixcbiAgICAgIDE2MCxcbiAgICAgIDE4OSxcbiAgICAgIDEwOSxcbiAgICAgIDIxMSxcbiAgICAgIDE5MCxcbiAgICAgIDIyLFxuICAgICAgMjAyLFxuICAgICAgMjAzLFxuICAgICAgMjQ3LFxuICAgICAgMTA4LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllGN0QyWEJHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NTU5OTAwOTI6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWYWxkZXpfXCIsXG4gICAgXCJsaWRcIjogXCIxNDY4OTI1MTIwNDcxODQ6NTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzJsN0lBQ0VMQ1hqclFHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUcEhJbGF3ZTljcElzNzFsaEpscmhXZjlBZUVFa2NueWNYdy9sQUdPaFdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBGT3RmemZ5NjZ6NXBGbDlaQ0dOYXE3MTdyc3NJNTgxdXE0SVQwR1l2a25vNEsrZ3k4anlkakZhYXB3aUpkUlFhRTRPZDlrZTF0SjlEZ3JYdmVlWkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1xRHVtK2lhb1NhVnovUFI0T0hWalpuK0lhUDJYdWNBOTNOTjc5UE5VNkxwclFoWkpOSGo1elZ0VXFtWnVWMUg1ZDBxYUxORExxcE5NM0tWL3JWR0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY1NTk5MDA5Mjo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4OTcwMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHZmZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdmZi5qc29uIjogIntcImtleURhdGFcIjpcIi9mdUhXZnh5WFpFdHBTTzF4Qk1IcnduOEdJWVE1c3VlMzg1OUQwSGpKSnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM4NjQ1MjI5LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDgsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "VALDEZ-MD",
  ownername:process.env.OWNER_NAME|| "Valdez_",


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
