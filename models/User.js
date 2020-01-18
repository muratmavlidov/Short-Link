const { schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, requred: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: Types.objectID, ref: 'Link' }]
});

module.exports = model('User', schema);