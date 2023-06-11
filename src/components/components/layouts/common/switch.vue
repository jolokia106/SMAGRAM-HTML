<style lang="scss" scoped>
    @use "/src/assets/css/cms.css";
</style>
<template>
    <div class="row mb-3 switch-wrap col-md-12">
        <p class="col-md-4">サイトへの全表示</p>
        <div class="switch col-md-8">
            <input type="checkbox" id="is_all" value="1">
            <label for="is_all"><span></span></label>
            <div class="swImg"></div>
        </div>
    </div>
    <div class="row mb-3">
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">スマイルガーデン</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="is_sg" class="check-site">
                <label for="is_sg"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">スマイルエクステリア</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="is_ex" class="check-site">
                <label for="is_ex"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">愛知農園</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="is_noen" class="check-site">
                <label for="is_noen"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-3">スマイルガーデン庭造り</p>
            <div class="switch col-md-9">
                <input type="checkbox" id="is_sgex" class="check-site">
                <label for="is_sgex"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">GARDEN-JOB</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="is_gj" class="check-site">
                <label for="is_gj"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">お庭の窓口</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="is_madoguchi" class="check-site">
                <label for="is_madoguchi"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">ガーデンメーカ</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="is_gm" class="check-site">
                <label for="is_gm"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">植木市場</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="is_ueki" class="check-site">
                <label for="is_ueki"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
        <div class="row mb-3 switch-wrap col-md-12">
            <p class="col-md-4">お庭の達人</p>
            <div class="switch col-md-8">
                <input type="checkbox" id="tatsujin" class="check-site">
                <label for="tatsujin"><span></span></label>
                <div class="swImg"></div>
            </div>
        </div>
    </div>
</template>

<script>
$(function(){
    // サイトへの全表示押下時の処理
    $('#is_all').on('click', function(){
        if($('#is_all:checked').val()){
            $('.check-site').prop('checked', true);
        }else{
            $('.check-site').prop('checked', false);
        }
    });

    // 各サイト押下時の処理
    $('.check-site').on('click', function(){
        if($('.check-site').length == $('.check-site:checked').length){
            $('#is_all').prop('checked', true);
        }else{
            $('#is_all').prop('checked', false);
        }
    });

    // スイッチのボタン部押下時も動作するようにする
    $('.swImg').on('click', function(){
        if($(this).prev().prev().prop('checked')){
            $(this).prev().prev().prop('checked', false);
        }else{
            $(this).prev().prev().prop('checked', true);
        }
    });

});
</script>