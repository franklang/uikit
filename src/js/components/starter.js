import Class from '../mixin/class';
import {$, empty, html} from 'uikit-util';

export default {

    mixins: [Class],

    props: {
        text: String
    },

    data: {
        text: 'Hello world!'
    },

    connected() {
        this.start();
    },

    disconnected() {
        this.stop();
    },

    methods: {

        start() {
            this.stop();
            console.log(getText(this.text));
        },

        stop() {

        }

    }

};

function getText(text) {
    return text;
}
