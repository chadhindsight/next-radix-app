import Image from 'next/image'
import { Badge, Card, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="1">
        <Flex direction="column" pb="4">
          <Heading>Coding Issue Tracker</Heading>
          <Text color="gray">Find issues related to your specific project</Text>
        </Flex>
        <Flex gap="4" direction="column">
          <Card>
            <Flex gap="1" direction="column">
              <Text>Issue #24 - Button Is Wrong Color</Text>
              <Flex gap="2">
                <Badge color="orange">Devops</Badge>
                <Badge color="blue">UI</Badge>
              </Flex>
              <Text>
                This is an issue that is very serious. On a dashboard that only 5 users use, there is a button that is the wrong shade of green. This is mission critical.
              </Text>
              <Flex justify="between" pt="1">
                <Flex align="center"> {/* align icon to our text */}
                  <ChatBubbleIcon />
                  <Text color="gray" ml="2" size="1">3 Comments</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>

        </Flex>
      </Container>
    </main>
  )
}
