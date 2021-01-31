import React from 'react';
import {Provider} from 'react-redux';

import {RootNavigation} from '_navigation';
import {store} from '_store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
