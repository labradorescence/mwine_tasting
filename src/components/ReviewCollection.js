import React from 'react'
import ReviewCard from './ReviewCard'
import { Card } from 'semantic-ui-react' 


export default class ReviewCollection extends React.Component{

    renderCards(){

        return this.props.review.map(eachReview => 

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
        <Card.Group itemsPerRow={3}>
          {this.renderCards()}
        </Card.Group>
        )
    }
}