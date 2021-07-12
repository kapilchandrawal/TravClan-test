import React from 'react';

const Navbar = (props) => {
	console.log("props", props)

	return (
		<div>
			
			<div style={styles.nav}>
			<span style={{ justifyContent:'center' }}>Cart</span>
				<div style={styles.cartIconContainer}>
					<img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="cart-icon" />
					<span style={styles.cartCount}>{props.count}</span>
				</div>
			</div>
		</div>


	)
}


const styles = {

	cartIcon: {
		height: 32,
		marginRight: 20
	},
	nav: {
		height: 70,
		background: '#4267b2',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	cartIconContainer: {
		position: 'relative',
		justifyContent: 'flex-end'
	},
	cartCount: {
		background: 'yellow',
		borderRadius: '50%',
		padding: '0px 6px',
		position: 'absolute',
		right: 0,
		top: -9
	}
};
export default Navbar;