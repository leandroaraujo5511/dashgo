import { Box, Flex, SimpleGrid, Text , theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Heard";
import { Sidebar } from "../components/Sidebar";

const Chart =  dynamic(() => import ('react-apexcharts'),  {
    ssr: false
})

const options = {
    chart:{
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500]
    },
   
    grid: {
        show: false,
    }, 
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxios:{
        type:'datetime',
        axisborder:{
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories:[
            '2022-03-01T00:00:00.000Z',
            '2022-03-02T00:00:00.000Z',
            '2022-03-03T00:00:00.000Z',
            '2022-03-04T00:00:00.000Z',
            '2022-03-05T00:00:00.000Z',
            '2022-03-06T00:00:00.000Z',
            '2022-03-07T00:00:00.000Z',
            '2022-03-08T00:00:00.000Z',
            '2022-03-09T00:00:00.000Z',
            '2022-03-10T00:00:00.000Z',
        ],
    },
    fill:{
        opacity: 0.3,
        type:'gradient',
        gradient: {
            shade:'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3

        }
    }
}

const series = [
    { name: 'serias1', data:[48,20,24,30,90,105,144,125,64,180]}
]
const seriesAbertura = [
    { name: 'serias1', data:[6,12,4,15,3,10,34,24,36,8]}
]


export default function Dashboard(){
    return(
        <Flex direction="column" h="100vh">
            <Header/>


            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" >
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        //pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        // pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={seriesAbertura} type="area" height={160} />

                    </Box>

                </SimpleGrid>

            </Flex>
        </Flex>


    );
}