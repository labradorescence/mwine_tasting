import React from 'react'
import WineCard from './WineCard'
// import { Card } from 'semantic-ui-react' 


export default class WineCollection extends React.Component{
    
    state = {
        wine: ['hi'] //set empty db setup for state
    }

    componentDidMount(){
        fetch("https://mwine.herokuapp.com/api/v1/wines")
            .then(r => r.json())
            .then(wine => {
                // console.log(wine)
                // console.log(this.state)
                this.setState({ wine }) //setState w/ fetched db
            })
    }

    renderCards(){
        return this.state.wine.map(eachWine => 
            <WineCard 
            key={eachWine.id}
            name={eachWine.name}
            producer={eachWine.producer}
            ingredient={eachWine.ingredient}
            wine_type={eachWine.wine_type}
            region={eachWine.region}
            country={eachWine.country}
            price={eachWine.price}
            rating={eachWine.rating}
            note={eachWine.note}
            image={eachWine.image}
            reviews={eachWine.reviews}
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