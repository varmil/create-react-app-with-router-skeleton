import React, { Component } from 'react';
import FormActions from '../actions/FormActions';
import { Paper, RaisedButton, TextField } from 'material-ui';
import ActionAndroid from 'material-ui/svg-icons/action/android';

// TODO: ymt 2016/08/25 汎用コンポーネントの通信先を変えたい場合、どうするのがベスト？
// つまり、送信ボタンをクリックした時のハンドラを親に委譲するとか、ActionsにURLパラメタを入れるとか、TextForm自体にURL propsを渡すとか。

const paperStyle = {
	padding: 20,
	margin: 20,
	textAlign: 'center',
	display: 'inline-block',
};

class TextForm extends Component {
	componentDidMount() {
		console.info('TextForm componentDidMount', this.props);
	}

	changeText(e) {
		FormActions.changeText(e.target.value);
	}

	send(e) {
		e.preventDefault();
		FormActions.send(this.props.formState.value);
	}

	render() {
		return (
			<div>
				<Paper style={paperStyle} zDepth={1}>
					<TextField
						className="AY-TEXT-FIELD"
						id="tf-controlled"
						hintText="Hint Text"
						value={this.props.formState.value}
						onChange={this.changeText.bind(this)}
					/>
					<RaisedButton label="Send Text" onTouchTap={this.send.bind(this)} icon={<ActionAndroid />} />
				</Paper>
			</div>
		);
	}
}

export default TextForm;
