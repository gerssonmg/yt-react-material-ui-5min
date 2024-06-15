import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
    {
        title: 'Profissional',
        subheader: 'Recomendado',
        price: '15',
        description: [
            '20 usuarios incluidos',
            '10 GB de espaço',
            'Central de Ajuda',
            'Prioridade no suporte por e-mail',
            'Time dedicado',
            'Outros beneficios',
        ],
        buttonText: 'Iniciar agora',
        buttonVariant: 'contained',
    }
];
const YT_LINK = "https://www.youtube.com/watch?v=IHvYn4qThJQ"


const PrincingComponentMUI = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Card
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    background: 'linear-gradient(#033363, #021F3B)'
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            mb: 1,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="text" variant="h6">
                            {tiers[0].title}
                        </Typography>
                        <Chip
                            icon={<AutoAwesomeIcon />}
                            size="small"
                            label={tiers[0].subheader}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                        }}
                    >
                        <Typography component="h3" variant="h2">
                            R${tiers[0].price}
                        </Typography>
                        <Typography component="h3" variant="h6">
                            &nbsp; por mês month
                        </Typography>
                    </Box>
                    <Divider
                        sx={{
                            my: 2,
                            opacity: 0.2,
                            borderColor: 'grey.500',
                        }}
                    />

                    {tiers[0].description.map((line) => (
                        <Box
                            key={line}
                            sx={{
                                py: 1,
                                display: 'flex',
                                gap: 1.5,
                                alignItems: 'center',
                            }}
                        >
                            <CheckCircleRoundedIcon
                                sx={{ width: 20 }}
                            />
                            <Typography
                                component="text"
                                variant="subtitle2"
                            >
                                {line}
                            </Typography>
                        </Box>
                    ))}
                </CardContent>

                <CardActions>
                    <Button
                        fullWidth
                        variant={tiers[0].buttonVariant as 'outlined'}
                        component="a"
                        href={YT_LINK}
                        target="_blank"
                    >
                        {tiers[0].buttonText}
                    </Button>
                </CardActions>
            </Card>
            <br />

            <Card
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    background: 'linear-gradient(#033363, #021F3B)'
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            mb: 1,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="text" variant="h6">
                            {tiers[0].title}
                        </Typography>
                        <Chip
                            icon={<AutoAwesomeIcon />}
                            size="small"
                            label={tiers[0].subheader}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                        }}
                    >
                        <Typography component="h3" variant="h2">
                            R${tiers[0].price}
                        </Typography>
                        <Typography component="h3" variant="h6">
                            &nbsp; por mês month
                        </Typography>
                    </Box>
                    <Divider
                        sx={{
                            my: 2,
                            opacity: 0.2,
                            borderColor: 'grey.500',
                        }}
                    />

                    {tiers[0].description.map((line) => (
                        <Box
                            key={line}
                            sx={{
                                py: 1,
                                display: 'flex',
                                gap: 1.5,
                                alignItems: 'center',
                            }}
                        >
                            <CheckCircleRoundedIcon
                                sx={{ width: 20 }}
                            />
                            <Typography
                                component="text"
                                variant="subtitle2"
                            >
                                {line}
                            </Typography>
                        </Box>
                    ))}
                </CardContent>

                <CardActions>
                    <Button
                        fullWidth
                        variant={tiers[0].buttonVariant as 'outlined'}
                        component="a"
                        href={YT_LINK}
                        target="_blank"
                    >
                        {tiers[0].buttonText}
                    </Button>
                </CardActions>
            </Card>
            <br />
            <Card
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    background: 'linear-gradient(#033363, #021F3B)'
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            mb: 1,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="text" variant="h6">
                            {tiers[0].title}
                        </Typography>
                        <Chip
                            icon={<AutoAwesomeIcon />}
                            size="small"
                            label={tiers[0].subheader}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                        }}
                    >
                        <Typography component="h3" variant="h2">
                            R${tiers[0].price}
                        </Typography>
                        <Typography component="h3" variant="h6">
                            &nbsp; por mês month
                        </Typography>
                    </Box>
                    <Divider
                        sx={{
                            my: 2,
                            opacity: 0.2,
                            borderColor: 'grey.500',
                        }}
                    />

                    {tiers[0].description.map((line) => (
                        <Box
                            key={line}
                            sx={{
                                py: 1,
                                display: 'flex',
                                gap: 1.5,
                                alignItems: 'center',
                            }}
                        >
                            <CheckCircleRoundedIcon
                                sx={{ width: 20 }}
                            />
                            <Typography
                                component="text"
                                variant="subtitle2"
                            >
                                {line}
                            </Typography>
                        </Box>
                    ))}
                </CardContent>

                <CardActions>
                    <Button
                        fullWidth
                        variant={tiers[0].buttonVariant as 'outlined'}
                        component="a"
                        href={YT_LINK}
                        target="_blank"
                    >
                        {tiers[0].buttonText}
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default PrincingComponentMUI