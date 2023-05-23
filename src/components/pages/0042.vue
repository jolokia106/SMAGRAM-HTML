<script setup>
import B00421 from '@/components/components/B0040/B00421.vue';
import B00422 from '@/components/components/B0040/B00422.vue';
import B00423 from '@/components/components/B0040/B00423.vue';
import B00424 from '@/components/components/B0040/B00424.vue';
import B00425 from '@/components/components/B0040/B00425.vue';
</script>
<template>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">加盟店店舗情報</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <button @click="$router.go(-1)" class="btn btn-primary ">戻る</button>
            </div>
            <div class="btn-group me-2">
                <button type="submit" class="btn btn-success ">承認</button>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-success ">更新</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        店舗基本情報
                    </div>
                    <div class="card-body">
                        <B00421 />
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        対応サービスと対応エリア一覧
                    </div>
                    <div class="card-body">
                        <B00422 />
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        確認書類
                    </div>
                    <div class="card-body">
                        <B00423 />
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        店舗の会社情報
                    </div>
                    <div class="card-body">
                        <B00424 />
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        その他情報（本部のみ編集・閲覧可能）
                    </div>
                    <div class="card-body">
                        <B00425 />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>