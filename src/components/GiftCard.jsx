import React, { useState } from 'react';
import { ShoppingCart, Gift, Sparkles, Star } from 'lucide-react';
import actionCarLogo from '../assets/images/action car logo.png';

const GiftCard = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const amounts = [25, 50, 100, 200, 500];

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      type: 'gift_card',
      amount: selectedAmount,
      quantity: quantity,
      total: selectedAmount * quantity
    };
    console.log('Added to cart:', cartItem);
    // Here you would typically dispatch to your cart state or call an API
    alert(`Added ${quantity}x $${selectedAmount} Gift Card(s) to cart!`);
  };

  const totalPrice = selectedAmount * quantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto">
        {/* Main Gift Card Container */}
        <div 
          className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
            isHovered ? 'scale-105 shadow-3xl' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200 to-transparent rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-24 -translate-x-24 opacity-30"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 p-4 md:p-6 lg:p-8">
            {/* Left Side - Gift Card Visual */}
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Floating Sparkles */}
              <div className="relative">
                <Sparkles className="absolute -top-4 -left-4 text-blue-400 w-6 h-6 animate-pulse" />
                <Sparkles className="absolute -bottom-2 -right-2 text-blue-300 w-4 h-4 animate-pulse delay-300" />
                
                {/* Gift Card Design */}
                <div className="relative w-52 h-32 md:w-56 md:h-36 bg-white rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 border-2 border-blue-200">
                  <div className="absolute inset-2 bg-white rounded-xl border border-gray-100">
                    <div className="p-3 h-full flex flex-col justify-between">
                      {/* Logo */}
                      <div className="flex justify-center">
                        <img 
                          src={actionCarLogo} 
                          alt="Action Car Logo" 
                          className="h-6 md:h-8 w-auto"
                        />
                      </div>
                      
                      {/* Gift Card Text */}
                      <div className="text-center">
                        <h3 className="text-black text-base md:text-lg font-bold mb-1">GIFT CARD</h3>
                        <div className="text-gray-700 text-sm md:text-base font-semibold">
                          ${selectedAmount}.00
                        </div>
                      </div>
                      
                      {/* Decorative Pattern */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-2 h-2 text-blue-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gift Icon */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-full">
                <Gift className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            {/* Right Side - Controls */}
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                  Perfect Gift Card
                </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                  Give the gift of choice with our premium gift cards. Perfect for any occasion and redeemable across all our services.
                </p>
              </div>

              {/* Amount Selection */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`relative p-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:scale-105'
                      }`}
                    >
                      ${amount}
                      {selectedAmount === amount && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                          <Star className="w-2 h-2 text-blue-600 fill-current" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    disabled={quantity <= 1}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold text-lg transition-colors duration-200"
                  >
                    -
                  </button>
                  <div className="bg-blue-50 px-4 py-2 rounded-xl">
                    <span className="text-lg font-semibold text-gray-800">{quantity}</span>
                  </div>
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-100 flex items-center justify-center font-bold text-lg transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-2xl border border-blue-100">
                <div className="flex justify-between items-center">
                  <span className="text-base text-gray-600">Total Price:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    ${totalPrice}.00
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-base">Add to Cart</span>
              </button>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>No Expiration Date</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Instant Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Easy to Redeem</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span>Perfect for Gifting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;