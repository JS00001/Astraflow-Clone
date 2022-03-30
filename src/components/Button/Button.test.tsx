import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
	it('should render a button with click me text', () => {
		const { getByText } = render(<Button>Click Me</Button>);
		const text = getByText('Click Me');

		expect(text).toBeVisible();
	});

	it('should render a disabled button if disabled prop is passed', () => {
		const { getByTestId } = render(<Button disabled>Click Me</Button>);
		const button = getByTestId('button');

		expect(button).toBeDisabled();
	});
});
