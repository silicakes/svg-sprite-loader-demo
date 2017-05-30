import * as React from "react";
import * as style from "./style.scss"
import Icon from "components/Icon";
import arrow from "assets/arrow.svg";

export default class Expander extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			expanded: false
		}
	}
	
	render() {
		return (
				<div className={`${style["expander"]} ${this.state.expanded ? style["expanded"]:""}`}>
					<div className={style["content"]}>
						{this.props.children}
					</div>
					<Icon className={style["arrow"]} glyph={arrow} width="30" height="30" onClick={() => this.setState({expanded: !this.state.expanded})}/>
				</div>);
	}
}