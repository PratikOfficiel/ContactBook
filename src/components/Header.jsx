import {useState} from 'react';

function Header({loadData}) {

  const [page,setPage] = useState('');
  const [contacts,setContacts] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(page,contacts);
    loadData(page,contacts);
    setPage('');
    setContacts('');
  }

  return (
    <header className='bg-white flex flex-col sm:flex-row justify-between p-2'>
      <div className='text-center'>
        <h1 className='font-mono font-bold text-2xl sm:text-4xl pl-2 text-sky-500 cursor-default'>ContactBook</h1>
      </div>

      <form onSubmit={(e)=>handleSubmit(e)} className='grid grid-cols-8'>
        <input type="text" name="page" placeholder='Page no.' value={page} onChange={(e)=>setPage(e.target.value)} className='bg-sky-300/35 mr-1 focus:outline-none p-1 col-span-3'/>
        <input type="text" name="contacts" placeholder='Contacts per page' value={contacts} onChange={(e)=>setContacts(e.target.value)} className='bg-sky-300/35 mr-1 focus:outline-none p-1 col-span-3'/>
        <button type="submit" className='mx-1 bg-cyan-400 px-2 py-1 rounded-md text-white col-span-2'>Go</button>
      </form>
    </header>

  )
}

export default Header