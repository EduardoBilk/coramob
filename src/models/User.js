const mongoose = require('mongoose');
const md5 = require('md5');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;
// const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'email inválido'],
		required: 'Por favor preencha seu email'
	},
	name: {
		type: String,
		required: 'por favor preencha o seu nome',
		trim: true
	}
});
userSchema.virtual('gravatar').get(function() {
	return `https://gravatar.com/avatar/${md5(this.email)}?s=200`;
});
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('User', userSchema);
