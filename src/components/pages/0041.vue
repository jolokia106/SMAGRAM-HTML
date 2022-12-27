<script setup>
import D00201 from '@/components/components/D0020/D00201.vue';
import C00211 from '@/components/components/C0020/C00211.vue';
import C00212 from '@/components/components/C0020/C00212.vue';
import C00213 from '@/components/components/C0020/C00213.vue';
import C00214 from '@/components/components/C0020/C00214.vue';
</script>
<template>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">加盟店基本情報</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <button @click="$router.go(-1)" class="btn btn-primary ">戻る</button>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-success ">更新</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4 ms-5">
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        顧客基本情報
                    </div>
                    <div class="card-body">
                        <C00211 />
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        担当BP
                    </div>
                    <div class="card-body">
                        <C00212 />
                    </div>
                </div>

            </div>
        </div>
        <div class="col-sm-7 ms-5">
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        クレーム履歴
                    </div>
                    <div class="card-body">
                        <C00213 />
                    </div>
                </div>

            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        顧客過去案件履歴
                    </div>
                    <div class="card-body">
                        <D00201 />
                    </div>
                </div>

            </div>
            <div class="row mb-3">
                <div class="card">
                    <div class="card-header">
                        チャット履歴
                    </div>
                    <div class="card-body">
                        <C00214 />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>