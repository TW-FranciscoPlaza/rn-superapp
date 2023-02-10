/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {captureScreen} from '../__mocks__/react-native-view-shot';
import * as RNViewShotLibrary from 'react-native-view-shot';
// const RNViewShotLibrary = require('react-native-view-shot');

// jest.mock('react-native-view-shot', () => {
//   return {
//     captureScreen: jest
//       .fn()
//       .mockResolvedValue(Promise.resolve(successfullyResponse)),
//   };
// });

// Mocks
const successfullyResponse = 'captured_image_url';
const failedResponse = 'error found';

describe('react-native-view-shot tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('renders correctly', () => {
    renderer.create(<App />);
  });
  it('should validate the use of captureScreen successfully', () => {
    const {getByA11yHint} = render(<App />);
    const homeButton = getByA11yHint('Capture Image');

    const viewShotSpy = jest
      .spyOn(RNViewShotLibrary, 'captureScreen')
      .mockResolvedValue(Promise.resolve(successfullyResponse));

    fireEvent.press(homeButton);

    expect(viewShotSpy).toBeCalledTimes(1);
    expect(captureScreen).toBeCalledTimes(1);
  });

  it('should catch an error when the captureScreen invocation fails', () => {
    const {getByA11yHint} = render(<App />);
    const homeButton = getByA11yHint('Capture Image');

    const viewShotSpy = jest
      .spyOn(RNViewShotLibrary, 'captureScreen')
      .mockResolvedValue(Promise.reject(failedResponse));

    fireEvent.press(homeButton);

    expect(viewShotSpy).toBeCalledTimes(1);
    expect(captureScreen).toBeCalledTimes(1);
  });
});
