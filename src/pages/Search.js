import React from 'react';
import PageBase from './Base';
import FormStore from '../stores/FormStore';
import { Container } from 'flux/utils';
import Header from '../components/Header';
import TextForm from '../components/TextForm';

class Search extends PageBase {
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
