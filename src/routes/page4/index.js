import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Container/Modal';

function mapStateToProps(state) {
  return { state: state }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: amount => dispatch({ type: 'INCREMENT' }),
  }
}


class Page3 extends Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return <div style={{width: 100}}>
      Page 4

      <button onClick={this.openModal}>click</button>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus, augue sed ultrices dictum, lorem justo aliquam mi, sit amet luctus diam arcu interdum felis. Integer sem nisi, efficitur vel eros vitae, vestibulum eleifend nibh. Integer vestibulum egestas tortor, ut blandit velit dictum in. Maecenas quis nisi metus. Integer hendrerit, ex vitae dignissim bibendum, purus mauris porttitor ante, eget eleifend erat tellus nec lectus. Sed at neque cursus, varius ipsum ac, vestibulum ligula. Curabitur ullamcorper consectetur dignissim. Proin quis semper felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Maecenas quis hendrerit nibh. Curabitur neque felis, maximus et iaculis et, dictum id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ut sagittis sem. Mauris vitae porta sem. Morbi a egestas dui. Fusce nec nibh sagittis magna bibendum congue. Aliquam consequat risus et est auctor, id pellentesque dolor accumsan. Vestibulum purus lorem, eleifend in massa a, placerat tincidunt nulla. Donec convallis, justo ut feugiat rhoncus, nisi erat pretium mi, ac rhoncus felis magna eget nisl.</p>
      <p>Maecenas tristique felis eu nunc mollis, non suscipit metus eleifend. Sed cursus leo eget vestibulum pretium. Pellentesque magna libero, tincidunt vitae leo at, mattis cursus turpis. Proin posuere elit nec consectetur accumsan. In ex est, pellentesque eu consequat a, consectetur id ipsum. Proin quis nisi eu magna varius tincidunt. Ut odio mauris, interdum ac sodales eu, cursus et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Morbi nec tempus est. Nulla pretium ex mauris, vitae semper orci mattis in. Phasellus cursus sagittis urna at malesuada. Vestibulum sed finibus sapien. Vestibulum mollis libero dolor, nec porta arcu sodales vel. Praesent vitae ultrices lectus, quis molestie lorem. In sit amet vestibulum nibh. Curabitur sit amet nisi eget turpis placerat molestie. Vestibulum eget bibendum eros, sed lacinia augue. Maecenas eleifend mi odio, sed gravida mauris malesuada vel.</p>
      <p>Donec quis eros at ante placerat tincidunt et at justo. Quisque vel venenatis lorem. Suspendisse eros diam, vulputate sed mauris vel, ornare gravida leo. Sed pellentesque luctus laoreet. Aenean eu ante sit amet quam dignissim sodales eget ut odio. Suspendisse vel nisi aliquet, vulputate justo ut, venenatis sapien. Curabitur lectus dolor, fermentum sit amet congue eget, viverra a ante. Nulla magna enim, dignissim non purus eu, euismod tristique ligula. Etiam vitae porta odio. Curabitur a magna id nulla accumsan gravida vel vitae tellus. Maecenas nisl odio, imperdiet non ipsum nec, faucibus porta nulla. Morbi metus eros, ultricies id mauris eu, vehicula cursus ante. Donec in urna blandit, egestas sem lobortis, scelerisque risus. Sed ornare ex felis, sit amet congue sapien tempor id. Vestibulum a orci nec magna maximus hendrerit a non augue.</p>


      {
        this.state.modalOpen &&
        <Modal open={this.state.modalOpen} />
      }
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page3)
