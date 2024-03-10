import React from "react";
import { Box, Container, Heading, Text, Image, VStack, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center">
          Embedded Systems & RTOS
        </Heading>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbSUyMGJvYXJkfGVufDB8fHx8MTcxMDA3OTg0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Embedded System Board" />
        <Text fontSize="xl" textAlign="justify">
          An embedded system is a dedicated computer system designed for one or a few specific functions. This system is embedded as part of a complete device often including hardware and mechanical parts.
        </Text>
        <Text fontSize="xl" textAlign="justify">
          A Real-Time Operating System (RTOS) is an operating system intended to serve real-time applications that process data as it comes in, typically without buffer delays. The main objective of an RTOS is to ensure that a certain task executes in precisely the amount of time it is supposed to.
        </Text>
        <Heading as="h2" size="lg" textAlign="center">
          Features of an RTOS
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Deterministic behavior
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Multitasking
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Inter-task communication
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Low latency for event handling
          </ListItem>
        </List>
        <Text fontSize="xl" textAlign="center">
          For more information, visit the official documentation of popular RTOS such as
          <Link href="https://www.freertos.org/" isExternal color="teal.500" mx={1}>
            FreeRTOS
          </Link>
          or
          <Link href="https://www.vxworks.com/" isExternal color="teal.500" mx={1}>
            VxWorks.
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
