import React from 'react'
import ReviewCollection from './ReviewCollection'
//import NewWineForm from './NewWineForm'
import ReviewForm from './ReviewForm'
import { Container } from 'semantic-ui-react'
import Search from './Search'

export default class WinePage extends React.Component{

    state = {
        searchTerm: "low acidity",
        wine: []
    }

    componentDidMount(){
        fetch("")
    }

    handleSetSearch = searchTerm => {
        this.setState({
            searchTerm: searchTerm
        })
    }

    render(){
        console.log("hello world from WINEPAGE !!")
        return (
            <Container>

                <ReviewForm 
                review={this.state.review}/>
                <ReviewCollection />

                <Search searchTerm ={this.state.search}
                setSearchTerm = {this.handleSetSearch}/>
                
                </Container>
        )
    }

}