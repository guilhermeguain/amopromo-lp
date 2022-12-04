import { Hero } from '@components/Hero'
import { Featured } from '@components/Featured'
import { Services } from '@components/Services'
import { Benefits } from '@components/Benefits'
import { CallToAction } from '@components/CallToAction'

import { Container } from './styled'

export const Home = () => {
  return (
    <Container>
      <Hero />
      <Featured />
      <Services />
      <Benefits />
      <CallToAction />
    </Container>
  )
}
