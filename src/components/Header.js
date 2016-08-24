import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
	render() {
		return (
			<div>
				<header className="header-container">
					<h1 className="header-title">{this.props.title}</h1>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/blog">Blog</Link></li>
				</header>
			</div>
		);
	}
}

Header.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string
};

export default Header;
