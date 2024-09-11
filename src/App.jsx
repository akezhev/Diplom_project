import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "белая",
          img: "white_1.jpeg",
          desc: "lorem ipsum",
          category: "white",
          price: "100.99",
        },
        {
          id: 2,
          title: "черная",
          img: "black_1.jpeg",
          desc: "lorem ipsum",
          category: "black",
          price: "89.99",
        },
        {
          id: 3,
          title: "белая",
          img: "white_2.jpeg",
          desc: "lorem ipsum",
          category: "white",
          price: "79.99",
        },
        {
          id: 4,
          title: "черная",
          img: "black_2.jpeg",
          desc: "lorem ipsum",
          category: "black",
          price: "109.99",
        },
        {
          id: 5,
          title: "белая",
          img: "white_3.jpeg",
          desc: "lorem ipsum",
          category: "white",
          price: "99",
        },
        {
          id: 6,
          title: "черная",
          img: "black_3.jpeg",
          desc: "lorem ipsum",
          category: "black",
          price: "89.99",
        },
        {
          id: 7,
          title: "белая",
          img: "white_4.jpeg",
          desc: "lorem ipsum",
          category: "white",
          price: "89.99",
        },
        {
          id: 8,
          title: "черная",
          img: "black_4.jpeg",
          desc: "lorem ipsum",
          category: "black",
          price: "89.99",
        },
        {
          id: 9,
          title: "белая",
          img: "white_5.jpg",
          desc: "lorem ipsum",
          category: "white",
          price: "89.99",
        },
        {
          id: 10,
          title: "черная",
          img: "black_5.jpg",
          desc: "lorem ipsum",
          category: "black",
          price: "89.99",
        },
        {
          id: 11,
          title: "белая",
          img: "white_6.jpg",
          desc: "lorem ipsum",
          category: "white",
          price: "89.99",
        },
        {
          id: 12,
          title: "черная",
          img: "black_6.jpg",
          desc: "lorem ipsum",
          category: "black",
          price: "89.99",
        },
        {
          id: 13,
          title: "белая",
          img: "white_7.jpg",
          desc: "lorem ipsum",
          category: "white",
          price: "89.99",
        },
        {
          id: 14,
          title: "черная",
          img: "black_7.jpg",
          desc: "lorem ipsum",
          category: "black",
          price: "89.99",
        },
        {
          id: 15,
          title: "белая",
          img: "white_8.jpg",
          desc: "lorem ipsum",
          category: "white",
          price: "89.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="container">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <div className="wrapper">
          <Categories chooseCategory={this.chooseCategory} />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.currentItems}
            onAdd={this.addToOrder}
          />

          {this.state.showFullItem && (
            <ShowFullItem
              onAdd={this.addToOrder}
              onShowItem={this.onShowItem}
              item={this.state.fullItem}
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;

