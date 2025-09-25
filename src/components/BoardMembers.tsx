import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const BoardMembers = () => {
  const members = [
    {
      name: 'Rajesh Khadka',
      position: 'President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Former national team captain with 15 years of professional cricket experience.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rajesh@veteranscricketnepal.org'
      }
    },
    {
      name: 'Sita Rai',
      position: 'Vice President',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Pioneering womens cricket advocate and former national team coach.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sita@veteranscricketnepal.org'
      }
    },
    {
      name: 'Arjun Thapa',
      position: 'Secretary',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Sports administrator and former wicket-keeper with extensive tournament experience.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'arjun@veteranscricketnepal.org'
      }
    },
    {
      name: 'Maya Shrestha',
      position: 'Treasurer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Financial expert and passionate cricket supporter with business management background.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maya@veteranscricketnepal.org'
      }
    }
  ];

  return (
    <section id="board" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Board <span className="text-red-600">Members</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders driving Veterans Cricket Nepal forward with their 
            experience, vision, and passion for the game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.social.linkedin}
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 hover:bg-blue-50 rounded-full"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={member.social.twitter}
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:bg-blue-50 rounded-full"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${member.social.email}`}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-300 hover:bg-red-50 rounded-full"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Interested in joining our board or contributing to our mission?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;