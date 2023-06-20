<style lang="scss" scoped>
    @use "/src/assets/css/style.css";
</style>
<script setup>
    import addressModal from '@/components/components/layouts/modal/address_modal.vue';
import { VueElement } from 'vue';
import App from '../../../App.vue';
</script>
<template>
    <div class="content-title">
        <h5>帳票類項目</h5>
    </div>

    <div class="content-body">
        <form action="/reports/list" method="GET">
            <div class="content-body-title">
                <h5>対象</h5>
            </div>
            <div class="container mb-5">
                <div class="row mb-5 col-md-4">
                    <select name="" id="" class="form-select">
                        <option value="">お庭の手入れ</option>
                        <option value="">お庭づくり</option>
                        <option value="">年間管理</option>
                        <option value="">共通</option>
                    </select>            
                </div>
            </div>
            <div class="content-body-title">
                <h5>項目情報</h5>
            </div>
            <div class="container mb-5">
                <div class="row mb-3 col-md-6">
                    <div class="column">新規作成</div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="項目を入力">
                    </div>
                </div>
                <div class="container text-center mb-3">
                    <input type="button" class="btn btn-orive sp-wide" id="addReport" value="登録">
                </div>

                <div class="reports">
                    <div class="report row">
                        <p class="w-auto">項目001</p>
                        <img src="/src/assets/image/square_minus_icon.svg" alt="">
                    </div>
                    <div class="report row">
                        <p class="w-auto">項目002</p>
                        <img src="/src/assets/image/square_minus_icon.svg" alt="">
                    </div>
                    <div class="report row">
                        <p class="w-auto">項目003</p>
                        <img src="/src/assets/image/square_minus_icon.svg" alt="">
                    </div>
                </div>
            </div>


            <div class="content-body-title">
                <h5>特記事項</h5>
            </div>
            <div class="container mb-5">
                <div class="row mb-3 col-md-12">
                    <div class="column">タイトル</div>
                    <div class="col-md-8">
                        <input type="text" class="form-control" placeholder="項目を入力">
                    </div>
                </div>
                <div class="row mb-3 col-md-12">
                    <div class="column">内容</div>
                    <div class="col-md-8">
                        <textarea class="form-control"></textarea>
                    </div>
                </div>
            </div>

            <div class="container text-center mb-3">
                <input type="button" class="btn btn-orive sp-wide" id="addReport" value="登録">
            </div>

        </form>
    </div>

    <!-- モーダル -->
    <addressModal />
    
</template>


