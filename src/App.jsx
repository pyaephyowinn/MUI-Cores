import { Button, Container, Divider, Typography, Box } from "@mui/material";
import { UploadFileOutlined } from "@mui/icons-material";
import MyStack from "./components/Stack";

export default function MyApp() {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h2">
        MUI Cores
      </Typography>
      <Box
        paddingBottom={2}
        borderBottom={1}
        borderColor="#eee"
        sx={{ display: "flex" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          praesentium in veniam reiciendis quis ut sequi dolorum ullam
          consequuntur enim.
        </p>
      </Box>
      <MyStack
        mt={3}
        spacing={2}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Button variant="contained">Hello World</Button>
        <Button variant="outlined">Hello World</Button>
        <Button variant="text">Hello World</Button>
      </MyStack>
      <MyStack>
        <UploadFileOutlined />
      </MyStack>
    </Container>
  );
}
