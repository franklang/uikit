import Class from '../mixin/class';
import {$, empty, html} from 'uikit-util';

export default {

    mixins: [Class],

    props: {
        text: String,
        clsWrapper: String
    },

    data: {
        text: 'Hello world!',
        clsWrapper: '.uk-starter'
    },

    // computed: {
    //     text({text, clsWrapper}, $el) {
    //         return $(clsWrapper.html(text), $el);
    //     }
    // },

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
            // html(el, digits.map(() => '<span></span>').join(''));
            html($({clsWrapper}), getText(this.text));
        },

        stop() {

        }

    }

};

function getText(text) {
    return text;
}
