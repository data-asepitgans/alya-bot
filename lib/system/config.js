const { Function: Func, NeoxrApi } = new(require('@neoxr/wb'))
global.Api = new NeoxrApi(process.env.API_ENDPOINT, process.env.API_KEY)
global.header = `© AsepitgansXc Bot v 9.7.0`
global.footer = `Bot_AsepitagansXc - TermuxSec ッ`
global.APIs = {
  alya: 'https://api.alyachan.biz.id'
}
global.APIKeys = {
  'https://api.alyachan.biz.id': 'yuekq2'
}
global.packname = 'Created'
global.packauthor = 'Bot_Asepitgans'
global.status = Object.freeze({
  invalid: Func.texted('bold', 'Invalid url'),
  wrong: Func.texted('bold', 'Wrong format.'),
  fail: Func.texted('bold', 'Can\'t get metadata'),
  error: Func.texted('bold', 'Error occurred'),
  errorF: Func.texted('bold', 'Sorry this feature is in error.'),
  premium: Func.texted('bold', 'This feature only for premium user.'),
  auth: Func.texted('bold', 'You do not have permission to use this feature, ask the owner first.'),
  owner: Func.texted('bold', 'This command only for owner.'),
  group: Func.texted('bold', 'This command will only work in groups.'),
  botAdmin: Func.texted('bold', 'This command will work when I become an admin.'),
  admin: Func.texted('bold', 'This command only for group admin.'),
  private: Func.texted('bold', 'Use this command in private chat.'),
  gameSystem: Func.texted('bold', 'Game features have been disabled.'),
  gameInGroup: Func.texted('bold', 'Game features have not been activated for this group.'),
  gameLevel: Func.texted('bold', 'You cannot play the game because your level has reached the maximum limit.')
})
