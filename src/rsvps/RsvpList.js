import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import RsvpItem from './RsvpItem'
import PropTypes from 'prop-types'

class RsvpList extends PureComponent {
	static propTypes = {
		rsvps: PropTypes.arrayOf(PropTypes.object).isRequired
	}
	
	render() {
		return (
			<div className="rsvp list" style={{width: 500, float: 'left'}}>
				<header>
					<h1>RSVP list</h1>
				</header>
				
				<main>
					{ this.props.rsvps.map(rsvp => <RsvpItem key={rsvp.rsvp_id} rsvp={rsvp} />) }
				</main>
			</div>			
		)
	}
}

const mapStateToProps = ({rsvps}) => ({rsvps})

export default connect(mapStateToProps)(RsvpList)