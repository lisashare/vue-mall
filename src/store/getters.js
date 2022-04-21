const getters = {
  userinfo: state => state.user.userinfo,
  username: state => state.user.userinfo.username,
  device: state => state.app.device,
  client: state => state.app.client
}

export default getters
