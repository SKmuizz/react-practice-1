import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Profile = ({Profile}) => {
  
    return(
        
      // <div className='profile'>
      //   <p className='name'>my name is {name}</p>
      //   <img className='profile-image'src={pic} alt={pic}></img>
      //   <p className='about'>{us}</p>
      // </div>

      <Card className="mb-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Profile.img} />
        <Card.Body>
          <Card.Title>{Profile.name}</Card.Title>
          <Card.Text> {Profile.us} </Card.Text>
          <Card.Link href={Profile.url} target="_blank" ><Button variant="primary"> {Profile.name} visit link</Button></Card.Link>
        </Card.Body>
      </Card>
    )
}
export default Profile;