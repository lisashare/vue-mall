const getters = {
  userinfo: state => state.user.userinfo,
  username: state => state.user.userinfo.username,
  device: state => state.app.device,
  client: state => state.app.client,
  blocked: state => state.user.blocked,
  systemTime: state => state.app.systemTime,
  differTime: state => state.app.differTime
}

export default getters
