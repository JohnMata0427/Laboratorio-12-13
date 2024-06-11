import mongoose from 'mongoose';

const legalCaseSchema = new mongoose.Schema({
    caseName: {
        type: String,
        required: true
    },
    crime: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    events: {
        type: Array,
        required: true
    },
    evidencie: {
        type: Object,
        required: true
    },
    prosecuted: {
        type: Array,
        required: true
    },
});

export default mongoose.model('LegalCases', legalCaseSchema);