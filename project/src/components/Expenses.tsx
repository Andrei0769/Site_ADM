import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
  category: string; // Adicionando categoria para os gastos
}

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(''); // Estado para categoria
  const [employeeCount, setEmployeeCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      date,
      category
    };
    setExpenses([...expenses, newExpense]);
    setName('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Função para calcular o total de gastos
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  // Função para calcular a média de gastos
  const calculateAverageExpenses = () => {
    return expenses.length > 0 ? calculateTotalExpenses() / expenses.length : 0;
  };

  // Função para agrupar gastos por data
  const groupExpensesByDate = () => {
    return expenses.reduce((acc, expense) => {
      acc[expense.date] = (acc[expense.date] || 0) + expense.amount;
      return acc;
    }, {} as Record<string, number>);
  };

  // Função para agrupar gastos por categoria
  const groupExpensesByCategory = () => {
    return expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {} as Record<string, number>);
  };

  const expensesByDate = groupExpensesByDate();
  const expensesByCategory = groupExpensesByCategory();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Controle de Gastos</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Adicionar Gasto</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Valor (R$)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Data
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Categoria
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">
                Quantidade de Funcionários
              </label>
              <input
                type="number"
                id="employeeCount"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Adicionar Gasto
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Histórico de Gastos</h2>
          {expenses.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Nenhum gasto registrado ainda.</p>
          ) : (
            <div className="space-y-4">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{expense.name}</p>
                    <p className="text-sm text-gray-500">{expense.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-900">
                      R$ {expense.amount.toFixed(2)}
                    </span>
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Gráfico de Gastos por Data */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Gráfico de Gastos por Data</h2>
          <div className="flex flex-col">
            {Object.entries(expensesByDate).map(([date, total]) => (
              <div key={date} className="flex items-center mb-2">
                <div className="w-1/4 text-gray-700">{date}</div>
                <div className="w-3/4 bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${(total / calculateTotalExpenses()) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-gray-900">R$ {total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico de Gastos por Categoria */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Distribuição de Gastos por Categoria</h2>
          <div className="flex flex-col">
            {Object.entries(expensesByCategory).map(([category, total]) => (
              <div key={category} className="flex items-center mb-2">
                <div className="w-1/4 text-gray-700">{category}</div>
                <div className="w-3/4 bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-600 h-4 rounded-full"
                    style={{ width: `${(total / calculateTotalExpenses()) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-gray-900">R$ {total.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;