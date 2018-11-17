import React, { Component } from 'react';

import {Card, CardMedia, CardContent, Typography, Grid} from '@material-ui/core';

export default class ItemPresentation extends Component {
	render() {
        var preview,component = 'img';
        if (this.props.images) {
            let img = this.props.images[0];
            preview = img.link;
            if (img.type.indexOf('image') < 0) {
                component = 'video';
            }
        } else {
            preview = this.props.link;
        }
        
        return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card className={'App-list-item'}>
                    <CardMedia
                        image={preview}
                        title={this.props.title}
                        component={component}
                    />
                    <CardContent>
                        <Typography variant="subheading" component="h3">
                            {this.props.title}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
	}
}
