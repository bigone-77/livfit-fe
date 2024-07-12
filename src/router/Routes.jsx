import { Route, Routes as ReactRouters } from 'react-router-dom';
import HomePage from '@pages/HomePage';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/" element={<HomePage />} />
    </ReactRouters>
  );
};

export default Routes;
