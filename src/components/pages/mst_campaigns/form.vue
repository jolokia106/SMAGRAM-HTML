<style lang="scss" scoped>
    @use "/src/assets/css/cms.css"; 
</style>
<script setup>
    import titleView from '@/components/components/layouts/common/cms/title.vue';
    import contentView from '@/components/components/layouts/common/cms/content.vue';
    import imageView from '@/components/components/layouts/common/cms/image.vue';
    import isOpenView from '@/components/components/layouts/common/cms/is_open.vue';
    import publishDateView from '@/components/components/layouts/common/cms/publish_date.vue';
    import switchView from '@/components/components/layouts/common/cms/switch.vue';
    import confirmView from '@/components/components/layouts/modal/confirm.vue';
    import deleteView from '@/components/components/layouts/modal/delete.vue';
</script>
<template>
    <div class="content-title row">
        <a href="/mst_campaigns/list">
            <img src="/src/assets/image/angle-left-solid.svg" alt="">
        </a>
        <h5>キャンペーンマスタ詳細</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>キャンペーン情報</h5>
        </div>
        <div class="container">
            <form action="/mst_campaigns/list" method="GET">

                <titleView />
                <contentView />

                <div class="row mb-3">
                    <div class="column">掲載期間</div>
                    <div class="col-md-8 row">
                        <div class="row mb-3">
                            <publishDateView />
                        </div>
                    </div>
                </div>

                <div class="mt-3 buttons">
                        <input type="button" class="btn btn-orive" value="登録" data-bs-toggle="modal" data-bs-target="#confirmModal">
                        <input type="button" class="btn btn-orive" value="削除" data-bs-toggle="modal" data-bs-target="#deleteModal">
                </div>
                
                <!-- 確認モーダル -->
                <confirmView />
                <!-- 削除モーダル -->
                <deleteView />
            </form>

                
        </div>
    </div>







</template>