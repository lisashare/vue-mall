const getters = {
  name: state => state.user.name,
  userinfo: state => state.user.userinfo,
  device: state => state.app.device,
  client: state => state.app.client
}

export default getters
