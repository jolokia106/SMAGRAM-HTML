<script setup>
import B00411 from '@/components/components/B0040/B00411.vue';
import B00412 from '@/components/components/B0040/B00412.vue';
import B00413 from '@/components/components/B0040/B00413.vue';
import B00414 from '@/components/components/B0040/B00414.vue';
</script>
<template>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">加盟店基本情報</h1>
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
        <div class="col-sm-5 ms-5">
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        ステータス
                    </div>
                    <div class="card-body">
                        <B00411 />
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        ファネル
                    </div>
                    <div class="card-body">
                        <B00412 />
                    </div>
                </div>

            </div>
        </div>
        <div class="col-sm-6 ms-5">
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        契約情報
                    </div>
                    <div class="card-body">
                        <B00413 />
                    </div>
                </div>

            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        基本情報
                    </div>
                    <div class="card-body">
                        <B00414 />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>