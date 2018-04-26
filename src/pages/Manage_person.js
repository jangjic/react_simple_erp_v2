import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import JqxGrid from 'jqwidgets-react/react_jqxgrid';
// import JqxButton from 'jqwidgets-react/react_jqxbuttons.js';

class ManagePerson extends Component {
    render() {
        const $ = window.$;

        let data = [
            { personCode: '11', groupName: '1', personName: '2', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' },
            { personCode: '22', groupName: '2', personName: '3', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' },
            { personCode: '33', groupName: '3', personName: '4', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' },
            { personCode: '44', groupName: '4', personName: '5', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' },
            { personCode: '55', groupName: '5', personName: '6', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' },
            { personCode: '66', groupName: '6', personName: '7', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' },
            { personCode: '77', groupName: '7', personName: '8', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' },
            { personCode: '88', groupName: '8', personName: '9', personBirth: '3', personGenderName: '4', personFistPhone: '5', personHomeAddress: '6' }
        ];

        let source =
            {
                // datatype: 'xml',
                datatype: 'json',
                localdata: data,
                datafields: [
                    // { name: 'ProductName', type: 'string' },
                    // { name: 'QuantityPerUnit', type: 'int' },
                    // { name: 'UnitPrice', type: 'float' },
                    // { name: 'UnitsInStock', type: 'float' },
                    // { name: 'Discontinued', type: 'bool' }
                    { name: 'groupName', type: 'string' },
                    { name: 'personName', type: 'string' },
                    { name: 'personBirth', type: 'string' },
                    { name: 'personGenderName', type: 'string' },
                    { name: 'personFistPhone', type: 'string' },
                    { name: 'personHomeAddress', type: 'string' }
                ],
                // root: 'Products',
                // record: 'Product',
                id: 'personCode'
                // url: '../sampledata/products.xml'
            };

        // let cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
        //     if (value < 20) {
        //         return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        //     }
        //     else {
        //         return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        //     }
        // }

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                // { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
                // { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200 },
                // { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200 },
                // { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: cellsrenderer, width: 100 },
                // { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
                { text: '그룹', datafield: 'groupName' },
                { text: '이름', datafield: 'personName' },
                { text: '생년월일', datafield: 'personBirth' },
                { text: '성별', datafield: 'personGenderName' },
                { text: '휴대폰번호', datafield: 'personFistPhone' },
                { text: '집주소', datafield: 'personHomeAddress' }
            ];

        // let columngroups =
        //     [
        //         { text: 'Product Details', align: 'center', name: 'ProductDetails' }
        //     ];

        return (
            <Container>
                <JqxGrid
                    width={850} source={dataAdapter} pageable={true}
                    sortable={true} altrows={true} enabletooltips={true}
                    autoheight={true} editable={true} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                    // columngroups={columngroups}
                />
            </Container>
        );
    }
}

export default ManagePerson;