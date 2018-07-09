const mongoose = require('mongoose');
const { promisify } = require('es6-promisify');

const User = mongoose.model('User');

exports.validateRegister = (req, res, next) => {
	console.log('validando....');
	req.sanitizeBody('name');
	req.checkBody('name', 'Você deve preencher o Nome.').notEmpty();
	req.checkBody('email', 'Você deve preencher o email.').isEmail();
	req.sanitizeBody('email').normalizeEmail({
		gmail_remove_dots: false,
		remove_extention: false,
		gmail_remove_subaddress: false
	});
	req.checkBody('password', 'Você deve preencher a senha.').notEmpty();
	req
		.checkBody(
			'password-confirm',
			'Você deve preencher a confirmação de senha.'
		)
		.notEmpty();
	req
		.checkBody('password-confirm', 'As senhas não coincidem.')
		.equals(req.body.password);
	const errors = req.validationErrors();
	if (errors) {
		errors.map(err => console.log(err.msg));
		return;
	}
	next();
};

exports.register = async (req, res, next) => {
	console.log('registrando...');
	const user = new User({ email: req.body.email, name: req.body.name });
	const registerP = promisify(User.register.bind(User));
	await registerP(user, req.body.password);
	next();
};
