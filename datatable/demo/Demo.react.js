import React, {Component} from 'react';
import {DataTable} from '../src';


const data = [
    [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800' ],
    [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750' ],
    [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000' ]
];


const columns = [ 'Name', 'Position', 'Office', 'Exten.', 'Start Date', 'Salary'];


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
                <h1>DataTable Demo</h1>

                <hr/>
                <DataTable
                    id='example'
                    columns={columns}
                    data={data}
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
