import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Profile = ({pic,name,us,profileurl}) => {
  
    return(
        
      // <div className='profile'>
      //   <p className='name'>my name is {name}</p>
      //   <img className='profile-image'src={pic} alt={pic}></img>
      //   <p className='about'>{us}</p>
      // </div>

      <Card className="mb-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> {us} </Card.Text>
          <Card.Link href={profileurl} target="_blank" ><Button variant="primary"> {name} visit link</Button></Card.Link>
        </Card.Body>
      </Card>
    )
}
export default Profile;