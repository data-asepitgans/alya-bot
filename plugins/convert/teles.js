exports.run = {
   usage: ['telesticker'],
   hidden: ['ts', 'telestik', 'telestiker'],
   use: 'link',
   category: 'converter',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         let exif = global.db.setting
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://t.me/addstickers/NonromanticBear'), m)
         client.sendReact(m.chat, 'ðŸ•’', m.key)
         const json = await Api.neoxr('/telesticker', {
            url: args[0]
         })
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         for (let i = 0; i < json.data.length; i++) {
            client.sendSticker(m.chat, await Func.fetchBuffer(json.data[i].url), m, {
               packname: exif.sk_pack,
               author: exif.sk_author
            })
            await Func.delay(2000)
         }
         await client.reply(m.chat, Func.texted('bold', `âœ… Done.`), m)
      } catch (e) {
         console.log(e)
         client.reply(m.chat, util.format(e), m)
      }
   },
   error: false,
   limit: true,
   private: true,
   cache: true,
   location: __filename
}
