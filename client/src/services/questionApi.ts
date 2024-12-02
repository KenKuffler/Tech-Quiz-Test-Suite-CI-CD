import type { Question } from '../models/Question.js';

// Backend API base URL from environment variable
const apiUrl = import.meta.env.VITE_API_URL;

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch(`${apiUrl}/questions/random`);
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};

