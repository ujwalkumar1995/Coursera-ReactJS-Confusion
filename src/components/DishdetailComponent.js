import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish})
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

    function RenderComments({commentsArray})
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
    const DishDetail = (props) =>
    {
        const dish=props.dish;
        if (dish == null) {
            return (<div></div>)
        }
        return(
        <div className="container">
        <div className="row" style={{textAlign:"left"}}>
            <RenderDish dish={dish}/>
            <RenderComments commentsArray={dish.comments}/>
        </div>  
        </div>
        )
}



export default DishDetail