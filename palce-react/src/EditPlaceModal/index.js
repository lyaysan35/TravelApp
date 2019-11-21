import React from 'react'
import {Modal, Form, Button, Label, Header} from 'semantic-ui-react'

const EditPlaceModal = (props) => {
    return (
        <Modal open={props.open}>
            <Header>Edit Place</Header>
            <Modal.Content>
                <Form onSubmit={props.closeAndEdit}>
                    <Label>
                        City:
                    </Label>
                    <Form.Input type="text" name="city" 
                    value={props.placeToEdit.city} onChange={props.handleEditChange} />
                    <Label>
                        Country:
                    </Label>
                    <Form.Input type="text" name="country" 
                    value={props.placeToEdit.country} onChange={props.handleEditChange} />
                    <Label>
                        Image:
                    </Label>
                    <Form.Input type="text" name="image" 
                    value={props.placeToEdit.image} onChange={props.handleEditChange} />
                    <Label>
                        Text:
                    </Label>
                    <Form.Input type="text" name="text" 
                    value={props.placeToEdit.text} onChange={props.handleEditChange} />
                    <Modal.Actions>
                        <Button color="green" type="submit">
                            Edit Place
                        </Button>
                    </Modal.Actions> 
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default EditPlaceModal
