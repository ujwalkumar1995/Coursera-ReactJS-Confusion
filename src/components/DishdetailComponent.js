import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component
{

    constructor(props) {
        super(props);

    
    }
    renderDish(dish)
    { 
        return(
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </Card>
            </div>

        )
    }

    renderComments(commentsArray)
    {

          if (commentsArray == null) {
            return (<div></div>)
        }
        const comments = commentsArray.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul  className='list-unstyled'>
                    {comments}
                </ul>
            </div>
        )
        

    }
    
    render()
    {  
        const dish=this.props.dish;
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem=this.renderDish(dish)
        const commentItem=this.renderComments(dish.comments)
        return(
        <div className="row" style={{textAlign:"left"}}>
            {dishItem}
            {commentItem}       
        </div>  
        )
    }

}

export default DishDetail