import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Register from './components/Register';
import Profile from './components/Profile';
import Checkout from './components/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      favorites: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Белая футболка с принтом",
          img: "white_1.jpeg",
          desc: "Стильная белая футболка с уникальным принтом",
          category: "white",
          price: "1499",
        },
        {
          id: 2,
          title: "Черная футболка базовая",
          img: "black_1.jpeg",
          desc: "Базовая черная футболка из премиального хлопка",
          category: "black",
          price: "1299",
        },
        {
          id: 3,
          title: "Белая футболка оверсайз",
          img: "white_2.jpeg",
          desc: "Свободная белая футболка в стиле оверсайз",
          category: "white",
          price: "1699",
        },
        {
          id: 4,
          title: "Черная футболка с логотипом",
          img: "black_2.jpeg",
          desc: "Черная футболка с контрастным логотипом",
          category: "black",
          price: "1599",
        },
        {
          id: 5,
          title: "Белая футболка минимализм",
          img: "white_3.jpeg",
          desc: "Минималистичная белая футболка с тонким принтом",
          category: "white",
          price: "1399",
        },
        {
          id: 6,
          title: "Черная футболка с рисунком",
          img: "black_3.jpeg",
          desc: "Черная футболка с авторским рисунком",
          category: "black",
          price: "1799",
        },
        {
          id: 7,
          title: "Белая футболка классическая",
          img: "white_4.jpeg",
          desc: "Классическая белая футболка из мягкого хлопка",
          category: "white",
          price: "1199",
        },
        {
          id: 8,
          title: "Черная футболка стильная",
          img: "black_4.jpeg",
          desc: "Стильная черная футболка с модным дизайном",
          category: "black",
          price: "1899",
        },
        {
          id: 9,
          title: "Белая футболка с надписью",
          img: "white_5.jpg",
          desc: "Белая футболка с креативной надписью",
          category: "white",
          price: "1599",
        },
        {
          id: 10,
          title: "Черная футболка urban",
          img: "black_5.jpg",
          desc: "Урбанистическая черная футболка с принтом",
          category: "black",
          price: "1699",
        },
        {
          id: 11,
          title: "Белая футболка premium",
          img: "white_6.jpg",
          desc: "Премиальная белая футболка высшего качества",
          category: "white",
          price: "2199",
        },
        {
          id: 12,
          title: "Черная футболка casual",
          img: "black_6.jpg",
          desc: "Повседневная черная футболка с комфортной посадкой",
          category: "black",
          price: "1499",
        },
        {
          id: 13,
          title: "Белая футболка спортивная",
          img: "white_7.jpg",
          desc: "Спортивная белая футболка из дышащего материала",
          category: "white",
          price: "1799",
        },
        {
          id: 14,
          title: "Черная футболка элегантная",
          img: "black_7.jpg",
          desc: "Элегантная черная футболка для особых случаев",
          category: "black",
          price: "1999",
        },
        {
          id: 15,
          title: "Белая футболка молодежная",
          img: "white_8.jpg",
          desc: "Молодежная белая футболка с современным дизайном",
          category: "white",
          price: "1599",
        }
      ],
      showFullItem: false,
      fullItem: {},
      userData: null
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentDidMount() {
    const savedUserData = localStorage.getItem('userData');
    const savedOrders = localStorage.getItem('userOrders');
    const savedFavorites = localStorage.getItem('userFavorites');
    
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      this.setState({ userData });
      
      if (savedOrders) {
        const orders = JSON.parse(savedOrders);
        if (orders[userData.email]) {
          this.setState({ orders: orders[userData.email] });
        }
      }

      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        if (favorites[userData.email]) {
          this.setState({ favorites: favorites[userData.email] });
        }
      }
    }
  }

  /**
   * Обновляет данные пользователя в состоянии и localStorage
   * @param {Object} userData - Объект с данными пользователя
   */
  updateUserData(userData) {
    this.setState({ userData });
    localStorage.setItem('userData', JSON.stringify(userData));
    
    const savedOrders = localStorage.getItem('userOrders');
    const savedFavorites = localStorage.getItem('userFavorites');

    if (userData) {
      if (savedOrders) {
        const orders = JSON.parse(savedOrders);
        if (orders[userData.email]) {
          this.setState({ orders: orders[userData.email] });
        } else {
          this.setState({ orders: [] });
        }
      }

      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        if (favorites[userData.email]) {
          this.setState({ favorites: favorites[userData.email] });
        } else {
          this.setState({ favorites: [] });
        }
      }
    } else {
      // При выходе очищаем состояние
      this.setState({ orders: [], favorites: [] });
    }
  }

  /**
   * Добавляет/удаляет товар из избранного
   * @param {Object} item - Товар для добавления/удаления из избранного
   */
  toggleFavorite(item) {
    const { userData, favorites } = this.state;
    if (!userData) return; // Если пользователь не авторизован, ничего не делаем

    this.setState(prevState => {
      const isFavorite = prevState.favorites.some(fav => fav.id === item.id);
      const newFavorites = isFavorite
        ? prevState.favorites.filter(fav => fav.id !== item.id)
        : [...prevState.favorites, item];

      // Сохраняем в localStorage
      const savedFavorites = JSON.parse(localStorage.getItem('userFavorites') || '{}');
      savedFavorites[userData.email] = newFavorites;
      localStorage.setItem('userFavorites', JSON.stringify(savedFavorites));

      return { favorites: newFavorites };
    });
  }

  /**
   * Сохраняет текущие заказы пользователя в localStorage
   */
  saveOrders() {
    const { userData, orders } = this.state;
    if (userData) {
      const savedOrders = localStorage.getItem('userOrders') || '{}';
      const allOrders = JSON.parse(savedOrders);
      allOrders[userData.email] = orders;
      localStorage.setItem('userOrders', JSON.stringify(allOrders));
    }
  }

  /**
   * Очищает корзину пользователя
   */
  clearCart = () => {
    this.setState({ orders: [] }, () => {
      this.saveOrders();
    });
  }

  render() {
    const totalPrice = this.state.orders.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
      <Router>
        <div className="container">
          <Header 
            orders={this.state.orders} 
            onDelete={this.deleteOrder} 
            onQuantityChange={this.handleQuantityChange}
            totalPrice={totalPrice}
            userData={this.state.userData}
          />
          <Routes>
            <Route path="/" element={
              <Home 
                items={this.state.currentItems}
                onShowItem={this.onShowItem}
                onAdd={this.addToOrder}
                chooseCategory={this.chooseCategory}
              />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/register" element={
              this.state.userData ? 
                <Navigate to="/" /> : 
                <Register updateUserData={this.updateUserData} />
            } />
            <Route path="/profile" element={
              !this.state.userData ? 
                <Navigate to="/register" /> : 
                <Profile 
                  userData={this.state.userData}
                  updateUserData={this.updateUserData}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                />
            } />
            <Route path="/checkout" element={
              this.state.orders.length === 0 ? 
                <Navigate to="/" /> : 
                <Checkout 
                  orders={this.state.orders}
                  totalPrice={totalPrice}
                  clearCart={this.clearCart}
                />
            } />
          </Routes>
          <Footer />
        </div>
        {this.state.showFullItem && (
          <div className="full-item" onClick={() => this.onShowItem(this.state.fullItem)}>
            <div onClick={e => e.stopPropagation()}>
              <div className="full-item-content">
                <img src={"./img/" + this.state.fullItem.img} alt={this.state.fullItem.title} />
                <div className="item-info">
                  <h2>{this.state.fullItem.title}</h2>
                  <p>{this.state.fullItem.desc}</p>
                  <div className="item-footer">
                    <b>{Number(this.state.fullItem.price).toLocaleString()}₽</b>
                    <div className="add-to-cart" onClick={() => this.addToOrder(this.state.fullItem)}>
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Router>
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

  /**
   * Удаляет заказ из корзины по ID
   * @param {number} id - ID заказа для удаления
   */
  deleteOrder(id) {
    this.setState(prevState => ({
      orders: prevState.orders.filter(el => el.id !== id)
    }), () => this.saveOrders());
  }

  /**
   * Изменяет количество товара в корзине
   * @param {number} id - ID товара
   * @param {number} change - Величина изменения (1 или -1)
   */
  handleQuantityChange(id, change) {
    this.setState(prevState => ({
      orders: prevState.orders.map(order => {
        if (order.id === id) {
          const newQuantity = order.quantity + change;
          return {
            ...order,
            quantity: newQuantity > 0 ? newQuantity : 1
          };
        }
        return order;
      })
    }), () => this.saveOrders());
  }

  /**
   * Добавляет товар в корзину
   * @param {Object} item - Товар для добавления в корзину
   */
  addToOrder(item) {
    const existingOrder = this.state.orders.find(order => order.id === item.id);
    
    if (existingOrder) {
      this.handleQuantityChange(item.id, 1);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
        price: Number(item.price)
      };
      this.setState(prevState => ({
        orders: [...prevState.orders, newItem]
      }), () => {
        this.saveOrders();
        // Автоматически добавляем в избранное при добавлении в корзину
        if (this.state.userData && !this.state.favorites.some(fav => fav.id === item.id)) {
          this.toggleFavorite(item);
        }
      });
    }
  }
}

export default App; 