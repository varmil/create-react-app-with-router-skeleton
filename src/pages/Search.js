import React, { Component } from 'react';
import FormStore from '../stores/FormStore';
import { Container } from 'flux/utils';
import Header from '../components/Header';
import TextForm from '../components/TextForm';
// import List from 'components/List/List';

// const listItems = [
//   { title: 'One' },
//   { title: 'Two' },
//   { title: 'Three' },
//   { title: 'Four' }
// ];

class Search extends Component {
	static getStores(): Array<Store> {
		return [FormStore];
	}

	static calculateState(prevState: ?State): State {
		console.info('[Search][calculateState] prevState', prevState);

		return {
			form: FormStore.getState(),
			areAllComplete: FormStore.areAllComplete(),
		};
	}

	render() {
		return (
			<div className="Search">
				<Header title="prop: Search" />
				<TextForm formState={this.state.form} />
			</div>
		);
	}
}

export default Container.create(Search);
