import EndScreen from './EndScreen';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<EndScreen />).toJSON();
    expect(rendered).toBeTruthy();
});
