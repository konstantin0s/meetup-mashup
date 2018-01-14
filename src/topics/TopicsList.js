import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class TopicsList extends PureComponent {
	static propTypes = {
		topics: PropTypes.arrayOf(PropTypes.shape({
			topic: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired
		}))
	};

	render() {
		const {topics} = this.props
		return (
			<div className="topics list">
				<header>
					<h2>Topics Top 10</h2>
				</header>

				<main>
				<ol>
				 { this.props.topics.map(topic =>  (<li>{topic.topic} ({topic.count})</li>)) }
			 </ol>
				</main>
			</div>
		)
	}
}

const mapStateToProps = ({topics}) => ({topics})

export default connect(mapStateToProps)(TopicsList)
