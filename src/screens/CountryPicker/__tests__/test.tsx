import React from 'react';
import { CountryPicker } from '..';
import { render, fireEvent } from '@testing-library/react-native';

it('Should render correctly', () => {
  const screen = render(<CountryPicker />);
  expect(screen).toBeTruthy();
});

it('Should render countires buttons', () => {
  const screen = render(<CountryPicker />);
  const buttons = screen.getAllByTestId(/btn[a-z]{2}/gi);

  expect(buttons).toHaveLength(5);
});

it('Should change flag button state after press to active(change border Color) and button next to be enabled)', () => {
  const screen = render(<CountryPicker />);
  const buttons = screen.getAllByTestId(/btn[a-z]{2}/gi);
  const continueButton = screen.getByTestId('buttonContinue');
  expect(continueButton.props.children.props.disabled).toBeTruthy();
  fireEvent.press(buttons[0]);
  //if active change the color of the border
  expect(buttons[0].props.style.borderColor).toEqual('#FF4D67');
  expect(continueButton.props.children.props.disabled).toBeFalsy();
});

it('Should disable the next and prev buttons if search is present and finds countires buttons with right countries ', () => {
  const screen = render(<CountryPicker />);
  const btnNext = screen.getByTestId('buttonNext');
  const btnPrev = screen.getByTestId('buttonPrev');
  const search = screen.getByTestId('search');
  expect(btnNext.props.children.props.disabled).toBe(false);
  expect(btnPrev.props.children.props.disabled).toBe(false);
  expect(search).toBeTruthy();

  fireEvent.changeText(search, 'poland');
  expect(btnNext.props.children.props.disabled).toBeTruthy();
  expect(btnPrev.props.children.props.disabled).toBeTruthy();

  const buttons = screen.getAllByTestId(/btn[a-z]{2}/gi);
  expect(buttons.length).toBe(1);
});
