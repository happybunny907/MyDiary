import React, { Component } from 'react';
import './reset.css';
import './item.css';
import { withStyles } from "@material-ui/core/styles";

import { Button, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { CardMedia } from '@mui/material';



const styles = {
  card: {
    display: 'flex',
    backgroundColor: "#FBEFFF",
    flexDirection: 'column'

  },
  cover: {
    width: 500,

  },
  details: {
    display: 'flex',
    flexDirection: 'column',


  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}

class Item extends Component {

  constructor() {
    super()
  }

  toggleAdd = () => {
    this.props.favoriteItem(this.props.imageNum);
  }

  generateAll = (restriction) => {
    return <span>{restriction} </span>
  }

  render() {

    const restrictionList = this.props.Dietary_Restrictions.map(this.generateAll);
    const typeList = this.props.Types.map(this.generateAll);
    const NameTypography = withStyles({
      root: {
        color: "#C8261C"
      },
      body1: {
        fontFamily: "'New Century Schoolbook', serif",
        fontWeight: 200,
        fontSize: 30,
      }
    })(Typography);
    return (
      <Card style={styles.card}>
        <div style={{ display: "flex" }}>
        <NameTypography >
            {this.props.name}
          </NameTypography>
        </div>
        <div style={{ display: "flex" }}>
        <CardMedia
          component="img"
          height="450"
          image={require('./assets/' + this.props.imageNum + '.png')}
        />
        </div>
        <CardContent>
          <div style={{ display: "flex" }}>
            <Typography color="textSecondary" style={{ marginRight: 10 }}>
              ${this.props.price}
            </Typography>
            <Typography color="textSecondary" style={{ marginRight: 10 }}>
            Customer review:   {this.props.rating}/10
            </Typography>
          </div>
          <Typography color="textSecondary" >
            <i>Category: </i>{typeList}
          </Typography>
          <Typography color="textSecondary" >
            <i>Dietary Restrictions: </i>{restrictionList}
          </Typography>
          <Typography variant="paragraph" component="p" >
            {this.props.description}
          </Typography>
          <br />


          {this.props.Other.length !== 0 ? (
            <Button
              style={{
                backgroundColor: "#4E3A08",
              }}
              variant="contained"
              color="secondary"
              onClick={() => this.toggleAdd()}>
              Remove from cart
            </Button>
          ) : (
            <Button
              style={{
                backgroundColor: "#D50000",
              }}
              variant="contained"
              color="primary"
              onClick={() => this.toggleAdd()}
            >
              Add to cart
            </Button>
          )}

        </CardContent>

      </Card>
    );
  }
}

export default Item;
