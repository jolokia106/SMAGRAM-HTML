<style lang="scss" scoped>
    @use "/src/assets/css/cms.css"; 
</style>
<script setup>
    import switchView from '@/components/components/layouts/common/switch.vue';
</script>
<template>
    <div class="content-title">
        <h5>重要なお知らせ詳細</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>記事情報</h5>
        </div>
        <div class="container">
            <form action="/news/list" method="GET">
                <div class="row mb-3">
                    <div class="column">タイトル</div>
                    <div class="col-md-8">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">内容</div>
                    <div class="col-md-8">
                        <textarea class="form-control"></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">画像</div>
                    <div class="col-md-8">
                        <input type="file" class="form-control">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">サイト表示</div>
                    <div class="col-md-8 row">
                        <div class="row mb-3">
                            <div class="row mb-3 switch-wrap col-md-12">
                                <p class="col-md-4">サイトへの掲載</p>
                                <div class="switch col-md-8">
                                    <input type="checkbox" id="is_open">
                                    <label for="is_open"><span></span></label>
                                    <div class="swImg"></div>
                                </div>
                            </div>

                            <div class="col-md-2 row publish-date mb-3">
                                <p class="col-md-4">掲載日</p>
                                <div class="col-md-8">
                                    <input type="date" class="form-control" id="start">
                                </div>
                            </div>
                            <div class="col-md-2 row publish-date mb-3">
                                <p class="col-md-4">掲載日</p>
                                <div class="col-md-8">
                                    <input type="date" class="form-control" id="start">
                                </div>
                            </div>
                        </div>

                        <switchView />

                    </div>

                </div>
                <div class="mt-3 buttons">
                        <input type="submit" class="btn btn-orive" value="登録">
                        <input type="submit" class="btn btn-orive" value="削除">
                </div>
            </form>
        </div>
    </div>







</template>