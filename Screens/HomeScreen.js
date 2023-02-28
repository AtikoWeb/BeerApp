import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SPACING from '../config/SPACING';
import colors from '../config/data/colors';
import category from '../config/data/category';
const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = () => {
	const [activeCategory, setActiveCategory] = useState(0);
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={{ padding: SPACING * 2 }}>
					<View style={{ width: '60%', marginTop: SPACING * 2 }}>
						<Text style={{ fontSize: SPACING * 3, fontWeight: '700' }}>
							Порадуйте себя сегодня!
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: colors.light,
							marginVertical: SPACING * 3,
							padding: SPACING * 1.5,
							borderRadius: SPACING,
						}}
					>
						<Ionicons
							name='search'
							color={colors.gray}
							size={SPACING * 2.7}
						/>
						<TextInput
							placeholder='Поиск..'
							placeholderTextColor={colors.gray}
							style={{
								color: colors.gray,
								fontSize: SPACING * 2,
								marginLeft: SPACING,
							}}
						/>
					</View>
					<ScrollView horizontal>
						{category.map((category, index) => (
							<TouchableOpacity
								style={{ marginRight: SPACING * 3 }}
								key={index}
								onPress={() => setActiveCategory(index)}
							>
								<Text
									style={[
										{
											fontSize: SPACING * 1.7,
											fontWeight: '600',
											color: colors.gray,
										},
										activeCategory === index && {
											color: colors.black,
											fontWeight: '700',
											fontSize: SPACING * 1.8,
										},
									]}
								>
									{category.title}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
							marginVertical: SPACING * 2,
						}}
					>
						{category[activeCategory].recipes.map((item) => (
							<TouchableOpacity
								style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
								key={item.id}
							>
								<Image
									style={{
										width: '100%',
										height: ITEM_WIDTH + SPACING * 3,
										borderRadius: SPACING * 2,
									}}
									source={{
										uri: item.image,
									}}
								/>
								<Text
									style={{
										fontSize: SPACING * 2,
										fontWeight: '700',
										marginTop: SPACING,
									}}
								>
									{item.name}
								</Text>
								<Text
									style={{
										fontSize: SPACING * 1.5,
										color: colors.gray,
									}}
								></Text>
								<Text style={{ fontSize: SPACING * 2, fontWeight: '500' }}>
									{item.price
										.toString()
										.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}{' '}
									₸
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
