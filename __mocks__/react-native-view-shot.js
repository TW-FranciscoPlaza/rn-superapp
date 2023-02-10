// export const captureScreen = () => '';
// export const captureScreen = Promise.resolve(() => 'MyFakeToken');

// const view = () => ({
//   captureScreen: jest.fn(),
// });

// export default view;
export const captureScreen = jest.fn();

// jest.mock('react-native-view-shot', () => {
//   return {
//     captureScreen: jest.fn(),
//   };
// });
