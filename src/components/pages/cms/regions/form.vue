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
    <div class="content-title">
        <h5>独自エリアエディタ詳細</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>記事情報</h5>
        </div>
        <div class="container">
            <form action="/regions/list" method="GET">
                <div class="row mb-5">
                    <div class="column">エリア区分</div>
                    <div class="col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="area" id="region" value="1" checked>
                            <label class="form-check-label" for="region">地方</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="area" id="area" value="2">
                            <label class="form-check-label" for="area">独自エリア</label>
                        </div>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="column">サイト表示</div>
                    <div class="col-md-8 row">
                        <switchView />
                    </div>
                </div>
                <div class="row mb-3" id="selectPref">
                    <div class="column">都道府県</div>
                    <div class="col-md-5 row">
                        <select class="form-select">
                            <option value="">北海道</option>
                            <option value="">青森県</option>
                            <option value="">岩手県</option>
                            <option value="">宮城県</option>
                            <option value="">秋田県</option>
                            <option value="">山形県</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">エリア名称</div>
                    <div class="col-md-5 row">
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">対象設定</div>
                    <div class="col-md-8 row check-settings" id="cities">
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_1" value="">
                            <label class="form-check-label checkbox" for="city_1">札幌市中央区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_2" value="">
                            <label class="form-check-label checkbox" for="city_2">札幌市北区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_3" value="">
                            <label class="form-check-label checkbox" for="city_3">札幌市東区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_4" value="">
                            <label class="form-check-label checkbox" for="city_4">札幌市白石区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_5" value="">
                            <label class="form-check-label checkbox" for="city_5">札幌市豊平区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_6" value="">
                            <label class="form-check-label checkbox" for="city_6">札幌市南区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_7" value="">
                            <label class="form-check-label checkbox" for="city_7">札幌市西区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_8" value="">
                            <label class="form-check-label checkbox" for="city_8">札幌市厚別区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_9" value="">
                            <label class="form-check-label checkbox" for="city_9">札幌市手稲区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_10" value="">
                            <label class="form-check-label checkbox" for="city_10">札幌市清田区</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_11" value="">
                            <label class="form-check-label checkbox" for="city_11">函館市</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_12" value="">
                            <label class="form-check-label checkbox" for="city_12">小樽市</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_13" value="">
                            <label class="form-check-label checkbox" for="city_13">旭川市</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="city_14" value="">
                            <label class="form-check-label checkbox" for="city_14">室蘭市</label>
                        </div>
                    </div>

                    <div class="col-md-8 row check-settings" id="prefs" style="display:none;">
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_1" value="">
                            <label class="form-check-label checkbox" for="pref_1">北海道</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_2" value="">
                            <label class="form-check-label checkbox" for="pref_2">青森県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_3" value="">
                            <label class="form-check-label checkbox" for="pref_3">岩手県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_4" value="">
                            <label class="form-check-label checkbox" for="pref_4">宮城県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_5" value="">
                            <label class="form-check-label checkbox" for="pref_5">秋田県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_6" value="">
                            <label class="form-check-label checkbox" for="pref_6">山形県</label>
                        </div>

                    </div>
                </div>
                <contentView />
                <imageView />

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
        // エリア区分選択時の処理
        $("input[name='area']").on('change', function(){
            if($("input[name='area']:checked").val() == 1){
                $('#selectPref').show();
                $('#cities').show();
                $('#prefs').hide();
            }else{
                $('#selectPref').hide();
                $('#cities').hide();
                $('#prefs').show();
            }
        });
    });
</script>