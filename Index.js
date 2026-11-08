const bedrock = require('bedrock-protocol');
const config = require('./config.json');

function createBot() {
    const client = bedrock.createClient({
        host: config.ip,
        port: config.port,
        username: config.name,
        offline: true
    });

    client.on('connect', () => {
        console.log('✅ Bot conectado exitosamente al servidor!');
    });

    client.on('spawn', () => {
        console.log('🟢 El bot ya hizo spawn en el mundo.');
    });

    client.on('disconnect', (err) => {
        console.log('❌ El bot fue desconectado:', err);
        setTimeout(createBot, 5000); // Reintenta conectar en 5 segundos si lo echan
    });

    client.on('error', (err) => {
        console.error('⚠️ Error en el bot:', err);
    });
}

createBot();
