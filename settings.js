const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = 'B O T  T E A M' //Ganti Jadi Namamu
global.owner = ['6289688206739','6285256216489'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6285256216489' //Owner Utama Istilahnya
global.namabot = 'B O T' //Ganti Jadi Nama Botmu
global.packname = '© B O T' //Sticker Weem
global.author = 'B O T By CNN Team' //Sticker Weem
global.webme = 'https://chat.whatsapp.com/FKa8hqlfroFE92JrNivFwI'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'https://chat.whatsapp.com/FKa8hqlfroFE92JrNivFwI'
global.github = 'https://chat.whatsapp.com/FKa8hqlfroFE92JrNivFwI'
global.instagram = 'https://chat.whatsapp.com/FKa8hqlfroFE92JrNivFwI'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '```LU ADMIN? 🤨```',
botAdmin: '```BOT BUKAN ADMIN 😔```',
owner: '```LU BUKAN OWNER GW 😠```',
group: '```KHUSUS GROUP KOCAK 😆```',
private: '```KHUSUS PRIVATE CHAT```',
bot: '```KHUSUS PENGGUNA NOMER BOT```',
wait: '```⏳ SABAR SEDANG DI PROSES ...```',
done: '```⏳ Nih Udah Jadi ```',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
