import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Grid } from '@material-ui/core';

import {fetchGallery} from './actions';
import ItemPresentation from './presentations/item';

class List extends Component {
    constructor(props) {
        super(props);
    }
    fetch() {
        this.props.fetchGallery(this.props.section, this.props.sort, this.props.window);
    }
    componentDidMount() {
        this.fetch();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevProps.section !== this.props.section    ||
            prevProps.sort !== this.props.sort          ||
            prevProps.window !== this.props.window
        )
            this.fetch();
    }
	render() {
        if (this.props.loading) {
            return (<div>Loading...</div>);
        }
        return (
            <div className='App-list'>
                <Grid container spacing={24}>
                    {this.props.allIds.map((item) => <ItemPresentation key={item} {...this.props.byId[item]} />)}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return state.gallery;
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGallery: (section, sort, window) => {
            dispatch(fetchGallery(section, sort, window));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);