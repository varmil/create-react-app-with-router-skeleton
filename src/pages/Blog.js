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
					<Header title="prop: blog" />
				</article>
			</div>
		);
	}
}

export default Blog;
