const API_URL = 'http://localhost:3000/tasks'

export const getTasks = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()

  if(data) {
    return data
  }
}

export const deleteTask = async (id) => {    
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
}

export const toggleTask = async (task) => {    
  await fetch(`${API_URL}/${task.id}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(task)
  })
}

export const addTask = async (task) => {    
  await fetch(`${API_URL}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(task)
  })
}
