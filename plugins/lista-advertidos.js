let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users

let caption = `β οΈ ππππΌππππ πΌπΏππππππΏππ : ππΌππππΏ
*β­β’Β·βββββββββββββββββββΒ·β’*
β *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `
β
β *${i + 1}.* ${conn.getName(jid)  == undefined ? 'Sin Usuarios' : conn.getName(jid) + ` *(${user.warn}/4)*`}
β ${isOwner ? '@' + jid.split`@`[0] : jid}\nβ - - - - - - - - -`.trim()).join('\n') : ''}
*β°β’Β·βββββββββββββββββββΒ·β’*`
await conn.sendButton(m.chat, caption, `β οΈ πππ©ππ₯π§ππ‘πππ β’ ${warns ? `*${warns}/4*` : '*0/4*'}\n${wm}`, null, [ 
['π  π π‘ π¨ βοΈ', '/menu']], m, { mentions: await conn.parseMention(caption) })}

handler.command = /^(listaadv|listadv|adv|advlist|advlista)$/i 

export default handler
