exports.run = {
   usage: ['ai'],
   use: 'prompt',
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'hi'), m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Api.neoxr('/gpt-pro', {
            q: text
         })
         client.sendReact(m.chat, '✅', m.key)
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         client.reply(m.chat, json.data.message, m)
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
