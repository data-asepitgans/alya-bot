exports.run = {
   usage: ['listfitur'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix
   }) => {
     client.sendMessageModify(m.chat, `*List fitur bot* : [270+].\nJika ingin membeli hubungi ketik: *${isPrefix}owner*`, m, {
       largeThumb: true,
       thumbnail: 'https://telegra.ph/file/99546aa1b2a0bf20b5443.jpg'
     })
   },
   error: false,
   cache: true,
   location: __filename
}
