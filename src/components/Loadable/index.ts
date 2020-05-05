import ReactLoadable from 'react-loadable';
import LoadingBar from './LoadingBar';

const Loadable = (loader: any) => {
  return ReactLoadable({
    loader,
    delay: 300,
    loading: LoadingBar
  });
}

export default Loadable;