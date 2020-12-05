import React from 'react'
import { Item } from 'semantic-ui-react'

export default class ReviewCard extends React.Component {

    renderReviews = () => {
                console.log(this.props.reviews)
                return this.props.reviews.map(eachReview => {
                    console.log(eachReview.aroma)
                return (
                <div>
                <br></br>
                <h3> Review </h3>
                review date: {eachReview.date}<br></br>
                review occasion: {eachReview.occasion}<br></br>
                review aroma: {eachReview.aroma}<br></br>
                review color: {eachReview.color}<br></br>
                review acidity level: {eachReview.acidity_level}<br></br>
                review taste: {eachReview.taste}<br></br>
                <br></br>
                </div>
                )
            })
    }
    render(){
        console.log(this.props.date)
        // const {image, name, aroma } = this.props ??? WHAT DOES THIS DO?
        return (
                <Item.Group relaxed>
                    <Item>
                    <div className="image-cropper">
                    <Item.Image size='large' src={this.props.image} alt= {this.props.name} />
                    </div>
                    <Item.Content verticalAlign='middle' >
                    <br></br><br></br>

                        <Item.Header> {this.props.name}</Item.Header>
                        <Item.Description>
                        date: {this.props.date}<br></br>
                        name: {this.props.name}<br></br>
                        rating: {this.props.rating}/5<br></br>
                        occasion: {this.props.occasion}<br></br>
                        acidity_level: {this.props.acidity_level}<br></br>
                        color: {this.props.color}<br></br>

                        aroma: {this.props.aroma}<br></br>
                        taste: {this.props.taste}<br></br>
                        
                        region: {this.props.region}<br></br>
                        note: {this.props.note}<br></br>

                        price: ${this.props.price}<br></br>                  
                        
                        {this.props.reviews? this.renderReviews() : null}
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        </Item.Description>
                        <Item.Extra>
                        </Item.Extra>
                    </Item.Content>
                    </Item>
                </Item.Group>
        )
    }
}