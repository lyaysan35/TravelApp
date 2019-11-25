import React from 'react';
import { Card, Button,  Image} from 'semantic-ui-react';
function PlaceList(props){
 let locs;
 (props.location) ? locs = props.location.state.places : locs = props.places;
 const places = locs.map((place) => {
  console.log('place >>', place.userId);
  console.log('user >>', props.userId);
   return (
       <Card key={place.id} style={{width: '50%'}}>
         <Card.Content>
           <Card.Header>{place.city}</Card.Header>
           <Card.Description>{place.country}</Card.Description>
           <Card.Description>{place.text}</Card.Description>
           <Image src={place.image}/>
         </Card.Content>
          {
            (parseInt(place.userId) === props.userId) ?
              <Card.Content extra>
                <Button onClick={() => props.deletePlace(place.id)}>Delete Place</Button>
                <Button onClick={() => props.openEditModal(place)}>Edit Place</Button>
              </Card.Content>
            : ""
          }
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