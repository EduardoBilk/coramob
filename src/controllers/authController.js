const passport = require('passport');
// const crypto = require('crypto');
// const mongoose = require('mongoose');
// const promisify = require('es6-promisify');

// const User = mongoose.model('User');

exports.login = passport.authenticate('local', {
	failureRedirect: '/login',
	successRedirect: '/'
});

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/');
};
exports.isLoggedIn = (req, res, next) => {
	// first check if the user is authenticated
	if (req.isAuthenticated()) {
		next(); // carry on! They are logged in!
		return;
	}
	res.redirect('/login');
};

exports.confirmedPasswords = (req, res, next) => {
	if (req.body.password === req.body['password-confirm']) {
		next(); // keepit going!
		return;
	}
	res.redirect('back');
};
// TODO: esqueceu a senha
// TODO: 1) ver se o email do usuário existe
// TODO: 2) registrar um token (crypto.randomBytes(20).toString('hex');) e uma data de expiração
// TODO: 3) gerar uma url (com o respectivo GET) do token
// TODO: 4) enviar um email com o token
// TODO: 5)redirecionar pra '/login)

// TODO: reset ( renderiza a página para setar a nova senha)

// TODO: update passwords
// TODO: 1) fetch User
// TODO: 2) promisifar user.setPassword
// TODO: 3) setar o password para req.body.password
// TODO: 4) setar o token e data de expiração pra undefined
// TODO: 5) salvar o novo user
// TODO: 6) req.login(updatedUser)
