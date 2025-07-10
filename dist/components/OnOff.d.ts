import React from 'react';
interface IOnOffProps {
    scanning: boolean;
    startScanning: (deviceId?: string | undefined) => void;
    stopScanning: () => void;
    style?: React.CSSProperties;
}
export default function OnOff(props: IOnOffProps): React.JSX.Element;
export {};
//# sourceMappingURL=OnOff.d.ts.map