import React, { Component } from "react";
import "./DrumPadComponent.scss";

const soundBank = [
  {
    id: "Sample",
    letter: "Q",
    src: "https://samples-react.netlify.app/Sample.mp3",
  },
  {
    id: "Kick",
    letter: "W",
    src: "https://samples-react.netlify.app/Kick.wav",
  },
  {
    id: "Snare",
    letter: "E",
    src: "https://samples-react.netlify.app/Snare.wav",
  },
  {
    id: "Clap",
    letter: "A",
    src: "https://samples-react.netlify.app/Clap.wav",
  },
  { id: "Rim", letter: "S", src: "https://samples-react.netlify.app/Rim.wav" },
  {
    id: "O-Hat",
    letter: "D",
    src: "https://samples-react.netlify.app/O-Hat.mp3",
  },
  {
    id: "C-Hat",
    letter: "Z",
    src: "https://samples-react.netlify.app/C-Hat.wav",
  },
  { id: "808", letter: "X", src: "https://samples-react.netlify.app/808.mp3" },
  {
    id: "Snap",
    letter: "C",
    src: "https://samples-react.netlify.app/Snap.wav",
  },
];

interface DrumPadProps {
  id: string;
  letter: string;
  src: string;
  className: string;
  handleDisplay: (display: string) => void;
}

class DrumPad extends Component<DrumPadProps> {
  private audio: HTMLAudioElement | null = null;

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === this.props.letter.charCodeAt(0)) {
      if (this.audio) {
        this.audio.play();
        this.audio.currentTime = 0;
      }
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    if (this.audio) {
      this.audio.play();
      this.audio.currentTime = 0;
    }
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div className="button-wrapper">
        <div className="button" id={this.props.id} onClick={this.handleClick}>
          <h1>{this.props.letter}</h1>
          <audio
            id={this.props.letter}
            src={this.props.src}
            ref={(ref) => (this.audio = ref)}
          ></audio>
        </div>
      </div>
    );
  }
}

interface DrumPadState {
  display: string;
}

class DrumPadComponent extends Component<{}, DrumPadState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      display: "MAKE A BEAT",
    };
  }

  handleDisplay = (display: string) => this.setState({ display });

  render() {
    return (
      <div id="drum-machine" className="drumpad-wrapper">
        <div className="box">
          <div className="wave"></div>
        </div>
        <div id="display" className="display">
          {this.state.display}
        </div>
        <div id="drum-pads" className="pad">
          {soundBank.map((sound) => (
            <DrumPad
              className="button"
              key={sound.id}
              id={sound.id}
              letter={sound.letter}
              src={sound.src}
              handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DrumPadComponent;
