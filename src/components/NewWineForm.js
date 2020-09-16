import React from 'react'
import { Form } from 'semantic-ui-react'

export default class NewWineForm extends React.Component {

    state = {
        
        image: {},
        video: {}
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            console.log(e.target.files[0])
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image)
        // form.append("video", this.state.video)
        fetch(`https://mwine.herokuapp.com/api/v1/wines`, {
            method: "POST",
            body: form
        })
    }
    render(){
        return (
            <div className="form">
                <h1> Let's add new wine to taste </h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group widths="equal">
                    <Form.Input 
                    type="file" 
                    name="image" 
                    onChange={this.onChange}
                    />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button> 
                    <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                  </Form>
            </div>
        )
    }
}