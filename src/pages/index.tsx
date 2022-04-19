import { Flex , Button, Stack} from "@chakra-ui/react";
import {Input} from "../components/Form"
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';


type SingInFormData = {
  email: string,
  password: string
}

export default function SingIn() {

  const singInFormSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"), 
    password: yup.string().required("Senha obrigatória"),
  })

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(singInFormSchema)
  });

  const {errors} = formState;
  console.log(errors);
  
  
  const handleSignIn: SubmitHandler<SingInFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve,2000));
    
    console.log(values);

  }



  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing="4">
          <Input 
            name="email" 
            error={errors.email}
            type="email" 
            label="E-mail" 
            {...register("email")}
          />     
          <Input 
            name="password" 
            type="password" 
            error={errors.password}
            label="Senha" 
            {...register("password")}
          />     

        </Stack>
        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
            Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
