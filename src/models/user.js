import Model from 'ampersand-model'

const User = Model.extend({
  props: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    address: {
      street: 'string',
      number: 'number',
      postalCode: 'string'
    }
  }
})

export default User
