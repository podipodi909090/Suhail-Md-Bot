const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_16_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1pzbkVEZ2IyblFYY0dQQ2tnaFlqNmFPaElpenBPQVFZY0Y2YkpkK1E1WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NTA1MDMxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0MyQjQ3NzdGMjc0M0QyOEE4RTRDNzhFODM0NTBBNEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5Mzc2MTgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllaTVBnT2xFU2N5bThHMW1uY3FiSFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2QwMDhjMDEtMjkyMi00MTc5LWI1YmQtNjlkNWY4MGY0NDQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDI1MCxcbiAgICAgIDE2OCxcbiAgICAgIDIwOCxcbiAgICAgIDE5OCxcbiAgICAgIDI4LFxuICAgICAgMTAxLFxuICAgICAgMjIxLFxuICAgICAgMTM3LFxuICAgICAgMjQ5LFxuICAgICAgMjI1LFxuICAgICAgMTEzLFxuICAgICAgOTcsXG4gICAgICAxNTMsXG4gICAgICA2MCxcbiAgICAgIDIzNixcbiAgICAgIDIwNyxcbiAgICAgIDIxNixcbiAgICAgIDI1MSxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDMyLFxuICAgICAgMjQsXG4gICAgICAxMDcsXG4gICAgICA2NSxcbiAgICAgIDIyOSxcbiAgICAgIDczLFxuICAgICAgMTIzLFxuICAgICAgMTQ4LFxuICAgICAgMjEwLFxuICAgICAgNSxcbiAgICAgIDg0LFxuICAgICAgODAsXG4gICAgICAyMjEsXG4gICAgICAxNTYsXG4gICAgICAyNDYsXG4gICAgICAxNDAsXG4gICAgICAxMDksXG4gICAgICAxOTgsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjhIQ1NYWUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1MDUwMzEyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJrXCIsXG4gICAgXCJsaWRcIjogXCIxOTIxMzU4MzE3OTc4NTQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcmVyKzRHRUt2ZjBMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1RZFJQTkxDczF0U0gwZm5heUZVUUg3VFc2Z0lvNXBUQlNpeENWNkV6MDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid2lsYjU4OXZRQVowMzl1ZE9RMkFqcWFDMEthMXRLK2grMkh4WFlJbXBySjlYM05nOUI0RzRZbTVkWjdoOTJ2TUVTaUlndWp1Tkd1Um41aTFWWnh5RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ09XZHZUb1UwY2tLeElGVDhpMEdyVkE2Z01kNkdVR1d3MFRFZkluczJLeUxHcHdzSWZ4ZUpmZDExU2xWOWFkQVhVTERGV2RjMW4xUVdxakcyeXQzQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzUwNTAzMTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5Mzc2MTc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUpUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNSlQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaYklWYmhlaTl2azIrbWQ4Uml4bnBKS2ZlZ0J2Q0NHSUpORk1nbm5EblowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDIwODE2MjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTM3NjE4MTM3MFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
