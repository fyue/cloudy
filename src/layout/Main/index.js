import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import Top from './Top';
import Bottom from './Bottom';

import woman from './images/woman.png';
import man1 from './images/man1.png';
import man2 from './images/man2.png';
import newlogo from './images/newlogo.png';
import pack from './images/pack.png';
import bg from './images/bottomBg.png';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const main = classnames([css.main]);
    return (
      <div className={main}>
{/*        <div className={css.global}>
          <img src={woman} onTouchEnd={() => this.props.goDiffCataSecond(1)}/>
          <img src={pack} onTouchEnd={() => this.props.goDiffCataSecond(2)} />
          <img src={man1} />
          <img src={man2} />
          <img src={newlogo} />
        </div>*/}
        <Top/>
        <Bottom {...this.props}/>
        <div className={css.global}>
          <img src={bg}/>
        </div>
      </div>
    );
  }
}
export default Main;
