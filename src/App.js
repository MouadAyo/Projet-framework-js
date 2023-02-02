import React, { Component } from 'react'
import { Flex, Button } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
const data = [
   { value: 'react', label: 'Débutant : 9*9 cases, 10 bombes' },
   { value: 'ng', label: 'Intermédiaire : 16*16 cases, 40 bombes' },
   { value: 'svelte', label: 'Expert : 22*22 cases, 100 bombes' },
   { value: 'vue', label: 'Maitre : 30*30 cases, 250 bombes' }
 ];
const App = () => {
   return (
      <div>
          <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
            <p>Démineur</p>
         </Flex>
          <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
         <MultiSelect
      data={data}
      placeholder="Sélection de la difficulté"
    />
            <Button>Nouvelle partie</Button>
         
            <p>TEMPS : 00:00</p>
         </Flex>
      </div>
   )
}
export default App
