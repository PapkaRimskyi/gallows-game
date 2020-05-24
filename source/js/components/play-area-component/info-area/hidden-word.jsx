import React from 'react';

export default class HiddenWord extends React.Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line react/prop-types
    this.word = props.word;
  }

  render() {
    // eslint-disable-next-line react/no-array-index-key
    const cellCollection = this.word.split('').map((item, index) => <li className="play-area__hidden-word-list-item" key={index} />);

    return (
      <div className="play-area__hidden-word">
        <ul className="play-area__hidden-word-list">
          {cellCollection}
        </ul>
      </div>
    );
  }
}
