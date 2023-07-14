<style lang="scss" scoped>
    @use "/src/assets/css/style.css";
</style>
<script setup>
    import addressModal from '@/components/components/layouts/modal/address_modal.vue';
</script>
<template>
    <div class="content-title row">
        <a href="/bp_expenses/list">
            <img src="/src/assets/image/angle-left-solid.svg" alt="">
        </a>
        <h5>備品費用管理詳細</h5>
    </div>

    <div class="content-body">
        <form action="/expenses/list" method="GET">
            <div class="content-body-title">
                <h5>基本情報</h5>
            </div>
 
            <div class="container mb-5 expenses">
                <div class="row mb-3 col-md-6">
                    <div class="column">加盟店</div>
                    <div class="col-md-3">
                        <input type="button" class="btn btn-orive sp-wide" id="addReport" value="BP選択">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="column">名目</div>
                    <div class="col-md-8">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="nominal" id="claim" value="1" checked disabled="disabled">
                            <label class="form-check-label" for="claim">請求</label>
                        </div>
                    </div>
                </div>

                <!-- 請求のみ表示 -->
                <div id="claimForm">
                    <div class="row mb-5">
                        <div class="column"></div>
                        <div class="col-md-8 row">
                            <div class="row e-item sp-wide">
                                <p>種別</p>
                                <div class="sp-wide">
                                    <select class="form-select" disabled="disabled">
                                        <option value="">加盟金</option>
                                        <option value="">違約金</option>
                                        <option value="">立替金</option>
                                        <option value="">研修費</option>
                                        <option value="">総会費</option>
                                        <option value="" selected>備品代</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row e-item sp-wide">
                                <p>その他</p>
                                <div class="wi-200 sp-wide">
                                    <input type="text" class="form-control" placeholder="テキスト">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-5" id="e-item-area">
                        <div class="row e-items">
                            <div class="row e-item sp-wide">
                                <p class="wi-100">清算タイプ</p>
                                <div class="wi-150 sp-wide">
                                    <select class="form-select">
                                        <option value="">相殺</option>
                                        <option value="">振込</option>
                                        <option value="">支払</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row e-item sp-wide">
                                <p class="wi-50">相殺月</p>
                                <div class="wi-170 sp-wide">
                                    <input type="date" class="form-control">
                                </div>
                            </div>
                            <div class="row e-item sp-wide">
                                <p class="wi-50">小計</p>
                                <div class="sp-wide">
                                    <input type="number" class="form-control subtotal" placeholder="00,000">
                                </div>
                            </div>
                            <div class="row e-item sp-wide">
                                <p class="wi-50">値引</p>
                                <div class="sp-wide">
                                    <input type="number" class="form-control discount" placeholder="00,000">
                                </div>
                            </div>
                            <div class="row e-item sp-wide">
                                <p class="wi-60">消費税</p>
                                <div class="wi-100 sp-wide e-amount">
                                    <span class="tax">0,000</span> 円
                                </div>
                            </div>
                            <div class="row e-item sp-wide">
                                <p class="wi-100">合計 (税込)</p>
                                <div class="wi-100 sp-wide e-amount">
                                    <span class="total">0,000</span> 円
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-buttons">
                        <img src="/src/assets/image/square_plus_icon.svg" id="add">
                        <img src="/src/assets/image/square_minus_icon.svg" id="remove">
                    </div>
                </div>

                <div class="col-md-8 row mt-5 pt-5 pb-5 e-total">
                        <div class="column">総額</div>
                        <div class="col-md-7">
                            <span id="allTotal">00,000</span> 円
                        </div>
                </div>
                <div class="col-md-8 row mt-5 pb-5 e-remarks">
                    <div class="column">備考</div>
                    <div class="col-md-7">
                        <textarea class="form-control" rows="5"></textarea>
                    </div>
                </div>
            </div>

            <div class="container text-center mb-3">
                <input type="submit" class="btn btn-orive sp-wide" id="" value="登録">
            </div>

        </form>
    </div>

    <!-- モーダル -->
    <addressModal />

    <!-- 複製用 -->
    
    <div class="row" id="original" style="display: none;">
        <div class="row e-item sp-wide">
            <p class="wi-100">清算タイプ</p>
            <div class="wi-150 sp-wide">
                <select class="form-select max-wi">
                    <option value="">相殺</option>
                    <option value="">振込</option>
                    <option value="">支払</option>
                </select>
            </div>
        </div>
        <div class="row e-item sp-wide">
            <p class="wi-50">相殺月</p>
            <div class="wi-170 sp-wide">
                <input type="date" class="form-control">
            </div>
        </div>
        <div class="row e-item sp-wide">
            <p class="wi-50">小計</p>
            <div class="sp-wide">
                <input type="number" class="form-control subtotal" placeholder="00,000">
            </div>
        </div>
        <div class="row e-item sp-wide">
            <p class="wi-50">値引</p>
            <div class="sp-wide">
                <input type="number" class="form-control discount" placeholder="00,000">
            </div>
        </div>
        <div class="row e-item sp-wide">
            <p class="wi-60">消費税</p>
            <div class="wi-100 sp-wide e-amount">
                <span class="tax">0,000</span> 円
            </div>
        </div>
        <div class="row e-item sp-wide">
            <p class="wi-100">合計 (税込)</p>
            <div class="wi-100 sp-wide e-amount">
                <span class="total">0,000</span> 円
            </div>
        </div>
    </div>
    
</template>


<script scoped>
    $(function(){
        // 請求追加・削除
        var items = $('#e-item-area');
        if($(".e-items").length == 1){
            $('#remove').hide();
        }
        // $('#add').on('click',function(){
        //     var item = $('#original').clone(true);
        //     item.show();
        //     item.addClass('e-items');
        //     item.attr('id', '');
        //     items.append(item);
        //     $('#remove').show();
        // });
        // $('#remove').on('click',function(){
        //     $($(".e-items")[$(".e-items").length-1]).remove(); 
        //     if($(".e-items").length == 1){
        //         $('#remove').hide();
        //     }
        //     changeClaim();
        // });

        // 請求・支払変更
        $("input[name='nominal']").on('change', function(){
            if($(this).val() == 1){
                $('#claimForm').show();
                $('#paymentForm').hide();
            }else{
                $('#claimForm').hide();
                $('#paymentForm').show();
            }
        });

        // 合計金額計算
        $(document).on('change', '.subtotal, .discount', function(){
            
            if($(this).parent().parent().parent().parent().parent().attr('id') == 'claimForm'){
                // 請求時
                changeClaim();
            }else{
                // 支払時
                changePayment();
            }

            
        });


        // 請求計算
        function changeClaim(){
            let allTotal = 0;
            $('.e-items').each(function(){
                var subtotal = $(this).find('.subtotal').val();
                var discount = $(this).find('.discount').val();
                var total = Number(subtotal) - Number(discount);
                var tax = Math.ceil(total/10);
                $(this).find('.tax').text(tax);
                $(this).find('.total').text(total + tax);
                allTotal += total + tax; 
            });

            $('#allTotal').text(allTotal.toLocaleString());
        }

        // 支払計算
        function changePayment(){

        }

    });
</script>