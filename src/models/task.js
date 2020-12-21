//base de datos 
const mongose = require('mongose');
const schema = mongose.schema;

new Schema({
  title: String,
  description: String,
    status: {
      type: Boolean,
      default: false

    }
});

module.exports = mongose.model('task', TaskSchema);