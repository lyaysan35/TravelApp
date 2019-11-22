import React from 'react';
import { Card, Button,  Image} from 'semantic-ui-react';
function PlaceList(props){
 const places = props.places.map((place) => {
   return (
       <Card key={place.id}>
         <Card.Content>
           <Card.Header>{place.city}</Card.Header>
           <Card.Description>{place.country}</Card.Description>
           <Card.Description>{place.text}</Card.Description>
           <Image src={place.image}/>
         </Card.Content>
         <Card.Content extra>
           <Button onClick={() => props.deletePlace(place.id)}>DeletePlace</Button>
           <Button onClick={() => props.openEditModal(place)}>Edit Place</Button>
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