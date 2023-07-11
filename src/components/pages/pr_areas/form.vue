
<script setup>
    import confirmView from '@/components/components/layouts/modal/confirm.vue';
    import deleteView from '@/components/components/layouts/modal/delete.vue';
</script>
<template>
    <div class="content-title">
        <h5>広告管理</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>広告エリア作成</h5>
        </div>
        <div class="container pr-areas">
            <form action="/pr_areas/form" method="GET">

                <div class="row mb-3 col-md-6">
                    <div class="column">対象事業</div>
                    <div class="col-md-6 grow-1">
                        <select name="" id="" class="form-select">
                            <option value="">smileガーデン</option>
                            <option value="">smileエクステリア</option>
                            <option value="">植木市場</option>
                            <option value="">GARDEM-JOB</option>
                            <option value="">お庭の達人</option>
                            <option value="">ガーデンビジネス協会</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="row mb-3 col-md-6 pe-0">
                        <div class="column">プリセット</div>
                        <div class="col-md-6 grow-1">
                            <select name="" id="" class="form-select">
                                <option value="">クレジット</option>
                                <option value="">銀行振込</option>
                                <option value="">相殺</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button type="reset" class="btn btn-orive ms-1 sp-wide mb-2">表示</button>
                        <button type="button" class="btn btn-orive ms-1 sp-wide mb-2" data-bs-toggle="modal" data-bs-target="#confirmModal">保存</button>
                        <button type="button" class="btn btn-orive ms-1 sp-wide mb-2" data-bs-toggle="modal" data-bs-target="#deleteModal">削除</button>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-6 pe-0">
                        <div class="column">新規作成</div>
                        <div class="col-md-6 grow-1">
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-orive ms-1 sp-wide mb-2" data-bs-toggle="modal" data-bs-target="#confirmModal">新規作成</button>
                    </div>
                </div>

                <div class="row mb-5 col-md-6">
                    <div class="column">繁忙期</div>
                    <div class="col-md-6 grow-1">
                        <select name="" id="" class="form-select">
                            <option value="">通常期</option>
                            <option value="">繁忙期</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-6 col-md-12 target-areas">
                    <div class="column">対象店舗</div>
                    <div class="col-md-6 row check-settings grow-1" id="cities">
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_1" value="">
                            <label class="form-check-label checkbox" for="pref_1">北海道</label>
                            <span class="openBps">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_2" value="">
                            <label class="form-check-label checkbox" for="pref_2">青森県</label>
                            <span class="openBps">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_3" value="">
                            <label class="form-check-label checkbox" for="pref_3">岩手県</label>
                            <span class="openBps">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_4" value="">
                            <label class="form-check-label checkbox" for="pref_4">宮城県</label>
                            <span class="openBps">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_5" value="">
                            <label class="form-check-label checkbox" for="pref_5">秋田県</label>
                            <span class="openBps">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="pref_6" value="">
                            <label class="form-check-label checkbox" for="pref_6">山形県</label>
                            <span class="openBps">▼</span>
                        </div>
                    </div>
                </div>

                <div class="row mt-3 col-md-12 target-areas">
                    <div class="column">除外地域</div>
                    <div class="col-md-6 row check-settings grow-1" id="removeCities">
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_area_pref_1" value="">
                            <label class="form-check-label checkbox" for="remove_area_pref_1">北海道</label>
                            <span class="openCities">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_area_pref_2" value="">
                            <label class="form-check-label checkbox" for="remove_area_pref_2">青森県</label>
                            <span class="openCities">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_area_pref_3" value="">
                            <label class="form-check-label checkbox" for="remove_area_pref_3">岩手県</label>
                            <span class="openCities">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_area_pref_4" value="">
                            <label class="form-check-label checkbox" for="remove_area_pref_4">宮城県</label>
                            <span class="openCities">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_area_pref_5" value="">
                            <label class="form-check-label checkbox" for="remove_area_pref_5">秋田県</label>
                            <span class="openCities">▼</span>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_area_pref_6" value="">
                            <label class="form-check-label checkbox" for="remove_area_pref_6">山形県</label>
                            <span class="openCities">▼</span>
                        </div>
                    </div>
                </div>

                <div class="row mt-3 col-md-12 mb-5">
                    <div class="column">除外都道府県</div>
                    <div class="col-md-6 row check-settings grow-1" id="removePrefs">
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_pref_1" value="">
                            <label class="form-check-label checkbox" for="remove_pref_1">北海道</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_pref_2" value="">
                            <label class="form-check-label checkbox" for="remove_pref_2">青森県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_pref_3" value="">
                            <label class="form-check-label checkbox" for="remove_pref_3">岩手県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_pref_4" value="">
                            <label class="form-check-label checkbox" for="remove_pref_4">宮城県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_pref_5" value="">
                            <label class="form-check-label checkbox" for="remove_pref_5">秋田県</label>
                        </div>
                        <div class="form-check form-check-inline w-auto">
                            <input class="form-check-input" type="checkbox" name="area" id="remove_pref_6" value="">
                            <label class="form-check-label checkbox" for="remove_pref_6">山形県</label>
                        </div>
                    </div>
                </div>


                <div class="col-md-12 text-end">
                    <button type="button" class="btn btn-orive ms-1 sp-wide mb-2">エクスポート (Google)</button>
                    <button type="button" class="btn btn-orive ms-1 sp-wide mb-2">エクスポート (Yahoo)</button>
                </div>

                <!-- 確認モーダル -->
                <confirmView />
                <!-- 削除モーダル -->
                <deleteView />
            </form>
        </div>
    </div>

    <!-- 複製用 -->
    <!-- 市区町村 -->
    <div class="target-cities" style="display: none;" id="originalCities">
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
    </div>
    <!-- 加盟店  -->
    <div class="target-cities" style="display: none;" id="originalBps">
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_1" value="">
            <label class="form-check-label checkbox" for="city_1">加盟店A</label>
        </div>
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_2" value="">
            <label class="form-check-label checkbox" for="city_2">加盟店B</label>
        </div>
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_3" value="">
            <label class="form-check-label checkbox" for="city_3">加盟店C</label>
        </div>
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_4" value="">
            <label class="form-check-label checkbox" for="city_4">加盟店D</label>
        </div>
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_5" value="">
            <label class="form-check-label checkbox" for="city_5">加盟店E</label>
        </div>
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_5" value="">
            <label class="form-check-label checkbox" for="city_5">加盟店F</label>
        </div>
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_5" value="">
            <label class="form-check-label checkbox" for="city_5">加盟店G</label>
        </div>
        <div class="form-check form-check-inline w-auto">
            <input class="form-check-input" type="checkbox" name="area" id="city_5" value="">
            <label class="form-check-label checkbox" for="city_5">加盟店H</label>
        </div>
    </div>

</template>

<script>
    $(function(){
        $('.openCities').on('click', function(){
            var cities = $(this).next();
            if(cities.length){ 
                if (cities.css('display') == 'block') {
                    cities.hide();
                }else{
                    cities.show();
                }
            }else{
                var parent = $(this).parent();
                var id = $(this).parent().find('.form-check-input').attr('id');
                var item = $('#originalCities').clone(true);

                item.find('.form-check').each(function(i){
                    $(this).find('input').attr('id', id+ '_'+i);
                    $(this).find('label').attr('for', id+ '_'+i);
                });

                item.show();
                item.attr('id', '');
                parent.append(item);
            }
        });

        $('.openBps').on('click', function(){
            var bps = $(this).next();
            if(bps.length){ 
                if (bps.css('display') == 'block') {
                    bps.hide();
                }else{
                    bps.show();
                }
            }else{
                var parent = $(this).parent();
                var id = $(this).parent().find('.form-check-input').attr('id');
                var item = $('#originalBps').clone(true);

                item.find('.form-check').each(function(i){
                    $(this).find('input').attr('id', id+ '_'+i);
                    $(this).find('label').attr('for', id+ '_'+i);
                });

                item.show();
                item.attr('id', '');
                parent.append(item);
            }
        });
        
    });
</script>