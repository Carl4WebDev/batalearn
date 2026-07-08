import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SubjectSelect } from './pages/SubjectSelect'
import { TopicSelect } from './pages/TopicSelect'
import { DifficultySelect } from './pages/DifficultySelect'
import { QuestionCountSelect } from './pages/QuestionCountSelect'
import { Quiz } from './pages/Quiz'
import { Results } from './pages/Results'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<SubjectSelect />} />
        <Route path="/topics/:subject" element={<TopicSelect />} />
        <Route path="/difficulty/:subject/:topic" element={<DifficultySelect />} />
        <Route path="/questions/:subject/:topic/:difficulty" element={<QuestionCountSelect />} />
        <Route path="/quiz/:subject/:topic/:difficulty" element={<Quiz />} />
        <Route path="/results/:subject/:topic/:difficulty" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}
