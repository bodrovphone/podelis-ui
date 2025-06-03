import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "next/image";

interface GifPlayerProps {
  gif?: string;
  still?: string;
  playing?: boolean;
  toggle?: () => void;
  [key: string]: any; // For other ...rest props
}

const GifPlayer = ({ gif, still, playing, toggle, ...rest }: GifPlayerProps) => (
  <div
    className={classNames("gif_player", { playing: playing })}
    onMouseEnter={toggle}
    onMouseLeave={toggle}
  >
    <div className="play_button" />
    <Image
      width={75}
      height={75}
      alt={rest.alt || "GIF image"} // Provide a default alt text
      {...rest}
      src={playing ? gif || still : still || gif}
    />
  </div>
);

GifPlayer.propTypes = {
  gif: PropTypes.string,
  still: PropTypes.string,
  playing: PropTypes.bool,
  toggle: PropTypes.func,
};

export default GifPlayer;
