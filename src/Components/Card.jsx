import { useState } from 'react';

function Card() {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setnewtask] = useState('');

  const addtodolist = () => {
    if (newtask.trim() === '') return; 

    setTodolist([
      ...todolist,
      { 
        id: Date.now(), 
        text: newtask, 
        completed: false 
      }
    ]);
    setnewtask(''); 
  };


           const toggleComplete = (id) => {
                         setTodolist(
                  todolist.map((task) =>
                        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


                      const handleDelete = (id) => {
                     setTodolist(todolist.filter((task) => task.id !== id));
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-300 to-gray-900'> 
      <div className='flex justify-center items-center min-w-screen p-3.5'>
        <h1 className='text-4xl p-5 font-bold'>
          TO-DO-LIST
        </h1>
      </div>
         
      {/* Input bar and add button */}
      <div className='flex justify-center items-center min-w-screen p-2 gap-4'>
        <input     
          onChange={(e) => setnewtask(e.target.value)}
          value={newtask}
          className="w-96 px-3 py-1.5 border border-black rounded-sm outline-none text-base placeholder:text-gray-500"
          type="text" 
          placeholder='Add a new task..' 
        />

        <button  
          onClick={addtodolist}
          className='border border-b-black bg-white px-3 py-1.5 rounded-sm hover:bg-slate-300 text-black'
        >
          Add
        </button>
      </div>

      <ul className="w-96 mt-4 mx-auto space-y-2">
        {todolist.map((item) => (
          <li 
            key={item.id}
            className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
          >
            <div className="flex items-center gap-2">
              <input 
                type='checkbox' 
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
                className="cursor-pointer" 
              />
              <span className={item.completed ? "line-through text-shadow-black" : "text-black"}>
                {item.text}
              </span>
            </div>

            <button 
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600 cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;