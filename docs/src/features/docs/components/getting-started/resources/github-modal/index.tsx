import {
  ActionArea,
  ActionAreaButton,
  Box,
  Modal,
  ModalContainer,
  ModalContent,
  ModalContentItem,
  ModalDimmer,
  WithInteraction,
} from '@eduplexmkt/mkt-design-system';
import Link from 'next/link';

import {
  contentButtonStyle,
  modalContainerStyle,
  modalDimmerStyle,
} from './style';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const GithubModal = ({ open, onOpenChange }: Props) => {
  const handleClick = () => {
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContainer
        size="medium"
        sx={modalContainerStyle}
        dimmer={<ModalDimmer sx={modalDimmerStyle} />}
      >
        <ModalContent sx={{ paddingBottom: '0px' }}>
          <ModalContentItem gap="12px">
            <WithInteraction>
              <Box
                onClick={handleClick}
                as={Link}
                href="https://github.com/eduplexmkt/mkt-design-system"
                target="_blank"
                rel="noopener noreferrer"
                sx={contentButtonStyle}
              >
                Eduplex MKT Design System
              </Box>
            </WithInteraction>
          </ModalContentItem>
        </ModalContent>

        <ActionArea>
          <ActionAreaButton
            buttonColor="assistive"
            sx={{ borderRadius: '999px' }}
            onClick={() => onOpenChange(false)}
          >
            닫기
          </ActionAreaButton>
        </ActionArea>
      </ModalContainer>
    </Modal>
  );
};

export default GithubModal;
