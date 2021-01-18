import styles from './Timer.module.css';
import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			time: 0,
			timerStarted: false,
			result: [],
		};
	}

	componentWillUnmount() {
		clearInterval(this.timeId);
	}

	start = () => {
		this.setState({ timerStarted: true });
		this.timeId = setInterval(() => {
			this.tick();
		}, 1000);
	};
	stop = () => {
		clearInterval(this.timeId);
		this.setState({ timerStarted: false });
	};
	clear = () => {
		this.setState({ time: 0 });
	};
	save = () => {
		const { time, result } = this.state;
		this.setState({
			result: [...result, { time: time, id: result.length + 1 }],
		});
	};
	tick = () => {
		const { time } = this.state;
		this.setState({ time: time + 1 });
	};

	render() {
		const { time, timerStarted, result } = this.state;
		return (
			<div className={styles.Timer}>
				<h1>{time}</h1>

				<div className={styles.buttons}>
					<div>
						{timerStarted ? (
							<button onClick={this.stop}>Stop</button>
						) : (
							<button onClick={this.start}>Start</button>
						)}

						<button onClick={this.clear}>Clear</button>
						<button onClick={this.save}>Save</button>
					</div>
				</div>

				<div>
					{result.map(({ time, id }) => {
						return <p key={id}>{time}</p>;
					})}
				</div>
			</div>
		);
	}
}

export { Timer };
