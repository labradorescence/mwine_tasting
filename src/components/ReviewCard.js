import React from 'react'
import { Card } from 'semantic-ui-react'

export default class ReviewCard extends React.Component {


    render(){
        //console.log(this.props.date)
         const {date, name, rating, occasion, acidity_level, color, aroma, taste, region, note, price } = this.props 
         //console.log(this.props)
        return (
            <Card>

                <div className="ui cards">
                <div className="card">

                        <div className="header">{name}</div>
                       
                        <div className="meta">
                        <span className="right floated time">{date}</span>
                        <span className="category">{price}</span>
                        </div>

                        <div className="description">
                        <li>{aroma}</li>
                        <li>{occasion}</li>
                        <li>{color}</li>
                        <li>{taste}</li>
                        <li>{acidity_level}</li>
                        <li>{note}</li>
                        </div>

                    <div className="extra ">
                        <div className="right floated">
                            {region}
                        </div>

                        <div className="left floated">
                        <div className="ui star rating" data-rating="4"></div>
                        <span role="img" aria-label="star">⭐</span>{rating}
                        </div>
                    </div>

                </div>
                </div>
        
            </Card>
        )
    }
}