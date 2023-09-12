exports.run = {
   usage: ['link'],
   hidden: ['getlink'],
   category: 'group',
   async: async (m, {
      client,
      Func
   }) => {
      await client.sendMessageModify(m.chat, 'https://chat.whatsapp.com/' + (await client.groupInviteCode(m.chat)), m, {
          largeThumb: true,
          thumbnail: 'https://iili.io/JH9XPB1.jpg'
          })
   },
   group: true,
   botAdmin: true
}
