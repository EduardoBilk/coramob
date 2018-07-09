import React from 'react';

export default function Register() {
	return (
		<form action="/register" method="POST">
			<label htmlFor="name">
				nome
				<input type="text" name="name" required />
			</label>
			<label htmlFor="email">
				email
				<input type="email" name="email" required />
			</label>
			<label htmlFor="password">
				senha
				<input type="password" name="password" required />
			</label>
			<label htmlFor="password-confirm">
				confirme sua senha
				<input type="password" name="password-confirm" required />
			</label>
			<input type="submit" value="Registrar" />
		</form>
	);
}
