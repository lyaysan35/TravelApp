import React from 'react';
import { Card, Button} from 'semantic-ui-react';
function PlaceList(props){
 const places = props.places.map((place) => {
   return (
       <Card key={places.id}>
         <Card.Content>
           <Card.Header>{place.city}</Card.Header>
           <Card.Description>{place.country}</Card.Description>
         </Card.Content>
         <Card.Content extra>
           <Button onClick={() => props.deletePlace(place.id)}>DeletePlace</Button>
           <Button onClick={() => props.openAndEdit(place)}>Edit Place</Button>
         </Card.Content>
       </Card>
       )
 })
 return (
     <Card.Group>
       { places }
     </Card.Group>
   )
}
export default PlaceList