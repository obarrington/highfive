import PromptScreen from './PromptScreen';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<PromptScreen />).toJSON();
    expect(rendered).toBeTruthy();
});