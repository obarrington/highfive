import ScreenSelection from './ScreenSelection';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<ScreenSelection />).toJSON();
    expect(rendered).toBeTruthy();
});