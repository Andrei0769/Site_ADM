import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Target, ArrowRight, Rocket, Star, Zap, Trophy } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Aprenda no seu ritmo',
      description: 'Cursos completos com certificação'
    },
    {
      icon: Brain,
      title: 'Conhecimento prático',
      description: 'Conteúdo atualizado e relevante'
    },
    {
      icon: Target,
      title: 'Evolua sempre',
      description: 'Acompanhe seu progresso'
    }
  ];

  const floatingIcons = [
    { icon: Star, delay: '0s', duration: '4s', className: 'text-yellow-400' },
    { icon: Zap, delay: '1s', duration: '5s', className: 'text-blue-400' },
    { icon: Trophy, delay: '2s', duration: '6s', className: 'text-green-400' }
  ];

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute hidden lg:block animate-float ${item.className}`}
          style={{
            top: `${20 + index * 15}%`,
            left: `${70 + index * 10}%`,
            animationDelay: item.delay,
            animationDuration: item.duration
          }}
        >
          <item.icon className="h-8 w-8" />
        </div>
      ))}

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="h-24 w-24 bg-blue-900 dark:bg-blue-700 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-xl animate-pulse-slow">
                  <Rocket className="h-12 w-12 text-white animate-float" />
                </div>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl animate-fade-in">
                <span className="block xl:inline">Educação que</span>{' '}
                <span className="block text-blue-900 dark:text-blue-400 xl:inline animate-pulse-slow">transforma vidas</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up">
                Desenvolva habilidades essenciais para sua carreira com nossos cursos especializados em finanças, marketing, tecnologia e gestão.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-md shadow">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300"
                  >
                    Comece Agora
                    <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/courses"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transform hover:scale-105 transition-all duration-300"
                  >
                    Explorar Cursos
                  </Link>
                </div>
              </div>
            </div>
          </main>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-700 dark:to-blue-600 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <feature.icon className="h-12 w-12 text-blue-900 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transform hover:scale-105 transition-all duration-500"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Ambiente de aprendizado colaborativo"
        />
      </div>
    </div>
  );
};

export default Hero;