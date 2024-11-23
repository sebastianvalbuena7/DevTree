import colors from 'colors';
import server from './server';

const port: number | string = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(colors.magenta.italic('Servidor funcionando en el puerto'), port);
});