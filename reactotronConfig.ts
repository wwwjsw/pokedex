import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .use(networking())
  .connect();

export default reactotron;
