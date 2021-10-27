// import cx from "classnames";
import { Component } from "react";

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      dislikes: 25,
    };
  }

  /**
   * Handle like and dislike click
   *
   * TODO The next step would be optimising this menthod, to remove repeated code,
   * decrease if/else blocks, and maybe to get the type of the button from `event.target`
   * rather than passed as argument.
   */
  handleClick = (e, type) => {
    e.persist();
    const buttonClassList = e.target.classList;

    if (type === "like") {
      if (buttonClassList.contains("liked")) {
        this.setState({
          likes: this.state.likes - 1,
        });
        e.target.classList.remove("liked");
      } else {
        this.setState({
          likes: this.state.likes + 1,
        });
        e.target.classList.add("liked");
      }
    } else {
      if (buttonClassList.contains("disliked")) {
        this.setState({
          dislikes: this.state.dislikes - 1,
        });
        e.target.classList.remove("disliked");
      } else {
        this.setState({
          dislikes: this.state.dislikes + 1,
        });
        e.target.classList.add("disliked");
      }
    }
  };

  render() {
    const { likes, dislikes } = this.state;
    return (
      <>
        <div>
          <button
            type="button"
            onClick={(e) => this.handleClick(e, "like")}
            className="like-button"
          >
            Like | <span className="likes-counter">{likes}</span>
          </button>
          <button
            type="button"
            onClick={(e) => this.handleClick(e, "dislike")}
            className="dislike-button"
          >
            Dislike | <span className="dislikes-counter">{dislikes}</span>
          </button>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                        border-radius: 0;
                        border: 1px solid lightgrey;
                    }

                    .like-button {
                        margin-right: 5px;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }

                    .like-button span, .dislike-button span {
                      pointer
                    }
                `}</style>
      </>
    );
  }
}
