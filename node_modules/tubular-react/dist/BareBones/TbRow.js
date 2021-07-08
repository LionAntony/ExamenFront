"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbRow = void 0;
var TableRow_1 = require("@material-ui/core/TableRow");
var React = require("react");
var renders_1 = require("../utils/renders");
var TableCell_1 = require("@material-ui/core/TableCell");
var Checkbox_1 = require("@material-ui/core/Checkbox");
exports.TbRow = function (_a) {
    var row = _a.row, columns = _a.columns, onRowClick = _a.onRowClick, rowSelectionEnabled = _a.rowSelectionEnabled, selection = _a.selection;
    return (React.createElement(TableRow_1.default, { hover: true, onClick: onRowClick },
        rowSelectionEnabled && selection.rowSelection[row[columns.find(function (c) { return c.isKey; }).name]] !== undefined && (React.createElement(TableCell_1.default, { padding: "checkbox" },
            React.createElement(Checkbox_1.default, { checked: selection.rowSelection[row[columns.find(function (c) { return c.isKey; }).name]], onChange: function () {
                    selection.toggleRowSelection(row[columns.find(function (c) { return c.isKey; }).name]);
                }, value: selection.rowSelection[row[columns.find(function (c) { return c.isKey; }).name]], inputProps: { 'aria-label': 'select all desserts' } }))),
        renders_1.renderCells(columns, row)));
};
