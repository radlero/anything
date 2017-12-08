'use strict'

class StoreUser {
  get rules () {
    return {
      username: "required|unique:users",
      email: "required|unique:users|email",
      password: "required",
    }
  }
}

module.exports = StoreUser
