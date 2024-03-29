import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.onLogout.bind(this);
  }

  async onLogout() {
  await fetch(process.env.REACT_APP_API_URL + '/users/logout', {
    method: 'post', body: {}}).catch(err => {
      console.log('ERROR Logging Out >>', err);
    });
    this.props.onLogout();
  }
  render() {
    return (
      <Header>
        <List className="navBar">
          <List.Item>
            <Link to="/places">Your Page</Link>
          </List.Item>
          <List.Item>
            <Link  className="title" to="/">Your DestinY/Ation</Link>
          </List.Item>
          {
            (this.props.userId) ?
            <List.Item>
              <a  onClick={() => this.onLogout()}>Logout</a>
            </List.Item>
            :
            <List.Item>
              <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
            </List.Item>
          }
        </List>
      </Header>
    )
  }
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