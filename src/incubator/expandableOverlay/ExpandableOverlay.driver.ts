import {DialogDriver, ModalDriver, useComponentDriver, usePressableDriver, ComponentProps} from '../../../testkit';
import {ExpandableOverlayProps} from '.';

type OverlayDriverType<Props extends ExpandableOverlayProps> = Props extends {useDialog: true}
  ? ReturnType<typeof DialogDriver>
  : ReturnType<typeof ModalDriver>;

export const ExpandableOverlayDriver = <Props extends ExpandableOverlayProps>(props: ComponentProps) => {
  const {renderTree, testID} = props;

  const driver = usePressableDriver<Props>(useComponentDriver<Props>({renderTree, testID}));

  const isUsingDialog = !!renderTree.queryByTestId(`${testID}.overlay.modal`);

  const overlayDriver = (isUsingDialog ? DialogDriver : ModalDriver)({
    renderTree,
    testID: `${testID}.overlay`
  }) as OverlayDriverType<Props>;

  const getOverlay = () => {
    return overlayDriver;
  };

  return {...driver, getOverlay};
};

