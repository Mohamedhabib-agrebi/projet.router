import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CardMovie=({el})=>{
  const [showMore, setShowMore] = useState(false);
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={el.posterURL} style={{width :"286px",height:'406px'}} />
          <Card.Body>
            <Card.Title as={Link} to={`/moviedescription/${el.id}`}>{el.title}</Card.Title>
            <Card.Text>   
                  {showMore ? el.description : `${el.description.substring(0, 80)}`}
                  <a className={showMore ? 'red' : 'green'}  onClick={()=>setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</a>                
            </Card.Text>
            
            <Rating name="read-only" value={el.rating } readOnly />
          </Card.Body>
        </Card>
    )
}

export default CardMovie