import * as React from "react";
import App from "components/App";

export default class Icon extends React.Component<any, never> {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        let {width, height, glyph} = this.props;
        return (
            <svg className={this.props.className} width={width} height={height} viewBox={glyph.viewBox} onClick={this.props.onClick}>
                <use xlinkHref={glyph.url}></use>
            </svg>
        )
    }
}