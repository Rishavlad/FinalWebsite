import React from 'react';
import { Users, Trophy, Heart, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Brotherhood',
      description: 'A strong community of cricket veterans united by passion and experience.'
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: 'Excellence',
      description: 'Maintaining the highest standards of cricket and sportsmanship.'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Passion',
      description: 'Driven by love for the game and dedication to cricket development.'
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Mission',
      description: 'Promoting cricket culture and mentoring young talents in Nepal.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">Veterans Cricket</span> <span className="text-blue-600">Nepal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dedicated organization of cricket veterans committed to preserving the spirit 
            of cricket in Nepal while fostering the development of future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by passionate cricket veterans, our organization brings together decades of 
              collective experience in Nepali cricket. We believe in the power of cricket to unite 
              communities and build character.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Through our various programs and initiatives, we aim to create opportunities for 
              veteran players to stay connected with the game while sharing their knowledge and 
              experience with aspiring cricketers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment extends beyond the boundaries of the cricket field, as we work towards 
              building a stronger cricket community in Nepal.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="text-red-600 group-hover:text-blue-600 transition-colors duration-300 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-xl mb-6 opacity-90">
            Be part of a legacy that celebrates cricket and builds the future of the sport in Nepal.
          </p>
          <button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;