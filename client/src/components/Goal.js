import { IoFootball } from 'react-icons/io5';

export const Goal = ({ name, time }) => {
  return (
    <li className='flex items-center'>
        <span className='pr-3'>
            <IoFootball />
        </span>
        { name }
        <span className='pl-3'>
            { time }'
        </span>
    </li>
  )
}