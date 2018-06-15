import React, {Component} from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery';
import dataTables from 'datatables.net';

$.DataTable = dataTables
//import './dataTables.css'


var dataSet = [
    [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800' ],
    [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750' ],
    [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000' ]
];


const columns = [
    { title: 'Name' },
    { title: 'Position' },
    { title: 'Office' },
    { title: 'Extn.' },
    { title: 'Start date' },
    { title: 'Salary' }
]


export default class ExampleComponent extends Component {
    componentDidMount() {
        $('#example').DataTable( {
            data: dataSet,
            columns: columns
        });
    }


    render() {
        return (
            <div>
                <table id={this.props.id} />
            </div>);
    }
}

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
//export default class ExampleComponent extends Component {
//    render() {
//        const {id, label, setProps, value} = this.props;
//
//        return (
//            <div id={id}>
//                ExampleComponent: {label}
//                <input
//                    value={value}
//                    onChange={e => {
//                        /*
//                         * Send the new value to the parent component.
//                         * In a Dash app, this will send the data back to the
//                         * Python Dash app server.
//                         */
//                         if (setProps) {
//                             setProps({
//                                value: e.target.value
//                            });
//                         }
//                    }}
//                />
//            </div>
//        );
//    }
//}

ExampleComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

//    /**
//     * A label that will be printed when this component is rendered.
//     */
//    label: PropTypes.string.isRequired,
//
//    /**
//     * The value displayed in the input
//     */
//    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
