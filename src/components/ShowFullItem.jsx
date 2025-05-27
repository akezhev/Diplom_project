<<<<<<< HEAD
import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <img
            src={"./img/" + this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
=======
import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <img
            src={"./img/" + this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
>>>>>>> 36df7236b02d77c994298f3e3b1d645d2a87d2a3
