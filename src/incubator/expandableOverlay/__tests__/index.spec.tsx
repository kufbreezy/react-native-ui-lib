import React from 'react';
import {render} from '@testing-library/react-native';
import ExpandableOverlay, {ExpandableOverlayProps} from '../index';
import View from '../../../components/view';
import Text from '../../../components/text';
import {ExpandableOverlayDriver} from '../ExpandableOverlay.driver';

// What we want to test:
/**
 * 1. Sanity - it renders.
 * 2. Clicking opens the modal/dialog.
 */

const testID = 'expandableOverylayTest';
const helloWorld = 'Hello World';

const TestCase = (props: Omit<ExpandableOverlayProps, 'testID'>) => {
  return (
    //@ts-expect-error
    <ExpandableOverlay migrateDialog {...props} testID={testID}>
      <View>
        <Text>{helloWorld}</Text>
      </View>
    </ExpandableOverlay>
  );
};

const getDriver = <T extends ExpandableOverlayProps>(props: T) => {
  const renderTree = render(<TestCase {...props}/>);
  const driver = ExpandableOverlayDriver<T>({renderTree, testID});
  return {driver, renderTree};
};

describe('ExpandableOverlay', () => {
  describe('basic functionality', () => {
    it('should render', () => {
      render(<TestCase/>);
    });
    it('should open dialog when pressed', () => {
      const {driver} = getDriver({useDialog: true});
      expect(driver.getOverlay().exists()).toBeFalsy();
      expect(driver.getOverlay().getModal().exists()).toBeTruthy();
      driver.press();
      expect(driver.getOverlay().exists()).toBeTruthy();
    });
    const universe = 'Hello Universe';
    it(`should render ${helloWorld} on starting view and ${universe} in the dialog only after pressing`, () => {
      const content = <Text>{universe}</Text>;
      const {driver, renderTree} = getDriver({useDialog: true, expandableContent: content});
      expect(renderTree.queryByText(helloWorld)).toBeTruthy();
      expect(renderTree.queryByText(universe)).toBeFalsy();
      driver.press();
      expect(renderTree.queryByText(universe)).toBeTruthy();
    });
  });
});
