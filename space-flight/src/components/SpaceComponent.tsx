import { Card} from 'react-bootstrap'
import { ISpace } from '../interfaces/ISpace';
import { format, compareAsc } from 'date-fns'


interface SpaceComponentProps{
    space:ISpace
}

const SpaceComponent = (props : SpaceComponentProps) => {
    return (
      
        
        <Card className='mb-4'>
        <Card.Img variant="top" src={props.space.imageUrl} style={{height:"190px"}} />
        <Card.Body>
          <Card.Title className='title'>{props.space.title}</Card.Title>
          <Card.Text>
            {props.space.newsSite} - {props.space.featured}
            
          </Card.Text>
          <Card.Text>
          {format(new Date(props.space.publishedAt), 'dd-MM-yyyy')}
          {/* {props.space.publishedAt} */}
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
};

export default SpaceComponent;