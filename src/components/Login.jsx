import React from 'react';

export default function Login() {
	return (
		<form action="/login" method="POST">
			<label htmlFor="email">
				email
				<input type="text" name="email" />
			</label>
			<label htmlFor="password">
				password
				<input type="password" name="password" />
			</label>
			<input type="submit" value="login" />
		</form>
	);
}
