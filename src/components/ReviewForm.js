import React from 'react'
import { Form } from 'semantic-ui-react'

export default class ReviewForm extends React.Component {

    state = {
        date: '',
        name: '',
        rating: '',
        occasion: '',
        acidity_level: '',
        color: '',
        aroma: '',
        taste: '',
        region: '',
        note: '',
        price: ''
    }

    handleInputChange = e => {
        //debugger
        //console.log(e.target.value, e.target.name) 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const bodyData = {
            "date": this.state.date,
            "name": this.state.name,
            "rating": this.state.rating,
            "region": this.state.region,
            "note": this.state.note,
            "pricd": this.state.price,
            "occasion": this.state.occasion,
            "aroma": this.state.aroma,
            "color": this.state.color,
            "acidity_level": this.state.acidity_level,
            "taste": this.state.taste
        }
       // console.log(bodyData)

        fetch("https://mwine.herokuapp.com/api/v1/reviews", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        .then(r => r.json())
        .then(newReview => {
            //console.log(newReview) // need to render!
            this.props.addReview(newReview) //this refreshes the page with the new submitted review! 
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
                fluid label="name"
                placeholder="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="region"
                placeholder="region"
                name="region"
                value={this.state.region}
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
                fluid label="color"
                placeholder="color"
                name="color"
                value={this.state.color}
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
                fluid label="taste"
                placeholder="taste"
                name="taste"
                value={this.state.taste}
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
                fluid label="note"
                placeholder="note"
                name="note"
                value={this.state.note}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="price"
                placeholder="price"
                name="price"
                value={this.state.price}
                onChange={this.handleInputChange}
                />

                <Form.Input 
                fluid label="rating"
                placeholder="rating"
                name="rating"
                value={this.state.rating}
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