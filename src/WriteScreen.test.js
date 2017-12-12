import WriteScreen from './WriteScreen';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<WriteScreen />).toJSON();
    expect(rendered).toBeTruthy();
});