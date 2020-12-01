import React from 'react'
import WineCollection from './WineCollection'
import NewWineForm from './NewWineForm'
import ReviewForm from './ReviewForm'
import { Container } from 'semantic-ui-react'

export default class WinePage extends React.Component{

    state = {
        wine: []
    }

    componentDidMount(){

        fetch("")
    }

    render(){
        console.log("hello world from WINEPAGE !! ")
        return (
            <Container>

                


               
                <ReviewForm 
                review={this.state.review}/>
                
                <WineCollection />
                
                <NewWineForm 
                wine={this.state.wine}/>
            </Container>
        )
    }

}