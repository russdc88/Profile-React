import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core"



class TopNavbar extends Component {
	render() {
		return (

			<AppBar position="static">
				<Toolbar>
					<Typography variant="title" color="inherit">
						Setting up Profile
                </Typography>
				</Toolbar>
			</AppBar>

		)

	}
}

export default TopNavbar;