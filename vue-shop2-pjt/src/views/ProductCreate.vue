<template>
    <main class="mt-3">
        <div class="container">
            <h2 class="text-center">제품등록</h2>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품명</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="product.product_name">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품가격</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.product_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">배송비</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">추가배송비(도서산간)</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.add_delivery_price">
                        <span class="input-group-text">원</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">카테고리</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-auto">
                            <select class="form-select" v-model="cate1" @change="changeCategory1">
                                <option :key="i" v-for="(cate1, i) in category1">{{ cate1 }}</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" v-model="cate2" @change="changeCategory2">
                                <option :key="i" v-for="(cate2, i) in category2">{{ cate2 }}</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" v-model="cate3">
                                <option :key="i" v-for="(cate3, i) in category3">{{ cate3 }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">태그</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="product.tags">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">출고일</label>
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" v-model="product.outbound_days">
                        <span class="input-group-text">일 이내 출고</span>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-dark" @click="goToList">취소하기</button>
                </div>
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-warning" @click="productInsert">저장하기</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            product: {
                product_name: '',
                product_price: 0,
                delivery_price: 0,
                add_delivery_price: 0,
                tags: "",
                outbount_days: 0,
                category_id: 1,
                seller_id: 1
            },
            categoryList: [],
            category1: [],
            category2: [],
            category3: [],
            cate1: '',
            cate2: '',
            cate3: '',
        }
    },
    created() {
        this.getCategoryList();
    },
    methods: {
        async getCategoryList() {
            const categoryList = await this.$get('/api/categoryList', {});
            console.log(categoryList);
            this.categoryList = categoryList;

            const oCategory = {};
            categoryList.forEach(item => {
                oCategory[item.cate1] = 1;    //ocategory['전자제품'] = 1;, 아이디값은 안써서 아무 값 넣어도 됨
            });

            const cate1 = []
            for(const key in oCategory) {
                cate1.push(key);
            }
            this.category1 = cate1;

            let cate2 = categoryList.filter(c => {
                return c.cate1 === cate1[0];
            });
            this.cate1 = cate1[0];

            const oCategory2 = {};
            cate2.forEach(item => {
                oCategory2[item.cate2] = 1;
                console.log('dddd' + item.cate2);
            });

            const category2 = [];
            for(const key in oCategory2) {
                category2.push(key);
            }
            this.category2 = category2;
        },
        goToList() {
            this.$router.push({path: '/sales'});
        }
    }
    //로그인확인 computed, mounted 둘 다 적어야 함, 페이지가 많아질 수록 비효율적 -> 라우터로 해결
    // computed: {
    //     user() {
    //         return this.$store.state.user;
    //     }
    // },
    // mounted() {
    //     if(this.user.email === undefined) {
    //         alert("로그인을 해야 이용할 수 있습니다.");
    //         this.$router.push({path: '/'});
    //     }
    // },
}
</script>

<style>

</style>