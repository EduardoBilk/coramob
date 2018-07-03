import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">loja</Link>
					</li>
					<li>
						<Link to="/sobre">sobre</Link>
					</li>
					<li>
						<Link to="/sacola">sacola</Link>
					</li>
					<li>
						<Link to="/login">login</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
