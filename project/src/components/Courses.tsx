import React, { useState } from 'react';
import { BookOpen, Award, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 'financial',
    category: 'Educação Financeira',
    title: 'Introdução à Educação Financeira',
    description: 'Aprenda conceitos básicos de finanças pessoais e planejamento financeiro para uma vida financeira saudável.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    material: {
      title: 'Fundamentos de Educação Financeira',
      description: 'Material completo sobre conceitos básicos de finanças pessoais, orçamento familiar, poupança, investimentos e planejamento financeiro.'
    },
    level: 'Iniciante',
    rating: 4.8
  },
  {
    id: 'marketing',
    category: 'Marketing e Propaganda',
    title: 'Marketing Digital e Estratégias de Propaganda',
    description: 'Domine as principais estratégias de marketing digital e propaganda para impulsionar seus resultados.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    material: {
      title: 'Guia Completo de Marketing Digital',
      description: 'Material abrangente sobre estratégias de marketing digital, SEO, mídias sociais, copywriting e análise de dados.'
    },
    level: 'Intermediário',
    rating: 4.7
  },
  {
    id: 'tech',
    category: 'Educação Tecnológica',
    title: 'Fundamentos da Tecnologia Moderna',
    description: 'Explore os conceitos fundamentais da tecnologia e sua aplicação no mundo moderno.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    material: {
      title: 'Tecnologia Moderna: Conceitos Fundamentais',
      description: 'Material detalhado sobre programação, inteligência artificial, cloud computing e cibersegurança.'
    },
    level: 'Iniciante',
    rating: 4.9
  },
  {
    id: 'management',
    category: 'Gestão em Geral',
    title: 'Gestão Empresarial e Liderança',
    description: 'Desenvolva habilidades essenciais de gestão e liderança para o sucesso empresarial.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    material: {
      title: 'Gestão Empresarial: Da Teoria à Prática',
      description: 'Material completo sobre fundamentos de gestão, liderança, gestão de equipes, processos e projetos.'
    },
    level: 'Intermediário',
    rating: 4.6
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const categories = Array.from(new Set(courses.map(course => course.category)));
  const levels = Array.from(new Set(courses.map(course => course.level)));

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-400 mb-4 animate-fade-in">Nossos Cursos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 animate-slide-up">Escolha seu caminho de aprendizado</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5 transition-colors group-hover:text-blue-500" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 animate-slide-down">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Categoria
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-white transition-colors"
                  >
                    <option value="">Todas as categorias</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Nível
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:bg-gray-700 dark:text-white transition-colors"
                  >
                    <option value="">Todos os níveis</option>
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className="relative h-48 group">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-900 dark:to-blue-800 opacity-60 transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-900 dark:bg-blue-700 rounded-full transform transition-transform duration-300 hover:scale-110">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 text-sm font-semibold text-white bg-gray-700 dark:bg-gray-600 rounded-full transform transition-transform duration-300 hover:scale-110">
                    {course.level}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center bg-white dark:bg-gray-800 rounded-full px-2 py-1 transform transition-transform duration-300 hover:scale-110">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm font-medium dark:text-white">{course.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{course.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">{course.description}</p>

                <div className="space-y-4">
                  <div 
                    className={`flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 ${
                      hoveredCourse === course.id ? 'transform scale-105 shadow-md' : ''
                    }`}
                  >
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 text-blue-900 dark:text-blue-400" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{course.material.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Material completo do curso</p>
                      </div>
                    </div>
                    <Link
                      to={`/course/${course.id}/material`}
                      className="px-4 py-2 text-sm font-medium text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      Acessar Material
                    </Link>
                  </div>

                  <Link
                    to={`/course/${course.id}/quiz`}
                    className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 transition-all duration-300 transform ${
                      hoveredCourse === course.id ? 'scale-105 shadow-lg' : ''
                    }`}
                  >
                    <Award className="h-5 w-5 mr-2" />
                    Fazer Prova
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Nenhum curso encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;