import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
            </div>
        )
    }

    renderComments(comments) {
        if(comments != null) {
            return (
                <div className="col-12 col-md-5 m1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((e) => {
                        return (
                            <li key={e.id}>
                                <p>{e.comment}</p>
                                <p>{e.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(e.date)))} </p>
                            </li>
                        );
                    })}
                </ul>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }
    
    render() {
        if(this.props.selectedDish != null) {
            return (
                <div className="container">
                    <div className="row">{this.renderDish(this.props.selectedDish)}{this.renderComments(this.props.selectedDish.comments)}</div>
                </div>
            )
        } else {
            return <div></div>;
        }
    }
}



export default DishDetail;