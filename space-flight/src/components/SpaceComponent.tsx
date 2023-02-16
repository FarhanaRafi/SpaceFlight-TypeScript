import { Card, Badge} from 'react-bootstrap'
import { ISpace } from '../interfaces/ISpace';
import { format } from 'date-fns'
import { Link } from "react-router-dom";


interface SpaceComponentProps{
    space:ISpace
}

const SpaceComponent = (props : SpaceComponentProps) => {
    return (
      
        
        <Card className='mb-4 card-h' >
            <Link to={"/details/" + props.space.id}>
        <Card.Img variant="top" src={props.space.imageUrl} style={{height:"190px"}} />
        </Link>
        { props.space.featured ?<Badge variant="danger" >Exclusive</Badge>: ""}
        <Card.Body className='card-style'>
          <Card.Title className='title'>{props.space.title}</Card.Title>
          <Card.Text>
            {props.space.newsSite} - {props.space.featured}
            
          </Card.Text>
          <Card.Text>
          {format(new Date(props.space.publishedAt), 'do MMMM yyyy')}
          {/* {props.space.publishedAt} */}
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
};

export default SpaceComponent;