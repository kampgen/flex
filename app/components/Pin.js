	import React, { Component } from 'react'

	import {
		  StyleSheet,
		  View,
		  Text
	} from 'react-native'

	import {
		  Back,
		  Heart,
		  More,
		  PinIcon,
		  Share
	} from '../util/icons'

	export default class Pin extends Component {
	  render() {
	    return (
	        <View style={styles.PinContainer}>
				{/*Header*/}
				<View style={styles.PinHeader}>
					{/*Menu de incones*/}
					<View style={styles.UtilityNav}>
						<Back />
						<Heart />
						<Share />
						<More />
					</View>
					{/*Botão Salvar*/}
					<View style={styles.PinButtonContainer}>
						<View style={styles.PinButton}>
							<PinIcon />
							<Text style={styles.PinButtonText}>Save</Text>
						</View>
					</View>
				</View>

				<View style={styles.PinContent}>
					<Text style={styles.ImagePlaceholder}>Placeholder</Text>
				</View>

				<View style={styles.PinMeta}>
					<View style={styles.PinMetaTextContainer}>
						<Text style={styles.PinMetaText}>Saved from</Text>
						<Text style={styles.PinMetaText}>website.com</Text>
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={styles.PinButton}>
							<Text style={styles.PinButtonText}>Visit</Text>
						</View>
					</View>
				</View>

				<View style={styles.PinUser}>
					<View style={styles.PinUserAvatar}>
						<Text>Placeholder</Text>
					</View>
				</View>
				<View style={styles.PinUserContainer}>
					<Text style={styles.PinUserText}>
						<Text style={styles.TextBold}>User Name</Text>
						saved to <Text style={styles.TextBold}>Space</Text>
					</Text>
					<Text style={styles.PinUserText}>Descrição Lorem Ipsum</Text>
				</View>
	        </View>
	    )
	  }
	}

	const styles = StyleSheet.create({
		PinContainer: {
			flex: 1,
			alignSelf: 'stretch'
		},
		PinHeader: {
			backgroundColor: 'white',
			flexDirection: 'row',
			alignItems: 'flex-end',
			justifyContent: 'space-between',
			flex: 1,
			padding: 8
		},
		UtilityNav: {
			flexDirection: 'row',
			flex: 1,
			justifyContent: 'space-between'
		},
		PinButton: {
			flexDirection: 'row',
			backgroundColor: 'red',
			padding: 8,
			borderRadius: 6,
			justifyContent: 'space-between',
			width: 60
		},
		PinButtonText: {
			color: 'white',
		},
		PinButtonContainer: {
			flex: 1,
			alignItems: 'flex-end'
		},
		PinContent: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 8
		},
		ImagePlaceholder: {
			backgroundColor: '#1e1e1e',
			flex: 1,
			alignSelf: 'stretch',
			borderRadius: 6
		},
		PinMeta: {
			flex: 1,
			backgroundColor: 'white'
		},
		PinUser: {
			flex: 5
		},
	})
