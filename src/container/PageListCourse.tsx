import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Theme, useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { StyledButton } from '@/components/styled-button'
import { data } from '@/components/home/popular-course.data'
const CourseList = () => {
  const [personName, setPersonName] = React.useState<string[]>([])
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]
  const theme = useTheme()
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }
  function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    }
  }
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 1, md: 4 }} columns={{ xs: 4, sm: 12, md: 12 }}>
          {/* <Grid xs={12} md={3}>
            <Card>
              <CardContent>
                <div>
                  <Typography variant="h3" sx={{ fontSize: 30, color: 'black', marginBottom: '20px' }}>
                    Filter
                  </Typography>
                  <FormControl sx={{ m: 1, width: '100%' }}>
                    <InputLabel id="merk">Merek</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '100%' }}>
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '100%' }}>
                    <TextField
                      id="outlined-number"
                      label="Harga Max"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </div>
              </CardContent>
            </Card>
          </Grid> */}
          <Grid xs={12} md={12} padding={'10px'}>
            <Grid container spacing={1}>
              <Grid item xs={9} md={10}>
                <TextField
                  size="small"
                  placeholder="search..."
                  style={{ height: '40px', width: '100%', borderRadius: '12px' }}
                />
              </Grid>
              <Grid item xs={3} md={2}>
                <Box sx={{ '& button:first-child': { mr: 2 } }}>
                  <StyledButton disableHoverEffect={true}>Search</StyledButton>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h3" sx={{ fontSize: 30, color: 'black', marginBottom: '20px', marginTop: '20px' }}>
              Ini Kursus Terbaik
            </Typography>

            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {data.map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 350 }} image={_.cover} title="green iguana" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {_.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {_.session}
                      </Typography>
                      <Typography variant="body1" component="strong">
                        {_.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Category : {_.category}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small">Share</Button> */}
                      <Button
                        size="small"
                        href="https://wa.me/+6281395294204?text=Halo%20saya%20ingin%20mengetahui%20info%20produk%20ini%20lebih%20lanjut%20dari%20[agen]%0A%0ANama%20%3A%20[Nama%20Anda]%0AAlamat%20%3A%20[Alamat%20Anda]%0ANo%20Telp%20%3A%20[Nomor%20Telepon%20Anda]"
                        target="_blank"
                      >
                        Hubungi Marketing/Agen
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CourseList
