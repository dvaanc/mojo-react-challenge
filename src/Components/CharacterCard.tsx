import React from "react";
import { 
  Card, 
  CardActions, 
  CardContent, 
  Button, 
  Typography, 
  CardActionArea, 
  CardMedia,
  createTheme,
  ThemeOptions
} from '@mui/material'
import { styled } from '@mui/system';
import { ThemeProvider } from "@emotion/react";
const CustomCard = styled(Card)
// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: React.CSSProperties['color'];
//     };
//   }

//   interface Palette {
//     neutral: Palette['primary'];
//   }
//   interface PaletteOptions {
//     type: string,

//   }

//   interface PaletteColor {
//     darker?: string;
//   }
//   interface SimplePaletteColorOptions {
//     darker?: string;
//   }
//   interface ThemeOptions {
//     status: {
//       danger: React.CSSProperties['color'];
//     };
//   }

  const theme: ThemeOptions = createTheme({
    palette: {
      primary: {
        main: '#19286d',
        light: '#7BACD4'
      },
      secondary: {
        main: '#12cec0',
      },
      background: {
        paper: '#1E1E1E',
      },
      text: {
        primary: "#fff",
      }
    },
  });

interface CharacterCardProps {
  characterNameProp: string,
  characterImageProp: string,
}
export default function CharacterCard({ characterNameProp, characterImageProp }: CharacterCardProps) {

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 406, bgcolor: 'background.paper', display: 'flex',  justifyContent: 'center'}}>
        <CardActionArea>
          <CardContent sx={{height: '100%'}}>
            <CardMedia
              component="img"
              height="120"
              image={characterImageProp}
              alt={characterNameProp}
            />
            <Typography
              component='div'
              sx={{ fontSize: 14 }}
              textAlign="center"
              color='text.primary'
            >
              {characterNameProp}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* sx={{ color: 'primary.light', borderColor: 'primary.light' }} */}
          <CardActions>
            <Button variant="outlined" size="small" color="secondary">
              ...details
            </Button>
          </CardActions>
      </Card>
    </ThemeProvider>
  );
}
