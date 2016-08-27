import { Component } from 'react';
// import { Container } from 'flux/utils';
// import LoadingStore from '../stores/LoadingStore';

// TODO: Implement Container

class Base extends Component {
	// static getStores(): Array<Store> {
	// 	return [LoadingStore];
	// }
	//
	// static calculateState(prevState: ?State): State {
	// 	console.info('[Base][calculateState] prevState', prevState);
	//
	// 	return {
	// 		nowLoading: LoadingStore.getState(),
	// 	};
	// }

	componentDidMount () {
		console.info('page did mount')
	}

	componentWillUnmount () {
		console.info('page will unmount')
	}

}

// export default Container.create(Base);
export default Base;
