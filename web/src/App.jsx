import React, { useEffect } from 'react';
import notesStore from './stores/notesStore';
import Notes from './components/Notes';
import UpdateForm from './components/UpdateForm';
import CreateForm from './components/CreateForm';

const App = () => {

  const store = notesStore();
  useEffect(()=>{
    store.fetchNotes()
  }, [])

  return (
    <div className='bg-red-400'>
      <Notes/>
      <CreateForm/>
      <UpdateForm/>
    </div>
  )
}

export default App