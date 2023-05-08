import { Meta, StoryFn } from '@storybook/react';
import CardSecurityCode from '../components/CardSecurityCode/CardSecurityCode';
import RefProvider from '../contexts/RefProvider';
import useSecurityCode from '../hooks/useSecurityCode';

const meta = {
  component: CardSecurityCode,
  title: 'Section/CardSecurityCode',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  const { securityCode, securityCodeError, isValidatedSecurityCode } =
    useSecurityCode();

  return (
    <CardSecurityCode
      securityCode={securityCode}
      errorMessage={securityCodeError}
      isValidatedSecurityCode={isValidatedSecurityCode}
    />
  );
};
