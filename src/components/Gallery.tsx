import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caption: 'Veterans match at TU Cricket Ground'
    },
    {
      url: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caption: 'Annual tournament celebration'
    },
    {
      url: 'https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caption: 'Training session with young players'
    },
    {
      url: 'https://images.pexels.com/photos/2544459/pexels-photo-2544459.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caption: 'Team building and fellowship'
    },
    {
      url: 'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caption: 'Award ceremony highlights'
    },
    {
      url: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      caption: 'Cricket development workshop'
    }
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing memorable moments from our tournaments, training sessions, 
            and community events throughout the years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openImage(index)}
            >
              <img 
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{image.caption}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-5xl w-full">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button 
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10"
              >
                <ChevronLeft className="h-12 w-12" />
              </button>
              
              <button 
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10"
              >
                <ChevronRight className="h-12 w-12" />
              </button>

              <img 
                src={images[selectedImage].url}
                alt={images[selectedImage].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-semibold bg-black/50 rounded-lg px-4 py-2 inline-block">
                  {images[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;