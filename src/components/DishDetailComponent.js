import React, {Component} from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
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
                            <li key={e.key}>
                                <p>{e.comment}</p>
                                <p>{e.author} {e.date}</p>
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
            <div className="row">{this.renderDish(this.props.selectedDish)}{this.renderComments(this.props.selectedDish.comments)}</div>
            )
        } else {
            return <div></div>;
        }
    }
}



export default DishDetail;