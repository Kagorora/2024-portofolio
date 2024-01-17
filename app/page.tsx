import Image from 'next/image';
import Home from './pages/home';
import variables from './variables.module.scss';

import './styles/index.scss';

const page = () => {
  return (
    <div className="page-container">
      <Home />
    </div>
  );
};

export default page;
