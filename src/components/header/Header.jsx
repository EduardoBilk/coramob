import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/login">login</Link>
					</li>
					<li>
						<Link to="/sacola">sacola</Link>
					</li>
					<li>
						<Link to="/sobre">sobre</Link>
					</li>
					<li>
						<Link to="/">loja</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
