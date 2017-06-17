import React from "react";
import TravelHeader from "./TravelHeader.jsx";
import TravelPostList from "./TravelPostList.jsx";
import TravelWidget from "./TravelWidget.jsx";
import TravelFooter from "./TravelFooter.jsx";
import styles from "./travel.scss";


class TravelPage extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<TravelHeader />
				<div>
					<TravelPostList />
					<TravelWidget />
					<div className={styles.clearfix}></div>
				</div>
				<TravelFooter />
			</div>
		);
	}
}

export default TravelPage;
