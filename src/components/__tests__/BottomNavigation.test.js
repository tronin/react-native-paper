/* @flow */

import * as React from 'react';
import renderer from 'react-test-renderer';
import BottomNavigation from '../BottomNavigation';

const icons = [
  '3d-rotation',
  'ac-unit',
  'access-alarm',
  'access-alarms',
  'access-time',
];

const createState = (index, length) => ({
  index,
  routes: Array.from({ length }, (_, i) => ({
    key: `key-${i}`,
    icon: icons[i],
    title: `Route: ${i}`,
  })),
});

it('renders shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting
        navigationState={createState(0, 5)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders non-shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting={false}
        navigationState={createState(0, 3)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders custom icon and label in shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting
        navigationState={createState(0, 5)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
        renderIcon={({ route, tintColor }) => (
          <icon color={tintColor}>{route.icon}</icon>
        )}
        renderLabel={({ route, tintColor }) => (
          <text color={tintColor}>{route.label}</text>
        )}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders custom icon and label in non-shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting={false}
        navigationState={createState(0, 3)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
        renderIcon={({ route, tintColor }) => (
          <icon color={tintColor}>{route.icon}</icon>
        )}
        renderLabel={({ route, tintColor }) => (
          <text color={tintColor}>{route.label}</text>
        )}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders custom icon and label with custom colors in shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting
        navigationState={createState(0, 3)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
        activeTintColor="#FBF7DB"
        inctiveTintColor="#853D4B"
        barStyle={{ backgroundColor: '#E96A82' }}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders custom icon and label with custom colors in non-shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting={false}
        navigationState={createState(0, 3)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
        activeTintColor="#FBF7DB"
        inctiveTintColor="#853D4B"
        barStyle={{ backgroundColor: '#E96A82' }}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('hides labels in shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting
        labeled={false}
        navigationState={createState(0, 3)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('hides labels in non-shifting bottom navigation', () => {
  const tree = renderer
    .create(
      <BottomNavigation
        shifting={false}
        labeled={false}
        navigationState={createState(0, 3)}
        onIndexChange={jest.fn()}
        renderScene={({ route }) => route.title}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
