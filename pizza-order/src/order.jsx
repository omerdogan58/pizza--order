import React, { useState } from 'react';
import './index.css';

function App() {
  const [size, setSize] = useState('');
  const [crust, setCrust] = useState('Hamur Kalınlığı');
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState('');
  const [total, setTotal] = useState(85.5);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleCrustChange = (e) => {
    setCrust(e.target.value);
  };

  const handleExtrasChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (extras.length < 10) {
        setExtras([...extras, value]);
      } else {
        alert('En fazla 10 malzeme seçebilirsiniz.');
        e.target.checked = false;
      }
    } else {
      setExtras(extras.filter((item) => item !== value));
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleQuantityChange = (operation) => {
    if (operation === 'increase') {
      incrementQuantity();
    } else if (operation === 'decrease') {
      decrementQuantity();
    }
  };

  const handleOrder = () => {
    window.location.href = '/src/Success.html';
  };

  return (
    <div>
      <div className="header">
        <div className="header-img">
          <img
            src="https://raw.githubusercontent.com/gizem-guneren/pizza2/5aa65359b38f2359e4ccb649473323fc9cdaeb07/Assets/Iteration-1-assets/logo.svg"
            alt="Pizza Logo"
          />
        </div>
        <div className="choice">
          <p>
            Anasayfa - <strong>Sipariş Oluştur</strong>
          </p>
        </div>
      </div>
      <div className="container">
        <h2 className="pizza-title">Position Absolute Acı Pizza</h2>
        <div className="price-rating-container">
          <p className="price">85.50₺</p>
          <p className="rating">4.9 (200)</p>
        </div>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <div className="selection-container">
          {/* Boyut Seçimi */}
          <div className="dough-group">
            <label>
              Boyut Seç <span style={{ color: '#CE2829' }}>*</span>
            </label>
            <br />
            <input
              type="radio"
              name="size"
              value="Küçük"
              onChange={handleSizeChange}
            />{' '}
            Küçük
            <br />
            <input
              type="radio"
              name="size"
              value="Orta"
              onChange={handleSizeChange}
            />{' '}
            Orta
            <br />
            <input
              type="radio"
              name="size"
              value="Büyük"
              onChange={handleSizeChange}
            />{' '}
            Büyük
          </div>

          {/* Hamur Seçimi */}
          <div className="pastry-group">
            <label>
              Hamur Seç <span style={{ color: '#CE2829' }}>*</span>
            </label>
            <br />
            <select name="crust" value={crust} onChange={handleCrustChange}>
              <option value="">Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
        </div>

        {/* Ek Malzemeler */}
        <div className="additional-material-group">
          <div className="material-header">
            <label>Ek Malzemeler</label>
            <br />
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          </div>

          <div className="material-checkboxes">
            <div>
              <input
                type="checkbox"
                value="Pepperoni"
                onChange={handleExtrasChange}
              />{' '}
              Pepperoni
            </div>
            <div>
              <input
                type="checkbox"
                value="Sosis"
                onChange={handleExtrasChange}
              />{' '}
              Sosis
            </div>
            <div>
              <input
                type="checkbox"
                value="Kanada Jambonu"
                onChange={handleExtrasChange}
              />{' '}
              Kanada Jambonu
            </div>
            <div>
              <input
                type="checkbox"
                value="Tavuk Izgara"
                onChange={handleExtrasChange}
              />{' '}
              Tavuk Izgara
            </div>
            <div>
              <input
                type="checkbox"
                value="Soğan"
                onChange={handleExtrasChange}
              />{' '}
              Soğan
            </div>
            <div>
              <input
                type="checkbox"
                value="Domates"
                onChange={handleExtrasChange}
              />{' '}
              Domates
            </div>
            <div>
              <input
                type="checkbox"
                value="Mısır"
                onChange={handleExtrasChange}
              />{' '}
              Mısır
            </div>
            <div>
              <input
                type="checkbox"
                value="Sucuk"
                onChange={handleExtrasChange}
              />{' '}
              Sucuk
            </div>
            <div>
              <input
                type="checkbox"
                value="Jalepeno"
                onChange={handleExtrasChange}
              />{' '}
              Jalepeno
            </div>
            <div>
              <input
                type="checkbox"
                value="Sarımsak"
                onChange={handleExtrasChange}
              />{' '}
              Sarımsak
            </div>
            <div>
              <input
                type="checkbox"
                value="Biber"
                onChange={handleExtrasChange}
              />{' '}
              Biber
            </div>
            <div>
              <input
                type="checkbox"
                value="Ananas"
                onChange={handleExtrasChange}
              />{' '}
              Ananas
            </div>
            <div>
              <input
                type="checkbox"
                value="Kabak"
                onChange={handleExtrasChange}
              />{' '}
              Kabak
            </div>
          </div>
        </div>

        <div className="section">
          {/* Sipariş Notu */}
          <label>Sipariş Notu:</label>
          <textarea
            className="note-input"
            value={note}
            onChange={handleNoteChange}
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          />
        </div>

        <div className="section-container">
          {/* Sol kısım: Miktar Kontrolleri */}
          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange('decrease')}>-</button>
            <span className="quantity-box">{quantity}</span>
            <button onClick={() => handleQuantityChange('increase')}>+</button>
          </div>

          {/* Sağ kısım: Sipariş Özeti */}
          <div className="section order-summary">
            <h3>Sipariş Toplamı</h3>
            <p>Seçimler: 25.00₺</p>
            <p className="total">Toplam: 110.50₺</p>
          </div>
        </div>

        <div className="order-button-container">
          {' '}
          {/* Butonu kapsayan div */}
          <button className="order-button" onClick={handleOrder}>
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
