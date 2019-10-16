import React, { Component } from 'react'
import Title from '../Globals/Title'
import Tour from './Tour'

import '../../scss/tour.scss'

export default class TourList extends Component {
    state = {
        tours: [],
        sortedTours: []
    }

    componentDidMount() {
        this.setState({
            tours: this.props.tours.edges,
            sortedTours: this.props.tours.edges
        })
    }
    render() {
        return (
            <section className="featured-tours spacing">
                <div className="container">
                    <Title title="Our Tours" />
                    <div className="row">
                        {
                            this.state.sortedTours.map(({ node }) => {
                                return (
                                    <Tour key={node.contentful_id} tour={node} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
