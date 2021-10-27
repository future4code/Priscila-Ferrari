import React from "react"
import {CardContainer, MvCardContent} from "./styled"
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const Card = (props) => {
    return(
        <CardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                component={'img'}
                alt={props.title}
                height={'150px'}
                image={props.image}
                tutle={props.title}
                />
                <MvCardContent>
                    <Typography align={'center'}>
                        {props.title.toUpperCase()}
                    </Typography>
                </MvCardContent>
            </CardActionArea>

        </CardContainer>
    );
}

export default Card;