import React from 'react';
interface IFinderProps {
    scanning: boolean;
    capabilities: MediaTrackCapabilities;
    onOff?: boolean;
    startScanning: (deviceId?: string | undefined) => void;
    stopScanning: () => void;
    torch?: {
        status: boolean;
        toggle: (value: boolean) => void;
    };
    zoom?: {
        value: number;
        onChange: (value: number) => void;
    };
    styles?: {
        fullContainer?: React.CSSProperties;
        innerContainer?: React.CSSProperties;
        overlay?: React.CSSProperties;
        borderBox?: React.CSSProperties;
        corners?: React.CSSProperties;
        cornerTopLeft?: React.CSSProperties;
        cornerTopRight?: React.CSSProperties;
        cornerBottomLeft?: React.CSSProperties;
        cornerBottomRight?: React.CSSProperties;
        onOff?: React.CSSProperties;
        torch?: React.CSSProperties;
        zoom?: React.CSSProperties;
    };
}
export default function Finder(props: IFinderProps): React.JSX.Element;
export {};
//# sourceMappingURL=Finder.d.ts.map