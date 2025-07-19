import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Eye, Star, Heart, Diamond, Sparkles } from 'lucide-react';

const TarotCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [dailyCard, setDailyCard] = useState(null);

  const tarotCards = useMemo(() => [
    {
      id: 1,
      name: "The Magician",
      meaning: "Manifestation, resourcefulness, power, inspired action",
      description: "You have the power to manifest your desires. Trust in your abilities and take inspired action.",
      image: "🎭",
      element: "Air",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "The High Priestess",
      meaning: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
      description: "Listen to your inner voice and trust your intuition. The answers you seek lie within.",
      image: "🌙",
      element: "Water",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "The Empress",
      meaning: "Femininity, beauty, nature, nurturing, abundance",
      description: "Embrace your nurturing side and connect with nature. Abundance flows to you naturally.",
      image: "🌸",
      element: "Earth",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "The Emperor",
      meaning: "Authority, structure, control, fatherhood",
      description: "Take charge of your life with confidence. Structure and discipline will lead to success.",
      image: "👑",
      element: "Fire",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "The Hierophant",
      meaning: "Spiritual wisdom, religious beliefs, conformity, tradition",
      description: "Seek guidance from traditional wisdom and spiritual teachings. Learning from others brings growth.",
      image: "📿",
      element: "Earth",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      name: "The Lovers",
      meaning: "Love, harmony, relationships, values alignment",
      description: "Important choices await you. Follow your heart and align with your true values.",
      image: "💕",
      element: "Air",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 7,
      name: "The Chariot",
      meaning: "Control, willpower, success, determination",
      description: "Victory is within reach. Stay focused and maintain control over your path forward.",
      image: "⚡",
      element: "Water",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 8,
      name: "Strength",
      meaning: "Strength, courage, persuasion, influence, compassion",
      description: "Your inner strength will overcome any obstacle. Lead with compassion and courage.",
      image: "🦁",
      element: "Fire",
      color: "from-amber-500 to-yellow-500"
    }
  ], []);

  useEffect(() => {
    // Set daily card on component mount
    const today = new Date().toDateString();
    const savedCard = localStorage.getItem('dailyTarotCard');
    const savedDate = localStorage.getItem('dailyTarotDate');
    
    if (savedCard && savedDate === today) {
      setDailyCard(JSON.parse(savedCard));
    } else {
      const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      setDailyCard(randomCard);
      localStorage.setItem('dailyTarotCard', JSON.stringify(randomCard));
      localStorage.setItem('dailyTarotDate', today);
    }
  }, [tarotCards]);

  const drawCard = () => {
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    setSelectedCard(randomCard);
    setIsRevealed(false);
    
    // Reveal after animation
    setTimeout(() => {
      setIsRevealed(true);
    }, 1000);
  };

  const resetCards = () => {
    setSelectedCard(null);
    setIsRevealed(false);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm">Daily Tarot</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Daily <span className="gradient-text">Tarot Reading</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Draw a card to receive guidance and insight for your day. Let the ancient wisdom 
            of tarot illuminate your path forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Card Drawing Section */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {!selectedCard ? (
                <div className="space-y-8">
                  {/* Card Stack */}
                  <div className="relative mx-auto w-48 h-72">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl border-2 border-gold-400 shadow-2xl"
                        style={{
                          transform: `rotate(${(i - 2) * 2}deg) translateY(${i * 2}px)`,
                          zIndex: 5 - i,
                        }}
                        animate={{
                          rotate: [(i - 2) * 2, (i - 2) * 2 + 1, (i - 2) * 2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                          <div className="text-4xl opacity-30">🌟</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onClick={drawCard}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Shuffle className="w-5 h-5 mr-2" />
                    Draw Your Card
                  </motion.button>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Selected Card */}
                  <motion.div
                    initial={{ rotateY: 180, scale: 0.8 }}
                    animate={{ 
                      rotateY: isRevealed ? 0 : 180, 
                      scale: isRevealed ? 1 : 0.8 
                    }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto w-48 h-72 relative"
                  >
                    <div className={`w-full h-full rounded-2xl shadow-2xl border-2 border-gold-400 ${
                      isRevealed ? 'bg-gradient-to-br ' + selectedCard.color : 'bg-gradient-to-br from-purple-900 to-indigo-900'
                    }`}>
                      <div className="w-full h-full rounded-xl flex flex-col items-center justify-center p-6 text-center">
                        {isRevealed ? (
                          <>
                            <div className="text-6xl mb-4">{selectedCard.image}</div>
                            <h3 className="text-white font-bold text-lg mb-2">{selectedCard.name}</h3>
                            <div className="text-white/80 text-sm px-2 py-1 bg-white/10 rounded-full">
                              {selectedCard.element}
                            </div>
                          </>
                        ) : (
                          <div className="text-4xl opacity-30">🌟</div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.button
                      onClick={drawCard}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 mr-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Shuffle className="w-5 h-5 mr-2" />
                      Draw Another
                    </motion.button>
                    <motion.button
                      onClick={resetCards}
                      className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reset
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Card Meaning */}
          <div className="space-y-6">
            {selectedCard && isRevealed ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${selectedCard.color} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white text-xl">{selectedCard.image}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedCard.name}</h3>
                    <p className="text-white/70">{selectedCard.element} Element</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Meanings
                    </h4>
                    <p className="text-white/80 text-sm">{selectedCard.meaning}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-pink-400" />
                      Your Message
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">{selectedCard.description}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-center">
                  <Eye className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Ready for Your Reading?</h3>
                  <p className="text-white/70 leading-relaxed">
                    Focus on your question or intention, then draw a card to receive guidance. 
                    The cards will reveal insights about your current situation and path forward.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Daily Card */}
            {dailyCard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Diamond className="w-5 h-5 mr-2 text-purple-400" />
                  Your Daily Card
                </h4>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-16 bg-gradient-to-br ${dailyCard.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xl">{dailyCard.image}</span>
                  </div>
                  <div>
                    <h5 className="text-white font-medium">{dailyCard.name}</h5>
                    <p className="text-white/70 text-sm">{dailyCard.meaning.split(',')[0]}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarotCards;
