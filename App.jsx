import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState({
    todo: [
    { id: 1, title: "Desenvolver projeto (particular)" },
    { id: 2, title: "Participar da reunião - projeto particular (06/05/26)" },
    { id: 3, title: "Entregar trabalho - tópicos especiais até quinta (amanhã)" },
    { id: 4, title: "Revisar texto (particular) - 9 de mai." }
  ],
  doing: [
    { id: 6, title: "Ler livro" }   // ✅ nova tarefa adicionada em andamento
  ],
  done: [
    { id: 5, title: "Estudar para a prova de banco de dados. A prova é dia 05/05" }
  ]
  })

  const [newTask, setNewTask] = useState("")
  const [column, setColumn] = useState("todo")

  // Função para adicionar tarefa
  const addTask = () => {
    if (newTask.trim() === "") return
    const newId = Date.now()
    setTasks(prev => ({
      ...prev,
      [column]: [...prev[column], { id: newId, title: newTask }]
    }))
    setNewTask("")
  }

  const renderColumn = (title, items, bgColor) => (
    <div style={{
      flex: 1,
      padding: '10px',
      backgroundColor: bgColor,   // cor personalizada
      borderRadius: '8px',
      minHeight: '300px'
    }}>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      {items.map(task => (
        <div key={task.id} className="postit">
          {task.title}
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Cabeçalho com Valerie */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px', 
        borderBottom: '1px solid #ccc',
        backgroundColor: '#FDE5E8'   // Valerie
      }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#000' }}>
          Estudo & Rotina 
        </h1>
      </header>

      {/* Formulário para adicionar tarefas */}
      <section style={{ 
        marginTop: '30px', 
        padding: '20px', 
        textAlign: 'center',
        backgroundColor: '#E7B4B9'   // Amazon River Dolphin
      }}>
        <h2>Adicionar nova tarefa</h2>
        <input 
          type="text" 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)} 
          placeholder="Digite a tarefa..." 
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <select value={column} onChange={e => setColumn(e.target.value)} style={{ padding: '10px', marginRight: '10px' }}>
          <option value="todo">A Fazer</option>
          <option value="doing">Em Andamento</option>
          <option value="done">Concluído</option>
        </select>
        <button onClick={addTask} style={{ padding: '10px 20px' }}>Adicionar</button>
      </section>

      {/* Quadro Kanban */}
      <section id="kanban" style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#FDE5E8'   // Valerie
      }}>
        <h2 style={{ textAlign: 'center', color: '#000' }}>Quadro de Tarefas</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {renderColumn("A Fazer", tasks.todo, "#A4565C")}     {/* Lingonberry Punch */}
          {renderColumn("Em Andamento", tasks.doing, "#E8F0A2")} {/* Primrose */}
          {renderColumn("Concluído", tasks.done, "#999D4F")}     {/* Lazy Lizard */}
        </div>
      </section>
    </>
  )
}

export default App

