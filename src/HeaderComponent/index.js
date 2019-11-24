import React from 'react';
import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';

const HeaderComponent = () => {
  return (
    <Header>
      <List>
        <List.Item>
          <Link to="/">Your destination</Link>
        </List.Item>
        <List.Item>
          Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
        </List.Item>
        <List.Item>
          <Link to="/places">Places</Link>
        </List.Item>
      </List>
    </Header>
  )
}

// getAllCountries = async () => {

//     try {
      
//       const places = await fetch(process.env.REACT_APP_API_URL + '/api/v1/places/', {
//         credentials: 'include' //sending sesion cookie
//       });
//       const parsedPlaces = await places.json();
//       console.log(parsedPlaces);
//       this.setState({
//         places: parsedPlaces.data //array from flask
//       })
//     } catch(err){
//       console.log(err);
//     }
//   }














export default HeaderComponent;








// REMAINING ROUTE

// router.post('/remaining', (req, res) => {
//     Vaccine.find({}, (err, allVaccines) => {
//         if(err) {
//             console.log('Error >>', err);
//             res.send(err);
//         } else {
//             try {
//                 const remainingVaccines = allVaccines
//                     .filter(v => v.month >= req.body.age)
//                     .sort((a, b) => a.month - b.month);

//                 const twoMonth = remainingVaccines.filter(v => v.month === 2);
//                 const fourMonth = remainingVaccines.filter(v => v.month === 4);
//                 const sixMonth = remainingVaccines.filter(v => v.month === 6);
//                 const twelveMonth = remainingVaccines.filter(v => v.month === 12);
                
//                 res.render('index.ejs', {
//                     two: twoMonth,
//                     four: fourMonth,
//                     six: sixMonth,
//           twelve: twelveMonth,
//           remaining: remainingVaccines

//                 });
//             } catch(err) {
//                 console.log('ERROR >>', err);
//             }
//         }
//     });
// });