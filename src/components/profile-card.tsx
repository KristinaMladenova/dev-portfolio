import { Box, Card, CardBody, Divider, Stack } from "@chakra-ui/react";
import React from "react";

const ProfileCard = () => {
    return (<Card className='card' >
      <CardBody width='120px'>
        <img
          src='https://joeschmoe.io/api/v1/jazebelle'
          width='100px'
          alt='Green double couch with wooden legs'
          style={{ borderRadius: '0', border: '1px solid blue' }}
        />

        <Stack direction="column" mt='2' spacing='2' width='120px'>
          <h1 className='outlined-title'> lina</h1>

          <Divider />

          <p>"This is my nickname based on a childhood teddybear named Lino 🧸️🎈"</p>
        </Stack>
      </CardBody>
    </Card>);
}

export default ProfileCard;