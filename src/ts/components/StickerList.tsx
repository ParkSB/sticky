import * as React from 'react';
import '../../scss/sticker-list.scss';
import StickerItem from './StickerItem';

class StickerList extends React.Component<{}, { stickers: object[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      stickers: [{
        id: '',
        name: '',
        img: 'https://i.pinimg.com/originals/22/3d/48/223d48faee36d065df7c8cff6bed450a.png',
      }, {
        id: '',
        name: '',
        img: 'https://devstickers.com/assets/img/cat/javascript.png',
      }, {
        id: '',
        name: '',
        img: 'https://devstickers.com/assets/img/pro/func.png',
      }],
    };
  }

  render = () => {
    const { stickers } = this.state;

    return (
      <div id="sticker-list">
        <ul>
          {stickers.map((sticker: object) => {
            return <StickerItem sticker={sticker} />;
          })}
        </ul>
      </div>
    );
  }
}

export default StickerList;
