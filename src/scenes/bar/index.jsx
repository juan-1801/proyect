import { Box } from "@mui/system";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

function Bar(){
    return(
        <Box m="20px">
            <Header title="Chart Bar" subtitle="Simple Bar Chart"/>
            <Box height="75vh">
                <BarChart/>
            </Box>
        </Box>
    );
}

export default Bar