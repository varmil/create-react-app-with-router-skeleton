import { withRouter } from 'react-router'
import Redirection from './Redirection';

class GuestOnly extends Redirection {
	/**
	 * @Override
	 */
	redirect() {
		// App Containerで認証情報はfetch済みの想定
		if (this.state.isLoggedIn) {
			this.props.router.replace('/');
		}
	}
}

export default withRouter(GuestOnly);
