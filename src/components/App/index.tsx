import * as React from "react";
import * as style from "./style.scss";
import arrow from "assets/arrow.svg";
import Icon from "components/Icon";


export default class App extends React.Component<any, any> {
	render() {
		return (
            <div className={style["app"]}>
                <div className={style["arrow"]}>should have arrow background</div>
                <Icon glyph={arrow} width="30" height="30" /> <span> - works fine</span>
            </div>
            )
	}
}
