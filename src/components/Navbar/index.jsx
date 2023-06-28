import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/layout"
import { SiCoinmarketcap } from 'react-icons/si'

export const Navbar = () => {
  return (
    <Box
      as="header"
      alignItems={'center'}
      border={'1px solid red'}
      display={'flex'}
      justifyContent={'space-between'}
      minH={'60px'}
      mx={'auto'}
      px={3}
      w={'container.md'}
    >
      <Flex
        alignItems={'center'}
      >
        <SiCoinmarketcap
          fontSize={'1.5rem'}
        />
        <Heading 
          as={'h3'}
          fontSize={'1.5rem'}
          ml={2}
        >
          Market-Task
        </Heading>
      </Flex>

      <Stack
        direction={'row'}
        spacing={'24px'}
      >
        <Link>Profile</Link>
        <Link>Dashboard</Link>
        <Link>Messages</Link>
        <Link>Logout</Link>
      </Stack>
    </Box>
  )
}
