<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품 사진 등록</h2>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품ID</label>
                <div class="col-md-9"><div>{{ productDetail.id }}</div></div>
            </div>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품명</label>
                <div class="col-md-9"><div>{{ productDetail.product_name }}</div></div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">썸네일 이미지</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-2" :key="item.id" v-for="(item) in productImage.filter(c => c.type === 1)">
                            <div class="position-relative">
                                <img :src="getScr(item.type, item.path)" class="img-fluid">
                                <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(item);">X</div>
                            </div>
                        </div>
                    </div>
                    <input type="file" class="form-control" accept="image/png,image/jpeg" @change="uploadFile($event.target.files, 1)">
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>이미지 사이즈 : 350 * 350</li>
                            <li>파일 사이즈 : 1Mb 이하</li>
                            <li>파일 확장자 : png, jpg만 가능</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품 이미지</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-2" :key="item.id" v-for="(item) in productImage.filter(c => c.type === 2)">
                            <div class="position-relative">
                                <img :src="getScr(item.type, item.path)" class="img-fluid">
                                <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(item);">X</div>
                            </div>
                        </div>                    </div>
                    <input type="file" class="form-control" accept="image/png,image/jpeg" @change="uploadFile($event.target.files, 2)">
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>최대 5개 가능</li>
                            <li>이미지 사이즈 : 700 * 700</li>
                            <li>파일 사이즈 : 1Mb 이하</li>
                            <li>파일 확장자 : png, jpg만 가능</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품 설명 이미지</label>
                <div class="col-md-9">
                    <input type="file" class="form-control" accept="image/png,image/jpeg" @change="uploadFile($event.target.files, 3)">
                    <div class="alert alert-secondary" role="alert">
                        <ul>
                            <li>파일 사이즈 : 5Mb 이하</li>
                            <li>파일 확장자 : png, jpg만 가능</li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-2" :key="item.id" v-for="(item) in productImage.filter(c => c.type === 3)">
                            <div class="position-relative">
                                <img :src="getScr(item.type, item.path)" class="img-fluid">
                                <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(item);">X</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-3 row m-auto">
                <router-link class="nav-link" to="/sales">
                    <button type="button" class="btn btn-lg btn-dark">확인</button>
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            productName: '',
            productDetail: {},
            productImage: [],
        }
    },
    created() {
        this.productId = this.$route.query.product_id
        this.productDetail = this.$store.state.sallerSelectedProduct;
        this.getProductImage()
    },
    updated() {
        this.getProductImage()
    },
    methods: {
        async getProductImage() {
            this.productImage = await this.$get(`/api/productImageList/${this.productDetail.id}`);
        },
        async uploadFile(files, type) {
            console.log(files);
            const image = await this.$base64(files[0]);
            const formData = { image };
            const { error } = await this.$post(`/api/upload/${this.productDetail.id}/${type}`, formData);
            console.log(error);
        },
        getScr(type, path) {
            return `static/img/${this.productDetail.id}/${type}/${path}`
        },
        async deleteImage({id, product_id, type, path}) {
            // const rs = await this.$delete(`/api/productImageDelete/${id}`);  //백에서 셀렉트 함수 하나 더 만들어서 해결하는 방법
            const rs = await this.$delete(`/api/productImageDelete/${id}/${product_id}/${type}/${path}`);
            console.log(rs);
        }
    }
}
</script>

<style>

</style>