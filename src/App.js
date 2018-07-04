import React, { PureComponent } from 'react';

import TodoApp from './containers/todoApp';

// connect with redux
import { Provider } from 'react-redux'
import store from './store';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import './App.css';

class App extends PureComponent {
  /**
   * todo : {
   *   id: currentTime
   *   complete: bool,
   *   content: string,
   * }
   */

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Provider store={store}>
          <div className='container'>
            <TodoApp />
          </div>
        </Provider>
      </LocaleProvider>);
  }
}

export default App;
