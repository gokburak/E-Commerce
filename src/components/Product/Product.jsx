import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({product}) => { 
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={Product.name}/>
                <CardContent>
                    <div className={classes.CardContent}  >
                        <Typography variant="h5" gutterBottom >
                            {Product.name}
                        </Typography>
                        <Typography variant="h5"  >
                            {Product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" >
                        {product.description}</Typography>
                </CardContent>
                <CardActions disabledSpacing className={classes.CardActions} > 
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>

                </CardActions>
                
            </Card>
        </div>
    )
}

export default Product
