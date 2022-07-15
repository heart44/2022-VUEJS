import axios from 'axios';

export default {
    methods: {
        async $api(url, param) {
            return (await axios({
                method: post,
                url,
                param
            }).catch(e => {
                console.log(e)
            })).data
        }
    }
}