import React, {Component} from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery';
import dataTables from 'datatables.net';

$.DataTable = dataTables
//import './dataTables.css'


export default class ExampleComponent extends Component {
    componentDidMount() {
        $('#' + this.props.id).DataTable( {
            data: this.props.data,
            columns: this.props.columns.map((name) => Object({'title': name}))
        });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.data) != JSON.stringify(prevProps.data)) {
            console.log('React Data changed');
            this.updateTable();
        }
    }

    updateTable() {
        const dataTable = $('#' + this.props.id).DataTable();
        dataTable.clear();
        dataTable.rows.add(this.props.data);
        dataTable.draw();
    }


    render() {
        return (
            <div>
                <table id={this.props.id} />
            </div>);
    }
}


ExampleComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Columns names of DataFrame
     */
    columns: PropTypes.array,

    /**
     * Values of DataFrame
     */
    data: PropTypes.array,


    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
