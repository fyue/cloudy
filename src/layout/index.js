import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import Main from './Main';
import Second from './Second';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import sale1 from './images/sec/catalog/3/1.png'; //待删除

//header
import h1 from './images/sec/header/1.jpg';
import h2 from './images/sec/header/2.jpg';
import h3 from './images/sec/header/3.jpg';
import h4 from './images/sec/header/4.jpg';
import h5 from './images/sec/header/5.jpg';
import h6 from './images/sec/header/6.jpg';
import h7 from './images/sec/header/7.jpg';

//each cata items
import l1 from './images/sec/catalog/1/1.png';
import l2 from './images/sec/catalog/1/2.jpg';
import l3 from './images/sec/catalog/1/3.png';
import l4 from './images/sec/catalog/1/4.png';
import l5 from './images/sec/catalog/1/5.png';
import l6 from './images/sec/catalog/1/6.png';
import l7 from './images/sec/catalog/1/7.png';
import l8 from './images/sec/catalog/1/8.png';
import l9 from './images/sec/catalog/1/9.png';

import c1 from './images/sec/catalog/2/1.png';
import c2 from './images/sec/catalog/2/2.png';
import c3 from './images/sec/catalog/2/3.png';
import c4 from './images/sec/catalog/2/4.png';
import c5 from './images/sec/catalog/2/5.png';
import c6 from './images/sec/catalog/2/6.png';
import c7 from './images/sec/catalog/2/7.png';
import c8 from './images/sec/catalog/2/8.png';
import c9 from './images/sec/catalog/2/9.png';


import p1 from './images/sec/catalog/3/1.png';
import p2 from './images/sec/catalog/3/2.png';
import p3 from './images/sec/catalog/3/3.png';
import p4 from './images/sec/catalog/3/4.png';
import p5 from './images/sec/catalog/3/5.png';
import p6 from './images/sec/catalog/3/6.png';
import p7 from './images/sec/catalog/3/7.png';
import p8 from './images/sec/catalog/3/8.png';
import p9 from './images/sec/catalog/3/9.png';

import xx1 from './images/sec/catalog/4/1.png';
import xx2 from './images/sec/catalog/4/2.png';
import xx3 from './images/sec/catalog/4/3.png';
import xx4 from './images/sec/catalog/4/4.png';
import xx5 from './images/sec/catalog/4/5.png';
import xx6 from './images/sec/catalog/4/6.png';
import xx7 from './images/sec/catalog/4/7.png';
import xx8 from './images/sec/catalog/4/8.png';
import xx9 from './images/sec/catalog/4/9.png';

import sw1 from './images/sec/catalog/5/1.png';
import sw2 from './images/sec/catalog/5/2.png';
import sw3 from './images/sec/catalog/5/3.png';
import sw4 from './images/sec/catalog/5/4.png';
import sw5 from './images/sec/catalog/5/5.png';
import sw6 from './images/sec/catalog/5/6.png';
import sw7 from './images/sec/catalog/5/7.png';
import sw8 from './images/sec/catalog/5/8.png';
import sw9 from './images/sec/catalog/5/9.png';

import sc1 from './images/sec/catalog/6/1.jpg';
import sc2 from './images/sec/catalog/6/2.jpg';
import sc3 from './images/sec/catalog/6/3.jpg';
import sc4 from './images/sec/catalog/6/4.png';
import sc5 from './images/sec/catalog/6/5.jpg';
import sc6 from './images/sec/catalog/6/6.png';
import sc7 from './images/sec/catalog/6/7.png';
import sc8 from './images/sec/catalog/6/8.png';
import sc9 from './images/sec/catalog/6/9.png';

import xp1 from './images/sec/catalog/7/1.png';
import xp2 from './images/sec/catalog/7/2.jpg';
import xp3 from './images/sec/catalog/7/3.png';
import xp4 from './images/sec/catalog/7/4.png';
import xp5 from './images/sec/catalog/7/5.png';
import xp6 from './images/sec/catalog/7/6.png';
import xp7 from './images/sec/catalog/7/7.png';
import xp8 from './images/sec/catalog/7/8.png';
import xp9 from './images/sec/catalog/7/9.png';

const cataDatas = [
  {
    type: 'laganxiang',
    header: h1,
    items: [
      [{sale: l1, label: '爱华仕', price: '1899.00'},
        {sale: l2, label: '爱华仕', price: '1899.00'},
        {sale: l3, label: '爱华仕', price: '1899.00'}],
      [{sale: l4, label: '爱华仕', price: '1899.00'},
        {sale: l5, label: '爱华仕', price: '1899.00'},
        {sale: l6, label: '爱华仕', price: '1899.00'}],
      [{sale: l7, label: '爱华仕', price: '1899.00'},
        {sale: l8, label: '爱华仕', price: '1899.00'},
        {sale: l9, label: '爱华仕', price: '1899.00'}],
    ],
  },
  {
    type: 'laganxiang',
    header: h2,
    items: [
      [{sale: c1, label: '爱华仕', price: '1899.00'},
        {sale: c2, label: '爱华仕', price: '1899.00'},
        {sale: c3, label: '爱华仕', price: '1899.00'}],
      [{sale: c4, label: '爱华仕', price: '1899.00'},
        {sale: c5, label: '爱华仕', price: '1899.00'},
        {sale: c6, label: '爱华仕', price: '1899.00'}],
      [{sale: c7, label: '爱华仕', price: '1899.00'},
        {sale: c8, label: '爱华仕', price: '1899.00'},
        {sale: c9, label: '爱华仕', price: '1899.00'}],
    ],
  },
  {
    type: 'laganxiang',
    header: h3,
    items: [
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
    ],
  },
  {
    type: 'laganxiang',
    header: h4,
    items: [
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
    ],
  },
  {
    type: 'laganxiang',
    header: h5,
    items: [
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
    ],
  },
  {
    type: 'laganxiang',
    header: h6,
    items: [
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
    ],
  },
  {
    type: 'laganxiang',
    header: h7,
    items: [
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
      [{sale: sale1, label: '爱华仕', price: '1899.00'},
        {sale: sale1, label: '爱华仕', price: '1899.00'}],
    ],
  },
];


class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goAhead: 'main',
      cataData: {},
    };
    this.go = this.go.bind(this);
    this.goDiffCataSecond = this.goDiffCataSecond.bind(this);
  }

  go(witch) {
    this.setState({
      goAhead: witch,
    });
  }

  goDiffCataSecond(ccatalogIndex) {
    let cataData = cataDatas[ccatalogIndex - 1];
    this.setState({
      cataData: cataData,
    });
    this.go('second');
  }

  componentDidMount() {
  }

  render() {
    const layout = classnames([css.layout]);
    let renderProxy = null;
    switch (this.state.goAhead) {
      case 'main' : {
        renderProxy = <Main goDiffCataSecond={this.goDiffCataSecond} key="main"/>;
        break;
      }
      case 'second' : {
        renderProxy = <Second go={this.go} cataData={this.state.cataData} key="second"/>;
        break;
      }
    }

    return (
      <div className={layout}>
        <ReactCSSTransitionGroup transitionName="fade"
                                 transitionEnterTimeout ={1500}
                                 transitionLeaveTimeout ={1500}>
          {renderProxy}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
export default Layout;





