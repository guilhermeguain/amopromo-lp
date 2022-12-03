import { Box, Text } from '@chakra-ui/react'

import bgHero from '@assets/images/bg-hero.jpg'

export const Home = () => {
  return (
    <Box bgImage={bgHero} bgRepeat="no-repeat" bgSize="cover" h="calc(100vh)">
      <Text>Home</Text>
    </Box>
  )
}
