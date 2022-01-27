import React from "react"
import { 
  Card, 
  CardActions, 
  CardContent, 
  Button, 
  Typography, 
  CardActionArea, 
  CardMedia,
} from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'


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


  const CustomCard = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 206px;
    max-width: 246px;

  `
  // const MyThemeComponent = styled('div')(({ theme }) => ({
  //   color: theme.palette.primary.contrastText,
  //   backgroundColor: theme.palette.primary.main,
  //   padding: theme.spacing(1),
  //   borderRadius: theme.shape.borderRadius,
  // }));
interface CharacterCardProps {
  characterNameProp: string,
  characterImageProp: string,
  characterID: number,
}
export default function CharacterCard({ 
  characterNameProp, characterImageProp, characterID }: CharacterCardProps) {
  return (
    <CustomCard sx={{ bgcolor: 'background.paper' }}>
      <CardActionArea>
        <CardContent 
        sx={{ 
        minHeight: 150, padding: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <CardMedia component="img" height="120" image={characterImageProp} alt={characterNameProp}/>
          <Typography component='div' sx={{ fontSize: 14 }} textAlign="center" color='text.primary'>
            {characterNameProp}
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions>
          <Link to={`/characters/${characterID}`}>
            <Button 
            variant="outlined" 
            size="small" 
            color="primary" 
            >
              details
            </Button>
          </Link>

        </CardActions>
    </CustomCard>
  );
}
