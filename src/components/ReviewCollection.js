import React from 'react'
import ReviewCard from './ReviewCard'
// import { Card } from 'semantic-ui-react' 


export default class ReviewCollection extends React.Component{
    
    state = {
        review: ['hi'] //set empty db setup for state
    }

    componentDidMount(){
        fetch("https://mwine.herokuapp.com/api/v1/reviews")
            .then(r => r.json())
            .then(review => {
                // console.log(review)
                // console.log(this.state)
                console.log(review)
                this.setState({ review }) //setState w/ fetched db
            })
    }

    renderCards(){
        return this.state.review.map(eachReview => 

            <ReviewCard 
            key={eachReview.id}
            acidity_level={eachReview.acidity_level}
            aroma={eachReview.aroma}
            color={eachReview.color}
            date={eachReview.date}
            name={eachReview.name}
            note={eachReview.note}
            occasion={eachReview.occasion}
            price={eachReview.price}
            rating={eachReview.rating}
            region={eachReview.region}
            taste={eachReview.taste}
            />
            
            )
    }

    render(){
        //console.log(this.state)
        return (
        <div>
          {this.renderCards()}
        </div>
        )
    }
}