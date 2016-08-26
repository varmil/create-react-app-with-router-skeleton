import { withRouter } from 'react-router'
import Redirection from './Redirection';

class UserOnly extends Redirection {
	/**
	 * @Override
	 */
	redirect() {
		// App Containerで認証情報はfetch済みの想定
		if (! this.state.isLoggedIn) {
			this.props.router.replace('/login');
		}
	}
}

export default withRouter(UserOnly);
