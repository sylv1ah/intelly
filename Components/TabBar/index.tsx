import react, {Fragment, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from '../Icon';
import {Colours, Sizing} from '../../styles';

export default function TabBar({state, descriptors, navigation}) {
  const [fabOpen, setFabOpen] = useState(false);
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const routeName = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Fragment key={index}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                borderBottomColor: isFocused ? Colours.pink : Colours.black,
                ...styles.iconContainer,
              }}>
              <Icon
                name={routeName}
                width="24"
                height="24"
                stroke={isFocused ? Colours.pink : '#FFF'}
                fill="none"
                style={styles.icon}
              />
            </TouchableOpacity>
            {routeName === 'Schedule' ? (
              <TouchableOpacity
                onPress={() => setFabOpen(!fabOpen)}
                accessibilityRole="button"
                style={{top: fabOpen ? -55 : -40, ...styles.fab}}
                activeOpacity={1}>
                <View style={styles.fabContainer}>
                  <Icon
                    name="Fab"
                    stroke={Colours.black}
                    fill="none"
                    width="30"
                    height="30"
                  />
                </View>
              </TouchableOpacity>
            ) : null}
          </Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colours.black,
    justifyContent: 'space-around',
    // margin: Sizing.m,
    bottom: Sizing.l,
    borderRadius: Sizing.l,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: Sizing.l,
  },
  iconContainer: {
    // flex: 1,
    // paddingBottom: Sizing.l,
    margin: Sizing.ml,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: 20,
    height: 30,
    alignItems: 'center',
  },
  icon: {position: 'absolute'},
  fabContainer: {
    borderRadius: 50,
    backgroundColor: Colours.pink,
    position: 'absolute',
    // top: -40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colours.black,
    borderWidth: 5,
    borderStyle: 'solid',
    padding: Sizing.s,
  },
  fab: {
    width: 30,
    // height: 50,
    // backgroundColor: Colours.black,
  },
});
