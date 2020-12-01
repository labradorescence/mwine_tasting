import React from 'react'
import WineCard from './WineCard'
// import { Card } from 'semantic-ui-react' 


export default class WineCollection extends React.Component{
    
    state = {
        wine: ['hi'] //set empty db setup for state
    }

    componentDidMount(){
        fetch("https://mwine.herokuapp.com/api/v1/reviews")
            .then(r => r.json())
            .then(wine => {
                // console.log(wine)
                // console.log(this.state)
                console.log(wine)
                this.setState({ wine }) //setState w/ fetched db
            })
    }

    renderCards(){
        return this.state.wine.map(eachWine => 


            <WineCard 
            key={eachWine.id}
            acidity_level={eachWine.acidity_level}
            aroma={eachWine.aroma}
            color={eachWine.color}
            date={eachWine.date}
            name={eachWine.name}
            note={eachWine.note}
            occasion={eachWine.occasion}
            price={eachWine.price}
            rating={eachWine.rating}
            region={eachWine.region}
            taste={eachWine.taste}
            />)
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