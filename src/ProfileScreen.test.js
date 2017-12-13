import ProfileScreen from './ProfileScreen';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<ProfileScreen />).toJSON();
    expect(rendered).toBeTruthy();
});