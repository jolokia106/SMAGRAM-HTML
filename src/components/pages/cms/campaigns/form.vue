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
        <a href="/campaigns/list">
            <img src="/src/assets/image/angle-left-solid.svg" alt="">
        </a>
        <h5>キャンペーン詳細</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>記事情報</h5>
        </div>
        <div class="container">
            <form action="/campaigns/list" method="GET">

                <titleView />
                <contentView />
                <imageView />
                <div class="row mb-3">
                    <div class="column">特記事項</div>
                    <div class="col-md-8">
                        <textarea class="form-control"></textarea>
                    </div>
                </div>
                
                <div class="row mb-3">
                    <div class="column">サイト表示</div>
                    <div class="col-md-8 row">
                        <div class="row mb-3 switch-wrap col-md-12">
                            <p class="col-md-4">フローティング表示対象</p>
                            <div class="switch col-md-8">
                                <input type="checkbox" id="floating">
                                <label for="floating"><span></span></label>
                                <div class="swImg"></div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <isOpenView />
                            <div class="col-md-8 row">
                                <div class="col-md-6 row publish-date mb-3">
                                    <p class="col-md-5 px-0">掲載日</p>
                                    <div class="col-md-7 px-0">
                                        <input type="date" class="form-control mx-0" id="start">
                                    </div>
                                </div>
                                <div class="col-md-6 row publish-date mb-3">
                                    <p class="col-md-5 px-0">掲載終了日</p>
                                    <div class="col-md-7 px-0">
                                        <input type="date" class="form-control mx-0" id="end">
                                    </div>
                                </div>
                                <div class="col-md-6 row publish-date mb-3">
                                    <p class="col-md-5 px-0">対象人数</p>
                                    <div class="col-md-7 px-0">
                                        <input type="number" class="form-control mx-0" id="people">
                                    </div>
                                </div>
                                <div class="col-md-6 row publish-date mb-3">
                                    <p class="col-md-5 px-0">差引係数/日</p>
                                    <div class="col-md-7 mx-0">
                                        <p class="coefficient">0000</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <switchView />
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


<script>
    $(function(){
        $('#start, #end, #people').on('change', function(){
            if($('#start').val() && $('#end').val() && $('#people').val()){
                var start = new Date($('#start').val());
                var end = new Date($('#end').val());
                var diffTime = end.getTime() - start.getTime();
                var diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                var coefficient = diffDay / $('#people').val();
                // 小数点以下を四捨五入

                var num = Math.floor( coefficient) ;
                $('.coefficient').text(num);
            }
            else if(!$('#people').val()){
                $('.coefficient').text('0000');
            }
        });

    });
</script>