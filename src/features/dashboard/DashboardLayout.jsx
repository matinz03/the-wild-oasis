import styled from 'styled-components'

import DurationChart from './DurationChart'
import SalesChart from './SalesChart'
import Stats from './Stats'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays'
import { useCabins } from '../cabins/useCabins'
import Spinner from '../../ui/Spinner'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { isLoading: isLoading1, bookings, numDays } = useRecentBookings()
  const { isLoading: isLoading2, confirmedStays } = useRecentStays()
  const { isLoading: isLoading3, cabins } = useCabins()

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      {/* <TodayActivity /> */}
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
