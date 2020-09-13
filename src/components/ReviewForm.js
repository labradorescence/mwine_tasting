import React from 'react'
import { Form } from 'semantic-ui-react'

export default class ReviewForm extends React.Component {

    state = {
        date: '',
        occasion: "",
        aroma: '',
        color: '',
        acidity_level: '',
        taste: ''
    }

    handleInputChange = e => {
        //debugger
        console.log(e.target.value, e.target.name) 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        console.log("submitting form......")

        const bodyData = {
            "date": this.state.date,
            "occasion": this.state.occasion,
            "aroma": this.state.aroma,
            "color": this.state.color,
            "acidity_level": this.state.acidity_level,
            "taste": this.state.taste
        }
        console.log(bodyData)

        fetch("http://localhost:3001/api/v1/wines/7/reviews/", { //???? um.... what would be the address????????? /api/v1/wines/:wine_id/reviews/:id(.:format) 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        .then(r => r.json())
        .then(newReview => {
            console.log(newReview)
        })
    }

    render(){
        return (
            <div className="form">
                 <img src ="https://res.cloudinary.com/devzsgipb/image/upload/v1596194143/ocy6vpyax2wiijbt7xcn.jpg" alt = "wine smell wheel"></img>
                <h1>* S E E * S W I R L * S N I F F * S I P * S A V O R *</h1>

                <br></br>

                <Form onSubmit={this.handleSubmit}>

                <Form.Group widths="equal">

                <Form.Input 
                fluid label="date"
                placeholder="date"
                name="date"
                value={this.state.date}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="occasion"
                placeholder="occasion"
                name="occasion"
                value={this.state.occasion}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="aroma"
                placeholder="aroma"
                name="aroma"
                value={this.state.aroma}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="color"
                placeholder="color"
                name="color"
                value={this.state.color}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="acidity level"
                placeholder="acidity level"
                name="acidity_level"
                value={this.state.acidity_level}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="taste"
                placeholder="taste"
                name="taste"
                value={this.state.taste}
                onChange={this.handleInputChange}
                />
                </Form.Group>
                <br></br><br></br>
                <Form.Button>Submit</Form.Button>
                </Form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        )
    }
}