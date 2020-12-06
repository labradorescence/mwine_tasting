import React from 'react'
import ReviewCollection from './ReviewCollection'
import ReviewForm from './ReviewForm'
import { Container } from 'semantic-ui-react'
import Search from './Search'

export default class WinePage extends React.Component{

    state = {
        searchTerm: "low acidity",
        review: []
    }

    componentDidMount(){
        fetch("https://mwine.herokuapp.com/api/v1/reviews")
            .then(r => r.json())
            .then(review => {
                this.setState({ review }) //setState w/ fetched db
            })
    }

    addReview = newReview => { //this render the new review (without refreshing the page)
        this.setState({
            review: [newReview, ...this.state.review]
        })
    }

    handleSetSearch = searchTerm => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    render(){
        return (
            <Container>

                <ReviewForm addReview={this.addReview}/>

                <ReviewCollection review={this.state.review} searchTerm={this.state.searchTerm}/>

                <Search searchTerm ={this.state.searchTerm}
                setSearchTerm = {this.handleSetSearch}/>
                
                </Container>
        )
    }

}