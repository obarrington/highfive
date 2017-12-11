import DrawScreen from './DrawScreen';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<DrawScreen />).toJSON();
    expect(rendered).toBeTruthy();
});