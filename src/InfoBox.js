import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, isRed, active, total, ...props }) {
	return (
		<Card
			onClick={props.onClick}
			className={`infoBox ${active && "infoBox--selected"} ${
				isRed && "infoBox--red"
			} `}
		>
			<CardContent>
				{/* Title */}
				<Typography className="infoBox__title" color="textSecondary">
					{title}
				</Typography>

				<h2
					className={`infoBox__cases ${
						!isRed && "infoBox__cases--green"
					}`}
				>
					{cases}
				</h2>
				{/* +120k Number of vases */}

				{/* +1.2M Total */}
				<Typography className="infoBox__total" color="textSecondary">
					{total} Total
				</Typography>
			</CardContent>
		</Card>
	);
}

export default InfoBox;
