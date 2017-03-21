import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Articles</h1>
        <h2>Fluffy Dogs</h2>
        <h2>17 Dogs Who Fail at Being Dogs</h2> 
			</div>
		);
	}
}
