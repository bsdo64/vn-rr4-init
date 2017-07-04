import React, {
  Component,
  PropTypes,
} from 'react';

class Modal extends Component {

  overlay1 = null;
  overlay2 = null;

  handleScroll = (e, values) => {
    console.log(e);
    const $target = $(e.target);
    if ($target.hasClass('overlay')) {
      e.preventDefault();
    }

    if ($target.hasClass('overlay-content')) {
      const scrollTop = $target.scrollTop();
      const height = $target.height();

      const topGap = scrollTop;
      const bottomGap = $target[0].scrollHeight - (scrollTop + height);
      const isBottom = bottomGap < 2;
      const isTop = topGap < 1;

      if (isBottom) {
        console.log('bttom');

        if (e.deltaY > 1) {
          console.log('stop Bottom!!');
          e.preventDefault();
        }
      }

      if (isTop) {
        console.log('Top');

        if (e.deltaY < 0) {
          console.log('stop Top!!');
          e.preventDefault();
        }
      }
    } else {
      e.preventDefault();
      return;
    }
  }

  componentDidMount() {
    this.overlay1.addEventListener('scroll', this.handleScroll, true);
    //this.overlay1.addEventListener('wheel', this.handleScroll, true);
  }

  componentWillUnmount(){
    this.overlay1.removeEventListener('scroll', this.handleScroll, true);
    //this.overlay1.removeEventListener('wheel', this.handleScroll, true);
  }

  render() {
    return (
      <div>
        <div className="overlay" ref={r => this.overlay1 = r} style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.8)',
        }} onScroll={this.handleScroll}>
          <div className="overlay-content" ref={r => this.content1 = r} style={{
            width: 500, overflowY: 'scroll', background: '#fff',
            top: '10%', bottom: '10%', left: '20%', right: '20%', position: 'absolute'
          }}>
            Overlay-content

            Overlay-content

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultricies enim. Cras sollicitudin ipsum accumsan dapibus ornare. Donec tincidunt lacus ultrices, hendrerit nisi eu, hendrerit massa. Nulla vitae urna at dui rhoncus euismod in et neque. Vestibulum malesuada finibus bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris nec odio quis risus laoreet tincidunt nec sed lectus. In sit amet turpis tincidunt, rhoncus nibh at, sagittis turpis. Cras laoreet aliquet nibh, vitae vestibulum justo pulvinar non. In egestas mi nec ultrices consectetur. Proin pellentesque massa at nunc efficitur dictum. Nunc non mauris volutpat magna sollicitudin facilisis eu a neque. Vestibulum gravida ultrices erat et imperdiet. Nunc nec nibh convallis, tristique erat eget, rhoncus arcu.</p>
            <p>Vestibulum vehicula dignissim rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nisl bibendum, tincidunt nunc ac, vehicula lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non efficitur lacus, ut auctor neque. Maecenas vel risus sed justo cursus auctor eget vulputate ex. Etiam non tincidunt eros. Nunc imperdiet pretium lacus. Phasellus faucibus est at turpis viverra posuere. Suspendisse id interdum enim. Nulla dolor lectus, gravida ut neque sed, tristique venenatis neque. Maecenas laoreet euismod odio vitae finibus. Nulla a arcu ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc blandit ultricies imperdiet. Donec id leo imperdiet, consectetur ligula id, consequat dui.</p>
            <p>Suspendisse potenti. Donec ultrices euismod nibh ac condimentum. Cras sodales egestas enim eget congue. Vivamus non justo quis turpis laoreet luctus. Aliquam a lacinia nulla. Pellentesque congue suscipit erat sed lacinia. Praesent iaculis mi at velit malesuada auctor. Quisque in tortor vel est finibus sagittis. Ut nunc mauris, dignissim vitae felis eu, viverra semper sem. Phasellus tempus tortor diam, at pharetra odio hendrerit sit amet. Maecenas varius quam ut ipsum rhoncus, non molestie metus finibus. Integer quis sodales quam. Phasellus fringilla blandit lectus sit amet dignissim. Sed tristique commodo justo sit amet elementum. Praesent a rhoncus dolor.</p>
            <p>Nunc in nulla ipsum. Nulla venenatis, nulla at efficitur molestie, ligula ex ullamcorper urna, id imperdiet dolor sapien nec arcu. Aenean id mattis libero, ac consequat augue. Mauris rutrum tortor velit, sit amet porttitor nulla maximus in. Pellentesque in nisl tellus. Maecenas sed velit sit amet augue luctus rhoncus vitae a est. Maecenas sed diam vestibulum, tincidunt dui non, mattis magna. Curabitur at nulla id augue dapibus volutpat a eu neque. Curabitur laoreet vulputate dolor non accumsan. Pellentesque accumsan ipsum nisi, in tincidunt metus iaculis vitae. Mauris suscipit elementum nisl vitae efficitur. Suspendisse faucibus libero diam, et placerat purus auctor sit amet. Donec vitae libero non ipsum condimentum rutrum ut sit amet metus.</p>
            <p>Mauris non efficitur metus. Suspendisse in finibus lacus. Sed libero ipsum, feugiat ut varius sed, mollis sed est. Morbi massa odio, iaculis id lacinia ultrices, molestie nec nunc. Pellentesque porttitor ante vel lacus vehicula, vitae ullamcorper quam posuere. Vestibulum eget iaculis arcu. In pretium pretium tempor. Cras libero mauris, varius eget neque vitae, congue rutrum risus. Quisque odio nisl, placerat vitae molestie nec, eleifend id nisl. In volutpat, eros eu feugiat placerat, diam dolor sodales lacus, sed semper velit arcu at turpis. Nullam varius, massa eget laoreet elementum, dolor sapien aliquam elit, ultricies luctus nulla arcu mattis mauris. Aliquam pretium eros ut ullamcorper blandit. Ut feugiat diam vel justo vulputate, quis vestibulum metus tincidunt. Fusce arcu lacus, volutpat eget nunc a, vehicula tristique magna.</p>

          </div>
        </div>

        <div style={{height: '100%', overflow: 'auto'}}></div>
      </div>
    );
  }
}

Modal.propTypes = {};
Modal.defaultProps = {};

export default Modal;
