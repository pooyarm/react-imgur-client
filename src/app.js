import React, { Component } from 'react';
import {connect} from 'react-redux';

import { AppBar, FormControl, InputLabel, Select, Toolbar, Typography } from '@material-ui/core';

import withTheme from './utils/theme';

import List from './list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: 'hot',
            sort: 'viral',
            window: 'day'
        };
    }
    handleChange = name => event => {
        this.setState({
            ...this.state,
            [name]: event.target.value
        });
    }
	render() {
        return (
            <div className='App'>
                <AppBar position="static" color="default">
                    <Toolbar className='flex'>
                        <Typography variant="title" color="inherit" className="flex-grow-1" >
                            Imgur
                        </Typography>
                        <div>
                            <FormControl>
                                <InputLabel>Section</InputLabel>
                                <Select
                                    native
                                    value={this.state.section}
                                    onChange={this.handleChange('section')}
                                >
                                    <option value='hot'>Hot</option>
                                    <option value='top'>Top</option>
                                    <option value='user'>User</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel>Sort</InputLabel>
                                <Select
                                    native
                                    value={this.state.sort}
                                    onChange={this.handleChange('sort')}
                                >
                                    <option value='viral'>Viral</option>
                                    <option value='top'>Top</option>
                                    <option value='time'>Time</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel>Window</InputLabel>
                                <Select
                                    native
                                    value={this.state.window}
                                    onChange={this.handleChange('window')}
                                >
                                    <option value='day'>Day</option>
                                    <option value='week'>Week</option>
                                    <option value='month'>Month</option>
                                    <option value='year'>Year</option>
                                    <option value='all'>All</option>
                                </Select>
                            </FormControl>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className='App-container'>
                    <List
                        section={this.state.section}
                        sort={this.state.sort}
                        window={this.state.window}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(App));