import * as React from 'react';
import '../../scss/sticker-item.scss';

class StickerItem extends React.Component<{ sticker: any }> {
  constructor(props: any) {
    super(props);
  }

  render = () => {
    const { sticker } = this.props;

    return (
      <li className="sticker-item">
        <img src={sticker.img} alt={sticker.name} />
      </li>
    );
  }
}

export default StickerItem;
