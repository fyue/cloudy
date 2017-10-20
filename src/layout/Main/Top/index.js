import React from 'react';
import classnames from 'classnames';
import css from './index.less';
import Products from './Products';

import fixredflower from './images/head/redflower.png';

//small one
import s1 from './images/bod/1s.png';
import s2 from './images/bod/2s.png';
import s3 from './images/bod/3s.png';
import s4 from './images/bod/4s.jpg';
import s5 from './images/bod/5s.png';
import s6 from './images/bod/6s.png';
import s7 from './images/bod/7s.jpg';
import s8 from './images/bod/8s.png';
import s9 from './images/bod/9s.png';
import s10 from './images/bod/10s.png';
import s11 from './images/bod/11s.png';
import s12 from './images/bod/12s.png';

//big one
import b1 from './images/bod/1b.png';
import b2 from './images/bod/2b.png';
import b3 from './images/bod/3b.png';
import b4 from './images/bod/4b.png';
import b5 from './images/bod/5b.png';
import b6 from './images/bod/6b.png';
import b7 from './images/bod/7b.png';
import b8 from './images/bod/8b.png';
import b9 from './images/bod/9b.png';
import b10 from './images/bod/10b.png';
import b11 from './images/bod/11b.png';
import b12 from './images/bod/12b.jpg';

const playDatas = [
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },
  {
    id: '',
    pic: b1,
    title: '爱华仕',
    description: '铝框拉杆箱',
    special1: '一体化铝框',
    special2: '3色可选',
    link: 'https://detail.tmall.com/item.htm?id=557489349781',
    price: '1111',
  },

];

const backpacks = [
  [
    [s1, '银色'], [s2, '灰色'], [s3, '银色'], [s4, '玫瑰金'], [s5, '玫瑰金'], [s6, '草木绿']
  ],
  [
    [s7, '蓝紫色'], [s8, '天堂蓝'], [s9, '知更鸟蓝'], [s10, '白色'], [s11, '蓝色格子'], [s12, '桔粉色']
  ]
];

export default class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeId: 0,
    };
    this.renderHeadWrapper = this.renderHeadWrapper.bind(this);
    this.renderBod = this.renderBod.bind(this);
    this.showTopProduct = this.showTopProduct.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.play();
  }

  componentWillUnmount() {
    clearInterval(this.autoPlay);
  }


  play() {
    this.autoPlay = setInterval(() => {
      this.setState((preState) => {
        if (preState.activeId < 11) {
          preState.activeId += 1;
        } else {
          preState.activeId = 0;
        }
      });
    }, 5000);
  }

  showTopProduct(id) {
    this.setState({
      activeId: id,
    });
  }

  mapIdxToPosRem(id) {
    let left = id * 1040;
    return -(left / 108) + 'rem';
  }

  /*  {
   id: '',
   pic: b1,
   title: '爱华仕',
   description: '铝框拉杆箱',
   special1: '一体化铝框',
   special2: '3色可选',
   link: 'https://detail.tmall.com/item.htm?id=557489349781',
   price: '1111',
   },*/

  renderHeadWrapper() {
    let position = this.mapIdxToPosRem(this.state.activeId);
    return (
      <div className={css.head}>
        <div className={css.flexRight}>
          <img src={fixredflower} />
          <div className={css.longPicWrapper} style={{left: position}} >
            {playDatas.map((item, idx) => (
              <div className={css.eachPlayItem} key={idx}>
                <img className={css.leftImg} src={item.pic} />
                <div className={css.rightDetails}>
                  <div className={css.top}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                  <ul className={css.center}>
                    <li>{item.special1}</li>
                    <li>{item.special2}</li>
                  </ul>
                  <div className={css.bottom}>
                    <p><span>￥</span><span>{item.price}</span></p>
                    <a href={item.link}><span>点击查看详情</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderBod() {
    return (
      <div className={css.bod}>
        {backpacks.map((items, index) => {
          return (
            <div className={css.eachRow} key={index}>
              {items.map((item, idx) => {
                return <Products key={idx}
                                  product={item}
                                  active={this.state.activeId === index * 6 + idx}
                                  showTopProduct={this.showTopProduct.bind(this, index * 6 + idx)} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const top = classnames([css.top], [css[`bg${this.props.index}`]]);
    return (
      <div className={top}>
          {this.renderHeadWrapper()}
          {this.renderBod()}
      </div>
    );
  }
}
