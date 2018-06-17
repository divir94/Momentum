import React from 'react';
import {shallow} from 'enzyme';
import DataTable from '../DataTable.react';

describe('DataTable', () => {

    it('renders', () => {
        const component = shallow(<DataTable label="Test label"/>);
        expect(component).to.be.ok;
    });
});
