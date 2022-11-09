// jest: test if the component renders correctly

import { render, screen } from '@testing-library/react';

import ActivityMetadata from '../pages/components/activity-metadata';

// mock metadata data for testing
// type data = {
//   activity: string;
//   accessibility: number;
//   type: string;
//   participants: number;
//   price: number;
//   link: string;
//   key: string;
//   className?: string;
//   style?: React.CSSProperties;
// };
const data = {
  activity: 'test activity',
  accessibility: 0.5,
  type: 'test type',
  participants: 1,
  price: 0.5,
  link: 'test link',
  key: 'test key',
};

describe('Home', () => {
  it('renders correctly', () => {
    render(<ActivityMetadata {...data} />);

    expect(screen.getByText('test activity')).toBeInTheDocument();
    expect(screen.getByText('test type')).toBeInTheDocument();
  });
});
