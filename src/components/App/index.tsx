import * as React from "react";
import * as style from "./style.scss";
import arrow from "assets/arrow.svg";
import Icon from "components/Icon";
import Expander from "components/Expander";


export default class App extends React.Component<any, any> {
	render() {
		return (
            <div className={style["app"]}>
                <div className={style["arrow"]}>should have arrow background</div>
                <Icon glyph={arrow} width="30" height="30" /> <span> - works fine</span>
                <Expander>Click on the arrow to expand the content in order to see what lies beneath - under the fold</Expander>
                <select className={style["select"]}>
                    <option>foo</option>
                    <option>bar</option>
                    <option>baz</option>
                </select>
            </div>
            )
	}
}
