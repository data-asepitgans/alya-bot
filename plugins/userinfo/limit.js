exports.run = {
   usage: ['limit'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
      Func
   }) => {
      let user = global.db.users.find(v => v.jid == m.sender)
      if (user.limit < 1) return client.reply(m.chat, `🚩 Your bot usage has reached the limit and will be reset at 00.00\n\nTo get more limits, upgrade to a premium plan send *${isPrefix}premium*`, m)
      client.sendMessageModify(m.chat, `🍟 Your limit : [ *${Func.formatNumber(user.limit)}* ]${!user.premium ? `\n\nTo get more limits, upgrade to a premium plan send *${isPrefix}premium*` : ''}`, m, {
        largeThumb: true,
        thumbnail: 'https://telegra.ph/file/495bb295e2660fbe55fb0.jpg'
      })
   },
   error: false
}
