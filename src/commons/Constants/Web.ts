export * from './Mobile';
import {default as MobileConstants} from './Mobile';

const WebDeviceFrameSelector = '[data-react-native-web-dimensions="true"]';
function queryWebFrameDevice() {
  return document?.querySelector(WebDeviceFrameSelector);
}

const constants = {
  ...MobileConstants,
  get screenWidth() {
    return queryWebFrameDevice()?.clientWidth;
  },
  get screenHeight() {
    return queryWebFrameDevice()?.clientHeight;
  },
  get windowWidth() {
    return queryWebFrameDevice()?.clientWidth;
  },
  get windowHeight() {
    return queryWebFrameDevice()?.clientHeight;
  }
};

export default constants;