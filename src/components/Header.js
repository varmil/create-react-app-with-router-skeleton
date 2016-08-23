import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'

// const { string } = PropTypes;

// const Header = ({ title, className }) => {
//   const styles = `header-container ${className}`;

//   return (
//     <header className={styles}>
//       <h1 className="header-title">{title}</h1>
//     </header>
//   );
// };

// Header.propTypes = {
//   className: string,
//   title: string
// };

// export default Header;


export default class Header extends Component {
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