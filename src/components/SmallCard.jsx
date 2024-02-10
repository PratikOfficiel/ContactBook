import {Link} from 'react-router-dom'

function SmallCard({name, gender, country, photo, id}) {
  return (
    <Link to={`user/${id}`} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 grid-flow-col justify-stretch p-2 m-2 bg-sky-100 hover:bg-sky-200 rounded-lg shadow-md shadow-gray-300 md:shadow-md hover:cursor-pointer">
        <img src={photo.medium} alt="" />
        <p className="self-center font-semibold">{name.title} {name.first} {name.last}</p>
        <p className="self-center hidden md:block">{gender}</p>
        <p className="self-center hidden sm:block">{country}</p>
    </Link>
  )
}

export default SmallCard