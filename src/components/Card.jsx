import { useParams } from 'react-router-dom'
import store from '../store/store';

function Card() {

    let {userid} = useParams();
    userid = parseInt(userid);

    const results = store.getState().data.data;

    const {name, gender, phone, picture} = results[userid];

  return (
    <div >
        <div className='container mx-auto grid grid-cols-3 bg-white mt-3 py-6 rounded-md shadow-lg shadow-gray-600 max-w-lg'>
            <div className='flex justify-center'>
                <img src={picture["large"]} alt="photo" className='rounded-sm'/>
            </div>
            <div className='col-span-2 grid gap-y-1'>
                <div className='grid grid-cols-2 gap-2 font-bold'>
                    <p>FirstName: {name.first}</p>
                    <p>LastName: {name.last} </p>
                </div>
                <p>Gender: {gender} </p>
                <p>Phone Number: {phone} </p>
            </div>
        </div>
    </div>
    
  )
}

export default Card