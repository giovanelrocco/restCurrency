const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
    urlConsulta: {
        type: String,
        required: true,
    },
    dataConsulta: {
        type: Date,
        default: Date.now(),
    },
    moedaReferencia: {
        type: Int16Array,
        required: true,
    },
    moedasComparacao: {
        type: Array,
        required: true,
    },
    resultadoConversao: {
        type: Array,
        required: true,
    }
});

const Consulta = mongoose.model('Consulta', ConsultaSchema);

module.exports = Consulta;