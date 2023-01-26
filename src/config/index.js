const config= {
    production:{
      PORT:1234
    },
    developmet:{
      PORT: 5000
    }
}

module.exports = config[process.env.node_env || 'developmet' ]