import React, {Component} from 'react';
import {ExampleComponent} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: [
                {'name': 'Divir Gupta', 'nickname': 'Divir'}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>datatable Demo</h1>

                <hr/>
                <h2>ExampleComponent</h2>
                <ExampleComponent
                    id='example'
//                    label="This is an example label"
//                    value={this.state.value}
//                    setProps={newProps => this.setState({value: newProps.value})}
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
