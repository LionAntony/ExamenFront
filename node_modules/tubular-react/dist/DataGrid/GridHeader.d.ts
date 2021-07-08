import * as React from 'react';
import { ITbTableInstance } from 'tubular-react-common';
import DetailComponent from '../DataGridInterfaces/DetailComponent';
import { TbSelection } from '../utils/Selection';
export interface GridHeaderProps {
    tbTableInstance: ITbTableInstance;
    detailComponent?: React.ReactElement<DetailComponent>;
    rowSelectionEnabled: boolean;
    selection?: TbSelection;
}
export declare const GridHeader: React.FunctionComponent<GridHeaderProps>;
