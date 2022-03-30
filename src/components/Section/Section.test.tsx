import { render } from '@testing-library/react';
import Section from './Section';

describe('Section', () => {
	it('should render a section with hello world text', () => {
		const { getByText } = render(<Section>Hello World</Section>);
		const text = getByText('Hello World');

		expect(text).toBeVisible();
	});
});
