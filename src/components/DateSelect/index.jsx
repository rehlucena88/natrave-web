import { addDays, subDays, format, formatISO } from 'date-fns'
import { ptBR} from 'date-fns/locale'

import { Icon } from '../icon'

export const DateSelect = ({currentDate, onChange}) => {
  const date = new Date(currentDate)

  const prevDay = () => {
      const subDate = subDays(date, 1)
      onChange(formatISO(subDate))
  }
  const nextDay = () => {
      const nextDate = addDays(date, 1)
      onChange(formatISO(nextDate))
  }
  return (
    <div className='flex space-x-4 justify-center items-center p-4'>
          <Icon name="arrowLeft" className='w-6 text-red-500' onClick={prevDay}/>
          <span className='font-bold'>{format(date, "d 'de' MMMM",{ locale: ptBR })}</span>
          <Icon name="arrowRight" className='w-6 text-red-500' onClick={nextDay}/>
      </div>
    )
  }