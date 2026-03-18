import { IconViewProps } from '../IconView/types';
import { TextLabelProps } from '../TextLabel/TextLabel.types';

export type LabelProps = ({
    dataType: 'textLabel';
} & TextLabelProps) | ({
    dataType: 'iconView';
} & IconViewProps);
