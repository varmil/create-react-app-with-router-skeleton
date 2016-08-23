import React, { Component } from 'react';
import Header from '../components/Header';
// import List from 'components/List/List';

// const listItems = [
//   { title: 'One' },
//   { title: 'Two' },
//   { title: 'Three' },
//   { title: 'Four' }
// ];

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<article className="women">
					<Header title="Hello This is props title" className="header-red" />
				</article>
			</div>
		);
	}
}

export default Blog;