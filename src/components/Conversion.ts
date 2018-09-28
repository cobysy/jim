export class Conversion {
    get(mode, sentence, cb) {
        cb(null, { segments: [{ candidates: ['abc', 'def'] }] });
    }
}
