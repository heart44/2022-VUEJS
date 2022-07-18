import axios from 'axios';

export default {
    methods: {
        async $api(url, data) {
            return (await axios({
                method: 'post',
                url,
                data    //다른이름으로 쓸거면 data: 다른 이름 이렇게 써야함(바보같았군!!)
            }).catch(e => {
                console.error(e);
            })).data;
        },
        $base64(file) {
            return new Promise(resolve => {
                const fr = new FileReader();
                fr.onload = e => {
                    resolve(e.target.result);
                }
                fr.readAsDataURL(file);
            });
        }
    }
}