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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2347049602299" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349042566475";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347049602299";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347049602299,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©M-CROSS" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "M-CROSS",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MCROSS-MD",
  ownername:process.env.OWNER_NAME|| "KING M-CROSS",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_51_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgwLFxuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitZNU5BbTNKdnRXeVJiajJQazhnS2g0WHVQdUVTdm1OdjdMdlRhR2MvTkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0OTYwMjI5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjY5REYxRUM0QTk2OTAwQjgxQ0MyOTQ4NDQwMTE0MEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MTkxMTAyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdqYms3MEcyUWtPMnJwZ1phNEhMRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWQ3ZTNhY2EtYThmOC00ZTAwLThlNmEtZGRkMDE1ODkwY2ExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDIyNyxcbiAgICAgIDUyLFxuICAgICAgMTg0LFxuICAgICAgMjMyLFxuICAgICAgODcsXG4gICAgICAxNzYsXG4gICAgICAzLFxuICAgICAgMTg4LFxuICAgICAgNDQsXG4gICAgICA2NyxcbiAgICAgIDI3LFxuICAgICAgMTAzLFxuICAgICAgMTU2LFxuICAgICAgOSxcbiAgICAgIDE3MCxcbiAgICAgIDU2LFxuICAgICAgNDIsXG4gICAgICAyMDksXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMyxcbiAgICAgIDY1LFxuICAgICAgMjMzLFxuICAgICAgMjE4LFxuICAgICAgMjQsXG4gICAgICAyNTMsXG4gICAgICA1LFxuICAgICAgMTg0LFxuICAgICAgMjA5LFxuICAgICAgMjIzLFxuICAgICAgMTc4LFxuICAgICAgNzcsXG4gICAgICAyNTMsXG4gICAgICA5NSxcbiAgICAgIDEzNSxcbiAgICAgIDIwMyxcbiAgICAgIDE5MCxcbiAgICAgIDE5LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVEWTJMM1pIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ5NjAyMjk5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MDM1NjU5NzYzOTMyOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvQnZ0Y0NFTGU1eGJnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzBqVGdET2Zsd29IVkJqNFRpTE1zNXp0U3ZLZldvYnJjTFBjRHBDd3NUaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwdldLNHg4UzE2ZmJ5TkhiZGdtakZHUThTVEYwODY0L1Z2ei9NTnpFaGlieFlRZlpIRXdlUGFIZWRpRDI3UXZVRXBSNEtpdlJPRXZCaEtVczlSck9EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3VVQrbDAyajN1QmpaOUdSR3dldXdzMmUyTU9ybnptSGxlblR1UHhidm45bVVBczNDL3Z1RHhSeHlaWklYWVBZa3ZZcVdoTkd6ODRSbnl3WlYvVlFEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ5NjAyMjk5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkxOTEwOTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHKzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUcrOS5qc29uIjogIntcImtleURhdGFcIjpcInpxcUVvV01wcVFsRjFZOUIwaWYxdnpnN3FpYVdUNGNFQ20vQ3NCMkV3enM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzIwMzQ3Mjc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc1NDgwMDE2NjRcIn0iCn0=",  // PUT SESSION ID HERE 
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
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "NEZUKO",



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
 
